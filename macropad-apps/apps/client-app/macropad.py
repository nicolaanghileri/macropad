import psutil
import win32process
import win32gui
import requests
import json

url = 'http://localhost:3001/api/v1/socket';
previous_process_name = ""
previous_pid = 0;

while True:
    try: 
        hwnd = win32gui.GetForegroundWindow()
        _, pid = win32process.GetWindowThreadProcessId(hwnd)
        process = psutil.Process(pid)
        process_name = process.name()

        if process_name != previous_process_name:
            print("New app open: " + process_name)
            previous_process_name = process_name
            data = {'key': "testkey", 'process' : process_name}
            headers = {'Content-type': 'application/json'}
            response = requests.post(url, data=json.dumps(data), headers=headers)
    except psutil.NoSuchProcess:
        pass
    except Exception as e:
        pass