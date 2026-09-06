var prompt = require('prompt-sync')();
let nombre = Number(prompt("Entrez un nombre "));
let somme = 0;
for(let i = 1 ; i <= nombre ; i++){
    somme += i ;
}
console.log("Somme " + somme);