var prompt = require('prompt-sync')();

let nombre= Number(prompt("Entrez premier nombre "));

function fibonacci(a){
let f0 = 0;
let f1 = 1;
let fn ;
for(let i = 0;i<nombre;i++){
    fn = f0 + f1 ;
    f1=f0;
    f0=fn;
    console.log(f0);
}
}
fibonacci(nombre);