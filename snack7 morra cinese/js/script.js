// Realizziamo il gioco della morra cinese in JavaScript. Vince chi totalizza per primo 4 punti.

// VARIABILI: AL PC PER FAR SCEGLIERE SASSO CARTA O FORBICE + INSERIMENTO UTENTE + PUNTEGGIO

var pc;
var utente;
var punteggioUtente = 0;
var punteggioPc = 0;


// IMPOSTO IL GIOCO

while ((punteggioUtente != 4) && (punteggioPc != 4)) {
  utente = prompt('Inserisci sasso, carta o forbice');

  for (var i = 0; i < 3; i++) {
    //IL PC SCEGLIE SASSO CARTA O FORBICE CON 1 2 O 3
    pc = numeroRandom(1,3);
    if (pc == 1) {
      pc = 'sasso'
    }
    else if (pc == 2) {
      pc = 'carta'
    }
    else {
      pc = 'forbice'
    }
  }

  // CARATTERI NON SUPPORTATI
  if ((utente != 'sasso') && (utente != 'carta') && (utente != 'forbice')) {
    alert('Errore. Hai inserito un carattere non valido');
  }
  // CONDIZIONI GIOCO
  else if ((utente == 'sasso' && pc == 'forbice') || (utente == 'carta' && pc == 'sasso') || (utente == 'forbice' && pc == 'carta')) {
    console.log(utente, pc);
    ++punteggioUtente;

  }
  else if ((utente == 'sasso' && pc == 'sasso') || (utente == 'carta' && pc == 'carta') || (utente == 'forbice' && pc == 'forbice')) {
    console.log(utente, pc);
  }

  else {
    console.log(utente, pc );
    ++punteggioPc;

  }

}

// PUNTEGGI
console.log(punteggioUtente, punteggioPc);

// DICHIARO CON UNA FUNZIONE IL VINCITORE

var vittoria = vincitore(punteggioUtente, punteggioPc);
console.log(vittoria);




// FUNZIONI
function numeroRandom(min, max){
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function vincitore(x,y) {
  var vit;
  if (x > y) {
    vit = 'Complimenti, hai vinto';
  }
  else if (x < y) {
    vit = 'Hai perso, ritenta';
  }
  return vit;
}






//
