//primitive

// 7 types: string, number, boolean, null, undefined, symbol, BigInt

const score = 30
const scoreval = 30.3

const isLoggedIn = true
const temp = null

let email; //undefined

const id = Symbol('765')
const anotherId = Symbol('765')

console.log(id === anotherId);
console.log(id);
console.log(anotherId);

const bigNum = 7657438764782687633474583733942n
console.log(bigNum);




//reference (non-primitive)

//arrays, objects, function

const name = ["fatima", "nitya", "dev"] //array

let myObj = {
    name : "divya",
    age : 20,
}                                      //object
 


const myFunc = function() {
    console.log("hellloooo");
    
}

console.log(typeof bigNum);



