var prompt = require('prompt-sync')();
let C = parseFloat(prompt("Entrez la température en Celsius : "));
if(C < 0){
    console.log("Solide");
}else if (0 <= C && C < 100){
    console.log("Liquide");
}else {
    console.log("Gaz");
}
