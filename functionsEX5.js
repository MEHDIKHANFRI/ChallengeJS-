var prompt = require('prompt-sync')();

let nombre= Number(prompt("Entrez premier nombre "));
let somme = 1
function factorielle(a){
    for(let i = 1 ; i <= nombre ; i++){
        somme *= i ;
    }
    return somme;
}
console.log(factorielle(nombre));