var prompt = require('prompt-sync')();

function afficher(nombre){
    for(let i = nombre ; i >= 0 ; i--){
        console.log(i);
    }
}
afficher(2);
console.log("---------");
afficher(3);