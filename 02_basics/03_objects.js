// // singleton
// // Object.create

// //object literals

const mysym = Symbol("mykey1")
const JsUser = {
    name: "divya",
    "full name": "divya mehta",
    age: 20,
    [mysym]: "mykey",
    location: "jaipur",
    email: "divya@google.com",
    isLoggedIn: false,
    workingDays: ["monday", "friday"]
}

console.log(JsUser.email);   //not frequently used
// console.log(JsUser.full name);   //error 
console.log(JsUser["email"]);
console.log(JsUser[mysym]);
console.log(JsUser["full name"]);

JsUser.email = "divyamehta@google.com"
// Object.freeze(JsUser)
JsUsermemail = "divyaaa@google.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello");
}

JsUser.greetingTwo = function(){
    console.log(`hello, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

