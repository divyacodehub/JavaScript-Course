let score = false

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN (Not a Number)
//true => 1, false => 0

let isLoggedIn = undefined

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
console.log(typeof booleanIsLoggedIn);

// 1 => true, 0 => false
// "" = false
// "divya" => true
// undefined => false
// null => false

let someNumber = 90

let stringnumber = String(someNumber)
console.log(stringnumber);
console.log(typeof stringnumber);

// ******************* operations **********************

let val = 3
let negval = -val
console.log(negval);

//console.log(2+2);
//console.log(2*3);

let str1 = "hello"
let str2 = " welocome"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 6 + 2);
console.log(1 + 6 + "2");

let gamecounter = 10
++gamecounter;
console.log(gamecounter);
gamecounter++;
console.log(gamecounter);


















