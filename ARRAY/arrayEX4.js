var prompt = require('prompt-sync')();
let nombre = Number(prompt("Entrez le nombre d'éléments d'un tableau "));
let nombre2 = [] ;

for(let i = 0 ; i < nombre ; i++ ){
 nombre2[i] = Number(prompt("Puis le élément du tableau " + i + ": " )); 
 
}

let max = nombre2[0];

for(let i = 0 ; i < nombre2.length ; i++ ){
  
 if(max < nombre2[i+1]){
    max = nombre2[i+1];
 }
}
console.log("Nombre le plus grand est " + max);