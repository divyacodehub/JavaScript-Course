const username = "divya"
if (username) {
    console.log("success"); 
}
else{
    console.log("failure");
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined

// truthy values
// "false", " ", "0", [], {}, function(){}


// if(username.length === 5){
//     console.log("it is not empty");
// }

const emptyObj = {}

if(Object.keys(emptyObj).length === 0) {
    console.log("object is empty"); 
}



// nullish coalescing operator (??): null undefined
let val1;
// val1 = 8 ?? 7
// val1 = null ?? 7
// val1 = 6 ?? undefined
// val1 = null ?? undefined
// val1 = undefined ?? null
val1 = null ?? 3 ?? 5


console.log(val1);


// ternery operator

//condition ? true : false
const icedTeaPrice = 100
icedTeaPrice <= 80 ? console.log("affordable") : console.log("expensive");
