var prompt = require('prompt-sync')();

let nombres = [8, 3, 5, 1, 9, 2];
let tri;
let j;
console.log("Avant le tri : " + nombres.join(", "));

// On commence au 2ème élément (index 1)
for(let i=1 ; i < nombres.length ; i++){
    let tri = nombres [i];
    let j = i-1;
    while(j>=0 && nombres[j]> tri){
        nombres[j+1] = nombres [j];
        j--;
    }
nombres[j+1] = tri;
}

console.log("Après le tri : " + nombres.join(", "));