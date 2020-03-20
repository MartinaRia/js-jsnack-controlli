/* 1 - L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.
2 - L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.
3 - Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. */

/* 3 - Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.*/


var numUno = parseInt(prompt("Prego inserire un numero"));
var numDue = parseInt(prompt("Prego inserire un altro numero"));
var numTre = parseInt(prompt("Prego inserire un altro altro numero"));
var numQuattro = parseInt(prompt("Dai, l'ultimo numero, giuro!"));
var numCinque = parseInt(prompt("Scherzavo, questo è l'ultimo, davvero davvero."));

var result = numUno + numDue + numTre + numQuattro + numCinque

document.getElementById('somma').innerHTML = result
