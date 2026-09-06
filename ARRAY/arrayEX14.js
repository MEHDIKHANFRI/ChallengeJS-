var prompt = require('prompt-sync')();
let nombre = Number(prompt("Entrez le nombre d'éléments d'un tableau "));
let nombre2 = [] ;
let somme = 0;
for(let i = 0 ; i < nombre ; i++ ){
 nombre2[i] = prompt("Puis le élément du tableau " + i + ": " ); 
    somme += nombre2[i];
}
let moyenne = nombre2.length;

console.log("Moyenne " + (somme/moyenne));
