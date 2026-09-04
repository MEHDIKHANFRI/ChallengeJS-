var prompt = require('prompt-sync')();

let texte1 = prompt("Entrez la premier texte : ");
let texte2 = prompt("Entrez la deuxieme texte : ");

if(texte1 == texte2){
console.log("Les deux texte est même");
}else{
    console.log("Les deux texte est différentes")
}

