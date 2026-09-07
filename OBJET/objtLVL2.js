const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}
let max = 0;
let us = "";
let compt_loggedIn = 0;
let compt_points = 0;
let compt_skills ;
for(let user in  users){
    compt_skills =0;
    users[user].lenghtSkills = users[user].skills.length;
    if(users[user].lenghtSkills > max ){
        max = users[user].lenghtSkills
        us = user;
    }
    if(users[user].isLoggedIn == true){
    compt_loggedIn ++;
    }else if(users[user].points >= 50){
        compt_points++;
    }else if(users[user].lenghtSkills > 0){
        for(let i=0 ; i < users[user].skills.length ; i++){
                if(users[user].skills[i] == "MongoDB"){
                    compt_skills++;
                }else if(users[user].skills[i] == "Express"){
                    compt_skills++;
                }else if(users[user].skills[i] == "React"){
                    compt_skills++;
                }else if(users[user].skills[i] == "Node"){
                    compt_skills++;
                }
            if(compt_skills == 4){
                console.log(user + " is a MERN stack dev.");
            }
        

    }  
}
}
console.log("The most skills is " + us + " The number of skills is " + max);
console.log("we have " + compt_loggedIn + " users logged in currently !");
console.log("we have " + compt_points + " users with 50 or greater points !")
users.Mehdi = {
    email: 'mehdkhanfri53@gmail.com',
    skills: ['c', 'java', 'JavaScript','python'],
    age: 24,
    isLoggedIn: false,
    points: 49,
};
for(let user in users){
console.log("Nom :", user);
console.log("Email :", users[user].email);
nsole.log("Skills :", users[user].skills);
nsole.log("Age :", users[user].age);
nsole.log("Logged In :", users[user].isLoggedIn);
console.log("Points :", users[user].points);
}