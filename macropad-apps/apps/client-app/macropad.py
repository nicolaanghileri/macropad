import requests
import json
import threading
import win32gui
import win32process
import psutil
import time
import queue
import pystray
import PIL.Image
import os
import signal
import sys
import configparser
import socket

url = 'http://localhost:3001/api/v1/socket'
url_configuration = 'http://localhost:3001/api/v1/socket/configuration'

# Creazione della coda condivisa tra i due thread
shared_queue = queue.Queue()
session = requests.Session()
headers = {'Content-type': 'application/json'}
session.headers.update(headers)
# TODO: Add checks to remove bad Error handling with try chatch.


def send_data():
    while True:
        # Estrazione dei dati dalla coda condivisa
        try:
            data = shared_queue.get()
            # Implementazione della logica per l'invio dei dati
            print("Data received: ", data)
            response = requests.post(url, json=data)
            print("Response: ", response)
            if response.status_code == 200:
                print("Request was successful")
            else:
                print(
                    "Request failed with status code {}".format(
                        response.status_code
                    )
                )
        except Exception as e:
            print(f"Error sending data: {e}")
        finally:
            shared_queue.task_done()
        time.sleep(0.1)


# Funzione che aggiunge alla queue il cambiamento di applicazione
def get_process():
    previous_process_name = ""
    while True:
        try:
            hwnd = win32gui.GetForegroundWindow()
            _, pid = win32process.GetWindowThreadProcessId(hwnd)
            process = psutil.Process(pid)
            process_name = process.name()
            if process_name != previous_process_name:
                data = {"key": "testkey", "process": process_name}
                shared_queue.put(data)
                previous_process_name = process_name
        except psutil.NoSuchProcess:
            pass
        except Exception as e:
            print(f"Error getting process name: {e}")
        time.sleep(0.1)

# On clicked for the system tray menu
def on_clicked(icon, item):
    if str(item) == "Exit":
        icon.stop()
    elif str(item) == "Configuration":
        os.system(f"start macropad.conf")


def tray():
    image = PIL.Image.open("icon.png")

    icon = pystray.Icon("Macropad", image, menu=pystray.Menu(
        pystray.MenuItem("Exit", on_clicked),
        pystray.MenuItem("Configuration", on_clicked)
    ))
    icon.run()


def signal_handler(sig, frame):
    print('You pressed Ctrl+C!')
    sys.exit(0)

def check_configuration(): 
    #Retrieve all the data needed.
    hostname = socket.gethostname()
    config = configparser.ConfigParser()
    config.read('macropad.conf')
    key = config['DEFAULT']['key']
    
    # Send post to configuration, if response is 401 device is missing.
    data = {"key": key}
    response = requests.post(url_configuration, json=data)
    if response.status_code == 401:
        register = {"key": key, "device": hostname}
        registration = requests.post(url_configuration, json=register)
        if registration.status_code != 200:
            print("Fatal error") 
        else:
            print("Registration complete")
    else:
        print("Device already registered, let's get started")   
    
if __name__ == "__main__":
    #Setup interruzione con CTRL+C
    signal.signal(signal.SIGINT, signal_handler)
    #Creazione e startup delle thread per inivo e detection
    thread_get_process = threading.Thread(target=get_process)
    thread_send_data = threading.Thread(target=send_data)

    thread_get_process.start()
    thread_send_data.start()

    tray()

    # Attendi che i thread terminino
    thread_get_process.join()
    thread_send_data.join()
