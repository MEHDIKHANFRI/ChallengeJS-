var prompt = require('prompt-sync')();

let tableau = [1,2,3,4,5,6,7];

let nombre = Number(prompt("Entrez un nombre entiee "));

    //let fin1 = tableau.length ;
    //let dibut2 = 0;

function dichotomique(t, dibut , fin , n){
    while(dibut < fin){
    let milieu = Math.floor((dibut + fin)/2);
    
    if(n == tableau[milieu] ){
        return  milieu ;
    }else if(n < tableau[milieu] ){
        fin = milieu - 1;
        return dichotomique(tableau , dibut , fin , n) ;
    }else{
        dibut = milieu + 1 ;
        return  dichotomique(tableau , dibut , fin , n);
    }}
    return -1;
}
let trouve = dichotomique(tableau , 0 , tableau.length , nombre);

if(trouve == -1){
    console.log(" Le nombre non trouve " );
}else{
    console.log(" Le nombre est trouve " );
}