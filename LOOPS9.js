var prompt = require('prompt-sync')();

let nombre = Number(prompt("Entrez un nombre entier : "));
let compt = 0 ;
while( nombre > 0){
   nombre = Math.floor(nombre / 10);
   compt++;
}
console.log("Nombre des chiffres " + compt);