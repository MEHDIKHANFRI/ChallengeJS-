var prompt = require('prompt-sync')();

let texte1 = prompt("Entrez une texte : ");
let texte2 = prompt("Entrez un caractère : ");
let compt=0 ;
let t = "";
for(let i =0  ; i <= texte1.length-1 ; i++ ){
    t=texte1[i];
    if(texte2 == t){
        compt++;
    }
}
console.log("le caractère apparaît dans la texte est " + compt);



