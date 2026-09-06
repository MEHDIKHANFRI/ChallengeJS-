var prompt = require('prompt-sync')();
let nombre = Number(prompt("Entrez le nombre d'éléments d'un tableau "));
let nombre2 = [] ;
let copie = [];
for(let i = 0 ; i < nombre ; i++ ){
 nombre2[i] = prompt("Puis le élément du tableau " + i + ": " ); 
    copie[i]= nombre2[i];
}
let i = copie.length -1;
console.log("Inverse de tableaux : ");
for(i ; i >= 0 ; i-- ){
 console.log(copie[i]);
}
