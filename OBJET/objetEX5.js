var prompt=require('prompt-sync')();

const livre ={
   titre :prompt("Entrez le titre de livre :"),
   auteur :prompt("Entrez le nom de l'auteur :"),
   annee :prompt("Entrez l'annee de livre :"),
   afficher : function (titre,auteur,annee){
        return `Titre de livre ${livre.titre} , Nom de l'auteur ${livre.auteur} , L'annee de livre ${livre.annee}`
    }
    }
console.log(livre.afficher(livre.titre,livre.auteur,livre.annee));