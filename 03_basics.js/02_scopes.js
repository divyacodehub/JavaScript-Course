// //global and local scope

// // var c = 200
// let a = 2000
// if(true){
//     let a = 10
//     const b = 20
//     // var c = 30
//     console.log("inner:", a);
    
// }
// console.log(a);
// // console.log(b);
// // console.log(c);


function one(){
    const username = "diyva"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);               //this will create an error

    two()   
}
one()





if(true){
    const name = "divya"
    if(name === "divya"){
        const website = " youtube"
        console.log(name + website);
    }
    // console.log(website);              //this will create an error

}
// console.log(username);                //this will create an error




// +++++++++++++++++ interesting ++++++++++++++++++++++


addone(5)                               //this can be accessed
function addone(num){               
    const val = num + 1
    console.log(val);
    
}                           



addtwo(2)                               // this cannot be accessed as function is declared as an expression
const addtwo = function(num){
    return num + 2
}

