// if

const isLoggedIn = true;
const temperature = 41

if(temperature === 41){
    console.log("temp is 41");
}
else{
    console.log("it is not 41");
}
console.log("temperature shown");

// <, >, <=, >=, ==, ===, !=


const score = 300
if(score > 100){
    const power = "invisible"
    console.log(`${power} :power assigned`);
    
}
    

const balance = 100
// if (balance > 10) console.log("balance"), console.log("balance2");  // not recommended

// if else if and else statements

const userLoggedIn = true
const creditCard = true
const loggedInFromGoogle = true
const LoggedInFromEmail = false

if(userLoggedIn && creditCard){
    console.log("you are eligible");
}
if(loggedInFromGoogle || LoggedInFromEmail){
    console.log("okay") 
}
