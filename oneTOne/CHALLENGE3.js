var prompt = require('prompt-sync')();
let tableau = [4,6,7,3,5];
let nombre = 10;
let number ;
somme = 0;
for(let i = 0 ; i < tableau.length ; i++){
number = tableau[i];
for(let j = i+1 ; j < tableau.length ; j++){
    somme = number + tableau[j];
    if(somme === nombre){
        console.log(number + " " + tableau[j]);
    }
    }
}

