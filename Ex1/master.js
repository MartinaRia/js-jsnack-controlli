/* 1 - L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.
2 - L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.
3 - Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. */

/* 1 - L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.*/

var result, other

var numUno = parseInt(prompt("Prego inserire un numero"));

var numDue = parseInt(prompt("Prego inserire un altro numero"));

if (numUno > numDue) {
  result = numUno;
  other = numDue;
} else {
  result = numDue;
  other = numUno;
}

document.getElementById('maggiore').innerHTML = result

document.getElementById('altro').innerHTML = other
