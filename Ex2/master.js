/* 1 - L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.
2 - L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.
3 - Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. */

/* 2 - L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.*/

var result, other

var parolaUno = prompt("Prego inserire una parola");

var parolaDue = prompt("Prego inserire un'altra parola");

if (parolaUno.length < parolaDue.length) {
  result = parolaUno;
  other = parolaDue;
} else {
  result = parolaDue;
  other = parolaUno;
}

document.getElementById('minore').innerHTML = result

document.getElementById('altro').innerHTML = other
