var prompt = require('prompt-sync')();
let nom = prompt("Quel est votre nom ? ");
let prenom = prompt("Quel est votre prénom ? ");
let age = prompt("Quel est votre âge ? ");
let sexe = prompt("Quel est votre sexe (M/F) ? ");
let email = prompt("Quelle est votre adresse e-mail ?");

console.log("Nom: " + nom);
console.log("Prenom: " + prenom);
console.log("Age:" + age);
console.log("Sexe: " + sexe);
console.log("E-mail: " + email);