var prompt = require('prompt-sync')();

 let longueur = prompt("Entrez la longueur : ");
 let largeur = prompt("Entrez la largeur : ");

 let surface = longueur * largeur;

 console.log("La surface est " + surface);
