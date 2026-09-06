var prompt = require('prompt-sync')();
let nombre1 = Number(prompt("Entrez le nombre d'éléments d'un tableau "));
let nombre11 = [] ;

for(let i = 0 ; i < nombre1 ; i++ ){
 nombre11[i] = prompt("Puis le élément du tableau " + i + ": " ); 
}
let nombre2 = Number(prompt("Entrez le nombre d'éléments d'un tableau "));
let compt = nombre2 + nombre1;
let nombre22 = [] ;

for(let i =nombre2 ; i < compt ; i++ ){
 nombre22[i] = prompt("Puis le élément du tableau " + i + ": " ); 
}
let deux_tableaux = [];
for(let i =0; i < compt ; i++){
    if(i < nombre1){
    deux_tableaux[i]=nombre11[i];
}else{
    deux_tableaux[i]=nombre22[i];}
}
for(let i =0; i < compt ; i++){
    console.log(deux_tableaux[i]);
}