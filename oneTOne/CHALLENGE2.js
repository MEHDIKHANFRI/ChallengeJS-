var prompt=require('prompt-sync')();
let taille = 5;

function sommeSousDiagonale(taille) {
    let somme=0;
    let produit = 1;
    
  for(i=1 ; i < taille ; i++){
    let car = "";
    for(j=1 ; j < taille ; j++){
        if(i> j){
            produit =i*j;
            car += produit;
            somme += produit;
        }else{
            car+=".";
        }
    }
    console.log(car);
  }
  return somme;
}

let varr = sommeSousDiagonale(taille);
console.log(varr);
