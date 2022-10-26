const nomeUtente = prompt ("Ciao! ci puoi dire come ti chiami?");
const cognomeUtente = prompt ("Fantastico! e qual è il tuo cognome?");
const colorePreferitoUtente = prompt ("Che colore ti piace?");

const h1NomeUtente = document.getElementById ("nome_utente");

h1NomeUtente.innerHTML = nomeUtente + cognomeUtente + colorePreferitoUtente + 21;

//Chiedi all’utente il suo nome,
//poi chiedi il suo cognome,
//poi chiedi il suo colore preferito
//Infine scrivi sulla pagina nomecognomecolorepreferito21