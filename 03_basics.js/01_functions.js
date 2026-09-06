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