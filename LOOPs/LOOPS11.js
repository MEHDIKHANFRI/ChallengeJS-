var prompt = require('prompt-sync')();

let nombre = Number(prompt("Entrez un nombre entier : "));

for(let i=1 ; i<=10 ; i++){
    console.log(nombre + " x " + i + " = " + nombre*i);
}