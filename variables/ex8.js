var prompt = require('prompt-sync')();
let A = parseFloat(prompt("Entrez 1er nombre : "));
let B = parseFloat(prompt("Entrez 2ème nombbre : "));
let C = parseFloat(prompt("Entrez 3ème nombre : "));

let moyenne = Math.pow(A * B * C)^(1/3);
console.log("La moyenne géométrique est : " + moyenne);

