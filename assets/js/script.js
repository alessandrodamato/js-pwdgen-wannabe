const firstname = prompt('Inserisci il tuo nome');

const lastname = prompt('Inserisci il tuo cognome');

const favColor = prompt('Inserisci il tuo colore preferito');

// dati separati
console.log(firstname, lastname, favColor);

const passGenerator = firstname + lastname + favColor + 24;

// password generata
console.log('Password: ', passGenerator);

