var prompt = require('prompt-sync')();
let C = parseFloat(prompt("Entrez la temérature en Celsius : "));

console.log("Ma température en Celsius est : " + C);
let k = C + 273.15;
console.log("K = " + k);
