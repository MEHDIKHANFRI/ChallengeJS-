var prompt = require('prompt-sync')();
let nombre = Number(prompt("Entrez le nombre d'éléments d'un tableau "));
let nombre2 = [] ;
let trie ;

for(let i =0 ; i < nombre ; i++ ){
 nombre2[i] = Number(prompt("Puis le élément du tableau " + i + ": " )); 
}

for(let i =0 ; i < nombre ; i++ ){
    for(let j =i+1 ; j < nombre ; j++ ){
    if(nombre2[i] > nombre2[j]){
        trie = nombre2[i];
        nombre2[i] = nombre2[j];
        nombre2[j] = trie;
        }
    }
}
console.log("Aprez trie : ")
for(let i = 0 ; i < nombre ; i++){
    console.log(nombre2[i]);
}