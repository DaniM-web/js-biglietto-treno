//ll programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.
//Il prezzo del biglietto è definito in base ai km (0.21 € al km),
//ma va applicato uno sconto del 20% per i minorenni
//e del 40% per gli over 65.


//domanda sui kilometri
var chilometri = prompt("Quanti chilometri vorresti fare?");
//domanda sull'età
var age = prompt("Quanti anni hai?");
//calcolo kilometri  0.21euro/km
var prezzoFinale = 0.21 * chilometri;
// logica sconti
if ( age < 18){
  prezzoFinale = (prezzoFinale * 100) / 120
} else if ( age > 65){
  prezzoFinale = (prezzoFinale * 100) / 140
}

console.log("chilometri da percorrere: " + chilometri);
console.log("Anni: " + age);
console.log("Prezzo intero: " + prezzoFinale);

//output
if (age <18){
document.getElementById('my_id').innerHTML = "Promo minorenni attivata, il prezzo del tuo biglietto è" + " " + prezzoFinale
} else if (age > 65){
  document.getElementById('my_id').innerHTML = "Promo anzianità attivata, il prezzo del tuo biglietto è" + " " + prezzoFinale
} else {
  document.getElementById('my_id').innerHTML = "Il prezzo del tuo biglietto è" + " " + prezzoFinale
}
