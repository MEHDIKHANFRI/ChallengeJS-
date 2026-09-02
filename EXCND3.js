var prompt = require('prompt-sync')();
let nombre_1 = +prompt("Entrez la premier nombre : ");
let nombre_2 = +prompt ("Entrez la deuxieme nombre : ");
let somme = nombre_1 + nombre_2 ;
if(nombre_1 == nombre_2){
    somme = somme * 3;
    console.log("Somme des deux nombre identique est " + somme);
}else{
console.log("La somme est " + somme);}