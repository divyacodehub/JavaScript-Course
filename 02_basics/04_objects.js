// const TinderUser = new Object()

const TinderUser = {}

TinderUser.id = "123tu"
TinderUser.name = "Tom"
TinderUser.location = "London"

// console.log(TinderUser);

const someuser = {
    email: "some@google.com",
    fullname: {
        userfullname: {
            firstname: "divya",
            lastname: "mehta"
        }
    }
}

// console.log(someuser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
console.log(obj3);

const user = [
    {
        id: 1,
        name: "khushi"
    },
    {
        id: 2,
        name: "kush"
    }
]
console.log(user[1].name);
console.log(TinderUser);

console.log(Object.keys(TinderUser));
console.log(Object.values(TinderUser));
console.log(Object.entries(TinderUser));

console.log(Object.hasOwnProperty('islogged'));


// object de-structure
const course = {
    courseName: "javaScrpit",
    price: 99,
    courseInstructor: "hitesh"
}

//course.price

const {courseInstructor: inst} = course
console.log(inst);


//JSON

// {
//     "name": "divya",
//     "course" : "JS",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]