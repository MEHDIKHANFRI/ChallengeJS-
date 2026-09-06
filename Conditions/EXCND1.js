var prompt = require('prompt-sync')();

let nombre = prompt("Entrez un nombre :");

if(nombre%2 == 0){
    console.log("nombre est paire");
}else {
    console.log("nombre impaire");
}