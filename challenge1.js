var prompt = require('prompt-sync')();

let age = Number(prompt("Give your age "));


if(age <= 5){
    console.log("Your price is 10");
}else if(5<age && age<=25){
    let week = prompt("Are you in weeek yes or no");
    if(week == "yes"){
        console.log("Your price is 70");
    }else{
        console.log("Your price is 50");
    }
}else if (25<age && age <=65){
    let week = prompt("Are you in weeek yes or no");
    if(week == "yes"){
        console.log("Your price is 80");
    }else{
        console.log("Your price 60");
    }
}else{
    console.log("Your price 40");
}