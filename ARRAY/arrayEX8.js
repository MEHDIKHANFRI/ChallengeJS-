var prompt = require('prompt-sync')();
let nombre = Number(prompt("Entrez le nombre d'éléments d'un tableau "));
let nombre2 = [] ;
let copie = [];
let s_copie = "";
let s_texte = "";
for(let i = 0 ; i < nombre ; i++ ){
 nombre2[i] = prompt("Puis le élément du tableau " + i + ": " ); 
    copie[i]= nombre2[i];
    s_texte +=nombre2[i];
}
let i =0;
let j = 0;
while(copie[j] == nombre2[i] && i < nombre ){
    s_copie += copie[j];
    i++;
    j++;
}
console.log("Le texte est " + s_texte);
console.log("Le copie est " + s_copie);