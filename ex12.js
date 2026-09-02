var prompt = require('prompt-sync')();

let num = Number(prompt("Entrez quatre nombre entier "));
 let a = num % 10;
 let b = Math.floor(num / 10)%10;
 let c = Math.floor(num / 100)%10;
let d = Math.floor(num /1000);
console.log(a,b,c,d);

Math.floor(num / 10)%10;