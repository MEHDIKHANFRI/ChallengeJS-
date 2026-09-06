var prompt=require('prompt-sync')();

const objet1={
    nom : prompt("nom : "),
    prenom : prompt("prenom : "),
    age : Number(prompt("age : "))
}
console.log("Les informations : ");
console.log(`Nom : ${objet1.nom}`);
console.log(`Prénom : ${objet1.prenom}`);
console.log(`Âge : ${objet1.age} ans`);