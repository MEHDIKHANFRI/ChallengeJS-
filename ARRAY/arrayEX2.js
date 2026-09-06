var prompt = require('prompt-sync')();

let nombre = Number(prompt("Entrez le nombre d'éléments d'un tableau "));
let tableau = [];

for(let i = 0 ; i < nombre ;i++){
     let value = prompt("Entrez les values");
     tableau[i] = value;
}

console.log(tableau);