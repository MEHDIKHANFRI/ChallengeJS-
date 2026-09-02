var prompt = require('prompt-sync')();
let nombre = +prompt("Entrez un nombre ");
let somme = 0;
for(let i= 1 ; i <= 10;i++ ){
   somme = nombre * i;
    console.log(nombre + "x" + i + " = " + somme);
}