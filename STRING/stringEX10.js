var prompt = require('prompt-sync')();

let texte1 = prompt("Entrez une texte principale : ");
let texte2 = prompt("Entrez un mots : ");

function trouve(texte1 , texte2){
    
    let sous;
    for(let i=0 ; i <= texte1.length; i++ ){
    sous = "";
       for (let j = 0; j < texte2.length; j++) {
        sous += texte1[i + j];
    }
    if(sous == texte2){
         //console.log("trouvé");
         return 0;
       }
}
return -1;
}
let soutexte = trouve(texte1,texte2);
if(soutexte == 0){
    console.log("trouvé");
}else{
    console.log("no trouve");
}




    
