var prompt = require('prompt-sync')();

 let x1 = prompt("Entrez un nombre X1: ");
 let x2 = prompt("Entrez un nombre X2: ");
 let y1 = prompt("Entrez un nombre Y1 : ");
 let y2 = prompt("Entrez un nombre Y2 : ");
 let z1 = prompt("Entrez un nombre Z1 : ");
 let z2 = prompt("Entrez un nombre Z2 : ");

 let X = Math.pow(x2 - x1 , 2);
 let Y = Math.pow(y2 - y1 , 2);
 let Z = Math.pow(z2 - z1 , 2);

 let distance =  Math.sqrt(X+Y+Z);

 console.log("La distance entre deux est " + distance);
