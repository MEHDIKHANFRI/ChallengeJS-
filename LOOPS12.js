var prompt = require('prompt-sync')();
let nombre = Number(prompt("Entrez un nombre "));
for(let i=1 ; i<=nombre ; i++){
    for(let j=1;j<i;j++){
        console.log("*");
    }
    for(let j=1;j<=2*i-1;j++){
        console.log(" ");
    }
    console.log("\n");
}