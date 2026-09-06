var prompt = require('prompt-sync')();
let km = parseFloat(prompt("Entrez la vitesse en kilomètres par heure (km/h) : "));
let m_s = km * 0.27778;
console.log("m/s = " + km + " * 0.27778");
console.log("m/s :" + m_s);
