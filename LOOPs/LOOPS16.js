var prompt = require('prompt-sync')();

let nombre = +prompt("Entrez un nombre : ");

for(let i = 1 ; i<= nombre ; i++){
    if(nombre % i == 0){
        console.log(i);
    }
}
