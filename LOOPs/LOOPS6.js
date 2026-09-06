var prompt = require('prompt-sync')();

let nombre = Number(prompt("Entrez un nombre entier : "));
let somme = 0;
for(let i = 1 ; i <= nombre ; i++){
    if(i%2 == 0){
        console.log( i + " Nombre c'est paire !");
    }
}