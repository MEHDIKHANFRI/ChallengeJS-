var prompt = require('prompt-sync')();

let nombre = Number(prompt("Entrez un nombre entier : "));
let chiffre = 0;
let inverse = 0;
 while (nombre > 0) { 
    chiffre = nombre % 10;
    inverse = inverse * 10 + chiffre;
    nombre = Math.floor(nombre / 10);  
} 
console.log("Inverse est " + inverse );
