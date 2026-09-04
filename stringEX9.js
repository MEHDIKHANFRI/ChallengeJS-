var prompt = require('prompt-sync')();

let texte = prompt("Entrez une texte : ");
let string ="";
let caractère = " ";

for(let i=0 ; i <= texte.length - 1 ; i++ ){
    if(texte[i] != caractère){
        string += texte[i];
    }
}
console.log(string);
