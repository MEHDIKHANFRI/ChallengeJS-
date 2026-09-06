// Challenge 3 : Affichage des Nombres Premiers

var prompt = require('prompt-sync')();

let num = Number(prompt("value of num : (n>=2) :"));
let j = 2;
switch (num) {
    case 1:
        console.log("null");
        break;
    case 2:
        console.log("2");
        break;
    default:
        for (j; j <= num; j++) {
            let k = 0;
            for (let i = 2; i < j; i++) {
                if (j % i == 0) {
                    k++;
                }
            }
            if (k == 0) {
                console.log(j);
            }
        }

}