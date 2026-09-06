var prompt = require('prompt-sync')();

let nombre_E = Number(prompt("Entrez le nombre d'éléments d'un tableau "));
let E_tableau = [];

for(let i = 0 ; i < nombre_E ;i++){
     E_tableau[i] = Number(prompt("Entrez les éléments du tableau "));
}
let facteur = Number(prompt("Entrez le facteur de multiplication "));
for(let i = 0 ; i < nombre_E ;i++){
     E_tableau[i] = facteur * E_tableau[i]
     console.log("Multiplication de elements " + i + " = " + E_tableau[i]);
}