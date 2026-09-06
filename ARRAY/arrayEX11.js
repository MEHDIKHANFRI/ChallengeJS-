var prompt = require('prompt-sync')();
let nombre = Number(prompt("Entrez le nombre d'éléments d'un tableau "));
let nombre2 = [] ;

for(let i = 0 ; i < nombre ; i++ ){
 nombre2[i] = prompt("Puis le élément du tableau " + i + ": " ); 
}

let nombre_R = prompt("Entrez la valeur à remplacer :");
let nouvelle = prompt("Entrez la nouvelle valeur : ");

for(i=0 ; i < nombre ; i++){
    if(nombre_R == nombre2[i]){
        console.log("Le nombre principal " + nombre2[i] + " la nouvelle valeur : " + nouvelle);
    }
}


