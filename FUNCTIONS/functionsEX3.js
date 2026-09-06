var prompt = require('prompt-sync')();

let nombre1= Number(prompt("Entrez premier nombre "));
let nombre2= Number(prompt("Entrez deuxieme nombre "));

function maximum(a,b){
    if(nombre1 > nombre2){
        console.log("Nombre le plus grand est la premier :" + nombre1);
    }else if(nombre1 < nombre2) {
        console.log("Nombre le plus grand est la deuxieme : " + nombre2);
    }else{
        console.log("Les deux nombres sont egaux ")
    }
}
console.log(maximum(nombre1,nombre2));