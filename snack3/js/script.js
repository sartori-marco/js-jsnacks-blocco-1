// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.


var nomi = ['Pippo', 'Pluto', 'Paperino', 'Paperina'];

// INSERISCI IL NOME
var nomeUtente = prompt('Inserisci il tuo nome');

var messaggio = false;


// LETTERA MAIUSCOLA
nomeUtente = nomeUtente.charAt(0).toUpperCase() + nomeUtente.substr(1).toLowerCase();

for (var i = 0; i < nomi.length; i++) {
  if (nomeUtente == nomi[i]) {
    messaggio = true;
  }

}




if (messaggio == true) {
  console.log('Puoi partecipare');
}
else if (messaggio == false) {
  console.log('non puoi partecipare');
}
