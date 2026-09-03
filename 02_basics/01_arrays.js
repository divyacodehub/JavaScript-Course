// arrays

const arr1 = [0, 1, 2, 3, 4]
const arr2 = ["divya", "mehta"]

const arr3 = new Array(9, 8, 7, 6)
console.log(arr1[2]);
console.log(arr2[1]);
console.log(arr3[3]);

// array methods

arr1.push(5)
arr1.push(6)
arr1.pop()

arr1.unshift(7)
arr1.shift()


console.log(arr1.includes(8))
console.log(arr1.indexOf(4))

const newArr = arr1.join()

console.log(newArr);
console.log(arr1);


// slice , splice

console.log("A", arr1);

const myarr = arr1.slice(1, 3)
console.log(myarr);

console.log("B", arr1);
const myarr1 = arr1.splice(1, 3)

console.log("C", arr1);
console.log(myarr1);




