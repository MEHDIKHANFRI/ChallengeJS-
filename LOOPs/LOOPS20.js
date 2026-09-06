var prompt = require('prompt-sync')();

let clavier = "AZERTYUIOazertyuio@@@@";
let nombre = prompt("Entrez le longeur de mot de passe ");
let stock ="";

for(let i = 0 ; i<nombre ; i++){
let rand = Math.floor(Math.random() * clavier.length -1);
stock += clavier[rand];
}
console.log(stock);
