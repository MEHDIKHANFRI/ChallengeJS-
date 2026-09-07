var prompt = require('prompt-sync')();

let nombre = Number(prompt("Entrez le nombre d'éléments d'un tableau "));
let tri;
let nombre1 = [];
for(let i = 0 ; i < nombre ; i++ ){
 nombre1[i] = prompt("Puis le élément du tableau " + i + ": " ); 
}
for(let i = 0 ; i < nombre ; i++ ){
 console.log(nombre1[i]);
}
console.log("Aprez tri :");
for(let i=0;i<nombre;i++){
		for(j=i+1;j<5;j++){
			if(nombre1[i]>nombre1[j]){
				tri=nombre1[i];
				nombre1[i]=nombre1[j];
				nombre1[j]=tri;
			}
		}
}
for(let i = 0 ; i < nombre ; i++ ){
 console.log(nombre1[i]);
}