var prompt = require('prompt-sync')();

let stock=[];
let choix ;
 do {
    function menu (){
console.log("----------------MENU----------------");
console.log("1. Ajouter un livre");
console.log("2. Afficher tous les livres");
console.log("3. Rechercher un livre par son titre");
console.log("4. Mettre à jour la quantité d'un livre");
console.log("5. Supprimer un livre du stock.");
console.log("6. Afficher le nombre total de livres en stock");
console.log("7. Quitter");}
menu();
choix = Number(prompt("Votre choix : "));
            
            switch(choix){
                case 1:
                    stock[stock.length] = ajouter();
                    break;
                case 2:
                    afficher();
                    break;
                case 3:
                    affLivre();
                    break;
                case 4:
                    modifier();
                    break;
                case 5:
                    Supprimer();
                    break;
                case 6:
                    somme();
                    break;
                case 7:
                    console.log("Au revoir !");
                    break;
                default:
        console.log("Choix invalide !");
            }
            
        }while(choix != 7);


    function ajouter(){
        console.log("-------AJOUTER LIVRE --------");
           const livre = {
                titre : prompt("Entrez Titre du livre : "),
                auteur : prompt("Entrez Auteur du livre : "),
                prix : parseFloat(prompt("Entrez Prix du livre : ")),
                quantite : Number(prompt("Entrez Quantité en stock : "))
            }
            console.log("Livre et ajouter !");
            return livre;

    }
    
    function afficher(){
        console.log("-------AFFICHE LES LIVRES --------");
        if(stock.length!==0){
        for(let i = 0 ; i <stock.length ; i++){
            console.log("Titre : " + stock[i].titre);
            console.log("Auteur : " + stock[i].auteur );
            console.log("Prix : " + stock[i].prix);
            console.log("Quantité : " + stock[i].quantite)
           }
    }else{
        console.log("Aucun livre pour afficher . ");
    }
}
    function affLivre(){
        console.log("-------AFFICHE LIVRE --------");
        var titre1 = prompt("Entrez le titre de livre tu peux suprimer dans stock : ");
        if(stock.length!==0){
        for(let i = 0 ; i <stock.length ; i++){
            if(stock[i].titre === titre1){
            console.log("Titre : " + stock[i].titre);
            console.log("Auteur : " + stock[i].auteur );
            console.log("Prix : " + stock[i].prix);
            console.log("Quantité : " + stock[i].quantite)
        }else{
            console.log("livre no trouve pour afficher . ");
            }

           }
    }else{
        console.log("Aucun livre pour afficher . ");
    }
    }

    function modifier(){
        console.log("-------MODIFIER LA QUANTITE DE LIVRE --------");
        var titre1 = prompt("Entrez le titre de livre tu peux modifier la quantité : ");
        if(stock.length!==0){
        for(let i = 0 ; i <stock.length ; i++){
            if(stock[i].titre === titre1){
                stock[i].quantite = Number(prompt("Entrez la nouvelle quantité : "));
            }else{
                console.log("Livre no trouve !");
            }
        }
    }else{
        console.log("Aucun livre pour modifier . ");
    }
}
    function Supprimer(){
        console.log("-------SUPRIMER LE LIVRES --------");
        var titre1 = prompt("Entrez le titre de livre tu peux suprimer dans stock : ");
        let index = -1;
        if(stock.length!==0){
        for(let i = 0 ; i <stock.length ; i++){
            if(stock[i].titre === titre1){
                index = i;
            }
        }
        if(index !== -1){
            for(let i = index;i < stock.length;i++)
                stock[i] = stock[i + 1];
            stock.length -= 1;
            console.log("Livre supprimé avec succès !");
            console.log();
        }
        }
    else{
        console.log("Aucun livre pour supprimer  . ");
    }
}
    function somme(){
        console.log("--- Total des livres en stock ---");
        let summ = 0;
        if(stock.length!==0){
        for(let i = 0 ; i <stock.length ; i++){
                summ += stock[i].quantite ;
        }
        console.log("Somme des livres est " + summ);
    }else{
        console.log("Aucun livre pour somme . ");
    }
    }