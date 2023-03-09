/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, 
per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.*/


//prompt
let ageUser = prompt('inserisci la tua età');

let distanceUser = prompt('inserisci i chilometri che vuoi percorrere');

//calc ticket price
const distancePriceKm = 0.21;

const priceTotal = (0.21 * distanceUser).toFixed(2);

let seniorTiket = (priceTotal * 60 / 100).toFixed(2);

let juniorTiket = (priceTotal * 80 / 100).toFixed(2);




if (isNaN(ageUser) && isNaN(distanceUser)){
     document.getElementById('result').innerText = `
     inserire un valore valido
     `;
}
else{
     document.getElementById('result').innerText = `
     ${priceTotal}euro
          `;

if (ageUser > 65)
     document.getElementById('result').innerText = `
     ${seniorTiket}euro
     `;
if (ageUser < 18)
     document.getElementById('result').innerText = `
     ${ juniorTiket } euro
     `;
}

//scusate se non ho lavorato il pomeriggio ma sono stato poco bene e mi sono svegliato 10 minuti fa 
