const num = 100
console.log(num);

const balance = new Number(200)
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(3));


const otherNum = 213.8456
console.log(otherNum.toPrecision(3));

const anothernum = 100000000
console.log(anothernum.toLocaleString());
console.log(anothernum.toLocaleString('en-IN'));


// ***********maths*********************

console.log(Math);
console.log(Math.abs(-8));
console.log(Math.round(7.9));
console.log(Math.floor(7.9));
console.log(Math.ceil(7.9));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 5
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);


