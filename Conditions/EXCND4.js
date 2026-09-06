prompt = require('prompt-sync')();
let a = +prompt("Entrez le nombre a : ");
let b = +prompt ("Entrez le nombre b : ");
let c = +prompt ("Entrez le nombre C : ");
let D = 0;
let x1 = 0;
let x2= 0;
let x0 = 0;
if(a != 0){
    console.log("D = " + a +"x²" + b + "x +" + c);
 D = Math.pow(b,2)- (4*a*c);
 console.log("D = " + D);
 if(D > 0){
    x1= -b - Math.sqrt(D);
    x1=x1/2*a;
    x2= -b + Math.sqrt(D);
    x2= x2/2*a;
 }else if (D == 0){
   x0 = math.sqrt(-b, 2*a);
 }
 else{
    console.log("Un erreur");
 }

}else {
    console.log ("cette l'equation de premier degré Entrez la premier nombre superieure a 0 pour deuxieme degre");
}