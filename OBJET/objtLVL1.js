var prompt = require('prompt-sync')();

const dog = {
  name : "dog",
  legs : "legs",
  color : "Give the color",
  age : "Give the age : ",
  bark : function(){
    return `woof woof`;
  }
}
dog.name = prompt("name :");
dog.legs = prompt("legs : ");
dog.color = prompt("color : ");
dog.age = Number(prompt("age : "));
dog.breed = prompt("breed : ");
dog.getDogInfo = function() {
    return `Name: ${dog.name}
    Legs: ${dog.legs}
    Color: ${dog.color}
    Age: ${dog.age}
    Breed: ${this.breed}`;
};
console.log("-------Dog info : ");
console.log(dog.getDogInfo());
console.log(dog.bark());