var prompt = require('prompt-sync')();

let texte = prompt("Entrez une texte : ");
let i= texte.length - 1;
let string ="";
for(i ; i >= 0 ; i-- ){
    string += texte[i];
}
console.log(string);