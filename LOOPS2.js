var prompt = require('prompt-sync')();
let n = +prompt("Entrez un nombre ");
let factorielle = 1;
for(let i = 1 ;i<=n ; i++){
    factorielle = factorielle * i;
}
console.log(n + " = " + factorielle);