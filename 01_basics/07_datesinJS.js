Date

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);


let myCreatedDate = new Date(2026, 0, 24)
console.log(myCreatedDate.toLocaleString());

// let myCreateDate = new Date(2026, 0, 24,5, 94, 97)
let myCreateDate = new Date("01-25-2026")
console.log(myCreateDate.toLocaleString());


let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreateDate.getTime());     //time in milliseconds

console.log(Math.floor(Date.now() / 1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

console.log(`${newDate.getDay()} is the day`)

console.log(newDate.toLocaleString('default', {
    weekday: "long"
}))


// Modern Update: Temporal API
// Temporal is a newer JavaScript API for working with dates and times.
//
// Temporal.PlainDate      -> date only
// Temporal.PlainTime      -> time only
// Temporal.PlainDateTime  -> date + time
// Temporal.ZonedDateTime  -> date + time + timezone
// Temporal.Instant        -> exact moment in time
// Temporal.Duration       -> amount of time
//
// Learn Temporal separately later.
