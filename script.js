//------------------------------------------------EXERCISSES----------------------------------------------------//
const people = ["Harry", "Ron", "Hermione", "Draco", "Fred"];

let result;

result = people.splice(result, 1);

console.log(result);
console.log(people);

//push adds
//pop removes last
//slice??
//splice insert inbetween
//people[1] replace Ginny with Ron
//adds Fred and George
// indexOf Finds index
//splice(result, 1) Removes everything after 0

//Creates array from string
const letters = Array.from("abcdefghijkl");

console.log(letters);

const str = "abcdefghijkl";

//Converts all as an Array
const arr1 = str.split();
//split individual letters into array
const arr2 = Array.from(str);
console.log(arr1);
console.log(arr2);
