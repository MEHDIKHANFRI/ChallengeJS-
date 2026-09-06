var prompt = require('prompt-sync')();

let string = prompt("Entrez une chaîne : ");
let compt = 0;
while(string[compt] !== undefined){
    compt++;
}
console.log("Ton texte est "+ string + "et la longeur de texte est " + compt );