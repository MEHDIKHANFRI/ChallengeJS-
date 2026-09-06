var prompt = require('prompt-sync')();
let nombre = Number(prompt("Entrez le nombre d'éléments d'un tableau "));
let nombre2 = [] ;

for(let i = 0 ; i < nombre ; i++ ){
 nombre2[i] = prompt("Puis le élément du tableau " + i + ": " ); 
}

let nombre_R = prompt("Entrez le nombre pour recherche present ou non : ");
let compt = 0;

for(i=0 ; i < nombre ; i++){
    if(nombre_R == nombre2[i]){
        compt++;
    }
}

if(compt > 0){
    console.log("Trouve");
}else{
    console.log("No Trouve");
}

