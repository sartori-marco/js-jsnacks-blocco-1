// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array



var array = [];

for (var i = 0; i < 5; i++) {
  var numero = parseInt(prompt('inserisci un numero'));

  if (numero % 2 !=0) {
    array.push(numero);
    console.log(array);
  }
}
