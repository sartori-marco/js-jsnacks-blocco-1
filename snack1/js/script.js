// Primo snack
// Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while

var sommaNumeri = 0;

// CON FOR


for (var i = 0; i < 5; i++) {
  var numeroUtente = parseInt(prompt('inserisci un numero'));
  sommaNumeri +=numeroUtente;

}
console.log(sommaNumeri);


// CON WHILE

var i = 0;
while (i <= 4) {
  var numeroUtente = parseInt(prompt('inserisci un numero'));
  sommaNumeri +=numeroUtente;
  i++;
}
console.log(sommaNumeri);
