// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore

// VARIABILI
var primoNumero;
var secondoNumero;

// VALORI
primoNumero = parseInt(prompt('Inserisci il primo numero'));
secondoNumero = parseInt(prompt('Inserisci il secondo numero'));

// IF

if (primoNumero > secondoNumero) {
  console.log('Il primo numero è maggiore');
}

else if (primoNumero < secondoNumero) {
  console.log('Il secondo numero è maggiore');
}

// RICORDATI CHE ELSE VA SENZA CONDIZIONE
else {
  console.log('I numeri inseriti sono uguali');
}
