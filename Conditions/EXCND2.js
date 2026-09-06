var prompt = require('prompt-sync')();
let lettre = prompt("Entrez un lettre :");
switch (lettre){
    case 'a' : console.log("La lettre " + lettre + " est voyelle");break;
    case 'e' : console.log("La lettre " + lettre + " est voyelle");break;
    case 'u' : console.log("La lettre " + lettre + " est voyelle");break;
    case 'o' : console.log("La lettre " + lettre + " est voyelle");break;
    case 'i' : console.log("La lettre " + lettre + " est voyelle");break;
    case 'y' : console.log("La lettre " + lettre + " est voyelle");break;
    default : console.log("La lettre " + lettre + " est une consonne");
}