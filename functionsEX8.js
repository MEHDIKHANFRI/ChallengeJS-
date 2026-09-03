var prompt = require('prompt-sync')();


function True_False(nombre){
    return nombre % 2 == 0;
}

let nombre= Number(prompt("Entrez premier nombre "));

function afficher(){
    if(True_False(nombre)){
        console.log("Le nombre est pair ");
    }else{
        console.log("Le nombre est impair ");
    }
}

afficher();