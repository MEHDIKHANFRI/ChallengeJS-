var prompt = require('prompt-sync')();
let nombre = Number(prompt("Entrez le nombre d'éléments d'un tableau "));
let nombre2 = [] ;

for(let i = 0 ; i < nombre ; i++ ){
 nombre2[i] = prompt("Puis le élément du tableau " + i + ": " ); 
}

for(i=0 ; i < nombre ; i++){
    if(nombre2[i]%2 == 0){
        console.log("Le nombre " + nombre2[i] + " est paire !"  );
    }
}