var prompt=require('prompt-sync')();

const objet1={
    nom : prompt("nom : "),
    prenom : prompt("prenom : "),
    notes : [16,18,19]
}
console.log("Les informations : ");
console.log(`Étudiant : ${objet1.prenom} ${objet1.nom}`);
console.log("Liste des notes : " + objet1.notes.join(", "));