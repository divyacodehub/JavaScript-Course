const name = "divya"
const age = 20
//console.log(name + age + "value")

console.log(`hello my name is ${name} and my age is ${age}`);

const gameName = new String ('divya-dm-m')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));
console.log(gameName.toUpperCase());

const newName = gameName.substring(2, 5)
console.log(newName);

const anotherName = gameName.slice(-8, 1)
console.log(anotherName);

const newstrOne = "     divya    "
console.log(newstrOne);
console.log(newstrOne.trim());

const url = "https://divya.com/divya%67mehta"
console.log(url.replace('%67', '-'));
console.log(url.includes('mehta'));
console.log(gameName.split('-'));






