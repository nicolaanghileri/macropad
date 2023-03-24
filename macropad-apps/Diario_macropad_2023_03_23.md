# Macropad - Diario di lavoro
#### Nicola Anghileri
### Trevano, 24 Marzo 2023

## Lavori svolti


|Orario        |Lavoro                |
|--------------|-----------------------------------------------------------------------------|
|08:20-9:50    | Creazione View ```MacroCreation```                                          |
|12:30-14:00   | Creazione delle view /macros/Macro.js + MacroCreation.js + MacroDashboard.js,<br>|
|14:15-16:00   | Cleanup della cartella di lavoro vedi sezione ```Cleanup```|
<br> 
Marcro -> Componente macro cliccabile per Dashboard delle macro, <br> 
MacroCreation -> View per la creazione della macro, finita, vedi TODO nei commenti del file.<br> 
MacroDashboard -> Dashboard che contiene tutti i componenti Macro<br> 

## Cleanup
- commenti + pretty: /src/components/buttons/* <br>
- delete di: src/avatar e src/macros (Vecchio e inutile) <br>
- commenti + pretty: /src/components/hooks/* <br>
- comment + pretty: /src/services/axios.js <br>
- delete di: /utils/* (Vecchio e inutile)<br>

##  Problemi riscontrati e soluzioni adottate
9:50 - Ovviamente dovevano esserci problemi, l'evento onChange del radio button non viene invocato 
e il debug non ha portato ancora nessun'informazine.

14:40: Problema è stato risolto utilizzando un nuovo componente, esteticamente più carino per la 
User Experience e con onChange funzionante.


## Punto della situazione rispetto alla pianificazione
In ritardo.

## Programma di massima per la prossima giornata di lavoro
Continuare con il lavoro del display della macro.