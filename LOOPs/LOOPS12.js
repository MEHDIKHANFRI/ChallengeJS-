var prompt = require('prompt-sync')();


let nombre = Number(prompt("Entrez un nombre "));
let l= "" ;

for(let i=1 ; i<=nombre ; i++){
    l="";
    for(let j=1 ; j<= nombre - i ;j++){
        l += " ";
    }
    for(let j=1;j<=i*2-1;j++){
        l += "*";
    }
    console.log(l);
}