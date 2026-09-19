const user = {
    username : "divya",
    price : 9999,
    welcomeMessage : function(){
        console.log(`${this.username} , welcome to the website`);
        console.log(this);
        
        
    }
}
user.welcomeMessage()
user.username = "sammy"
user.welcomeMessage()

console.log(this);


function another() {
    console.log(this);
    
}
// another()


function anotherfun() {
    let username = "divya"
    console.log(this.username);
}
// anotherfun()



// const chai = function(){
//     let username = "divya"
//     console.log(this.username);
// }




// ARROW FUNCTION

const chai = () => {
    let username = "divya"
    console.log(this.username);
}
// chai()

// const addTwo = (num1, num2) => {             //explicit type(return required)
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2      //implicit type

// const addTwo = (num1, num2) => (num1 + num2)        //implicit type

const addTwo = (num1, num2) => ({username: "divya"})
console.log(addTwo(5,3))


// const myArray = [1, 2, 3, 4]
// myArray.forEach()

