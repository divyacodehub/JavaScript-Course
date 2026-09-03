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


// Modern JavaScript: Temporal API

// 1. PlainDate - Date only
const date = Temporal.PlainDate.from("2026-09-03");
console.log(date);


// 2. PlainTime - Time only
const time = Temporal.PlainTime.from("10:30:00");
console.log(time);


// 3. PlainDateTime - Date + Time
const dateTime = Temporal.PlainDateTime.from("2026-09-03T10:30:00");
console.log(dateTime);


// 4. ZonedDateTime - Date + Time + Timezone
const zonedDateTime = Temporal.ZonedDateTime.from(
    "2026-09-03T10:30:00+05:30[Asia/Kolkata]"
);
console.log(zonedDateTime);


// 5. Instant - Exact moment in time
const instant = Temporal.Instant.from("2026-09-03T05:00:00Z");
console.log(instant);


// 6. Duration - Amount of time
const duration = Temporal.Duration.from({
    hours: 2,
    minutes: 30
});
console.log(duration);


// 7. Temporal is immutable
const today = Temporal.PlainDate.from("2026-09-03");

const nextWeek = today.add({
    days: 7
});

console.log(today);     // 2026-09-03
console.log(nextWeek);  // 2026-09-10


