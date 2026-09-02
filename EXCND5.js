var prompt = require('prompt-sync')();
let annee = +prompt("Entrez le nombre d'années :");
let choix = +prompt("----------------Menu--------------------- \n1- Mois \n2- Jours \n3- Heures \n4- Minutes \n5- Secondes ");
let resultat = 0;
if(choix == 1){
    let resultat = annee * 12;
    console.log("Mois est " + resultat);
  
}else if (choix == 2){
   resultat = annee * 365;
    console.log("Jour est " + resultat);
}else if (choix == 3){
    resultat = annee *365 *24;
    console.log("Heures est " + resultat);
}else if (choix == 4){
    resultat = annee  *365 *24*60;
    console.log("Minutes est "+resultat);
}else if(choix == 5){
    resultat = annee  *365 *24*60
console.log("Secondes : " + resultat);
}else{console.log("Erreure");
}