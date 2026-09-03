var prompt = require('prompt-sync')();

let nombre1= Number(prompt("Entrez premier nombre "));
let nombre2= Number(prompt("Entrez deuxieme nombre "));

function multiplier(a,b){
    return nombre1 * nombre2;
}
console.log(multiplier(nombre1,nombre2));