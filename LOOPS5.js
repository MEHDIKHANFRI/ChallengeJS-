var prompt = require('prompt-sync')();

let base = Number(prompt("Entrez un nombre base "));
let exposant = Number(prompt("Entrez un nombre exposant"));
let resultat = 1;
for(let i = 1 ; i<= exposant ; i++){
    resultat *= base ;
}
console.log(" Nombre de base est " + base );
console.log("Nombre de exposant est " + exposant);
console.log("Nombre de resultat est " + resultat);