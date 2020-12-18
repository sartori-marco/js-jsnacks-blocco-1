// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.


// VARIABILI

var primaParola;
var secondaParola;

// VALORI
var primaParola = prompt('inserisci la prima parola');
var secondaParola = prompt('inserisci la seconda parola');

var lunghezzaPrimaParola = primaParola.length;
var lunghezzaSecondaParola = secondaParola.length;


// IF

if (lunghezzaPrimaParola > lunghezzaSecondaParola) {
  console.log('Parole dalla più corta alla più lunga: ' + secondaParola + ' ' + primaParola);
}
else if (lunghezzaPrimaParola < lunghezzaSecondaParola) {
  console.log('Parole dalla più corta alla più lunga: ' + primaParola + ' ' + secondaParola);
}
else {
  console.log('Le parole hanno lunghezza uguale');
}
