var prompt=require('prompt-sync')();

const objet1={
    x : Number(prompt("Entrez premier point :")),
    y : Number(prompt("Entrez deuxieme point :")),
    
}
console.log("Premiere point dans le plan " + objet1.x);
console.log("Deuxieme point dans le plan " + objet1.y);
console.log("La modification des plans :");
objet1.x = Number(prompt("Entrez premier point :"));
objet1.y = Number(prompt("Entrez deuxieme point :"));
console.log("Premiere point dans le modifications " + objet1.x);
console.log("Deuxieme point dans le modifications " + objet1.y);