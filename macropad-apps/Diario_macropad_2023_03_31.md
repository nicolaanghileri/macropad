# Macropad - Diario di lavoro
#### Nicola Anghileri
### Trevano, 31 Marzo 2023

## Lavori svolti


|Orario        |Lavoro                |
|--------------|-----------------------------------------------------------------------------|
|08:20-09:50   | Richiesta Axios per il display delle chiavi.                                |
|10:05-11:35   | Discussione con il sore per i requisiti e sistemazione richiesta            |
|12:30-14:00   | Lavoro sulla MyAccount page, adesso tutto funzionante tranne deletion della chiave.           |

## Lavori:
I lavori dell'applicativo sono suddivisi in 2 Thread:
    - Thread 1: Detecting dell'applicazione on-top.
    - Thread 2: Send dei dati verso la rest-api.

Fatto funzionanate.
<br>
Aggiunta la system tray per la gestione del programma:
    - Exit -> Chiude il programma
    - Configuration -> Apre il file di conf con l'app default di windows
    - TODO: Pause -> Pausa l'applicazione

##  Problemi riscontrati e soluzioni adottate
Problema iniziale:<br></br>
I dati ritornati dalla rest-api non erano corretti perchè, 
l'email passata per eseguire la query era di tipo undefined.
C'è stato un errore da parte mia, leggevo ```req.body.email``` al posto di leggere ```req.props.email```
<br></br>
Secondo problema:
<br></br>
il mapping dei dati, per poi mostrarli all'interno della tabella non funziona, non riesco a capire perchè ma il metodo ```JSON.parse(req.body)``` ritorna un errore dicendo che req.body è ANONIMUS. 
La lettura singola del contenuto funziona infatti posso loggare con ```JSON.stringify()``` e visualizzare il contenuto, quindi dovrebbe essere facile da risolvere adesso.

Sistemato tutti i problemi utilizzando ```JSON.stringify()``` direttamente, dopodiché con il map se ne occupava JS a ordinare il tutto. 
Tabella viene mostrata.

## Punto della situazione rispetto alla pianificazione
In ritardo.

## Programma di massima per la prossima giornata di lavoro
