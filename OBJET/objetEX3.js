var prompt=require('prompt-sync')();

const objet1={
    largeur : Number(prompt("Entrez :")),
    longeur : Number(prompt("Entrez :")),
     rectangle : function (largeur,longeur){
        return longeur*largeur;
    }
}
console.log(objet1.rectangle(objet1.largeur,objet1.longeur));