function sayMyName() {
    console.log("d");
    console.log("i");
    console.log("v");
    console.log("y");
    console.log("a");   
}

sayMyName();

function addNum (num1, num2){
    console.log(num1 + num2);    
}
addNum(4, 5)

function addNumber (num1, num2){
//    let result = num1 + num2
//    return result 
        return num1 + num2
}
const result = addNumber(4, 5)
console.log("result:", result);


function loginUserMessage (username){
     return `${username} just logged in`
}
console.log(loginUserMessage("divya"));


function loginUserMessages (username){
    if(!username){
        console.log("please enter a username");
        return
    }
     return `${username} just logged in`
}
console.log(loginUserMessages());


function loginUserMes (username="khushi"){
    if(!username){
        console.log("please enter a username");
        return
    }
     return `${username} just logged in`
}
console.log(loginUserMes());


// rest operator (... xyz)

function calculatePrice (...numm1){
    return numm1
}
console.log(calculatePrice(200,400,800));


function calculateCartPrice (val1, val2, ...numm1){
    return numm1
}
console.log(calculateCartPrice(200,400,300,800));

//objects & function

const user = {
        username: "divya",
        price: 2000
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);  
}
// handleObject(user)

handleObject({
    username: "sammy",
    price: 200
})


//arrays and functions

const newArray = [100, 200, 300]

function returnArrayValue(getArray){
    return getArray[1]
}
// console.log(returnArrayValue(newArray));
console.log(returnArrayValue([100,2000,300]));
