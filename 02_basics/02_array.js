const marvel_heroes = ["ironman", "thor", "spiderman"]
const dc_heroes = ["superman", "flash",  "batman"]

marvel_heroes.push(dc_heroes)
console.log(marvel_heroes);
console.log(marvel_heroes[3][0])

const all_heroes = marvel_heroes.concat(dc_heroes)
console.log(all_heroes);

const all_the_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_the_heroes);

const another_arr = [1, 2, 3,[1, 2], 3, 4,[1, 2, 3,[1, 2]]]
const new_array = another_arr.flat(Infinity)
console.log(new_array);

console.log(Array.isArray("divya"));
console.log(Array.from("divya"));
console.log(Array.from({name: "divya"}));      //interesting

let score1 = 1000
let score2 = 100
let score3 = 10

console.log(Array.of(score1, score2, score3));
