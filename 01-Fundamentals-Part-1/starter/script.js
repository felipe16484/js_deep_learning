/* 
let js = 'amazing'
if(js === 'amazing') alert('JavaScript is FUN!')

// We can use JavaScript console as a calculator
console.log(40+8+23-10);

// Printing texts and numbers
console.log('Felipe');
console.log(23);

// Storing data inside variables
let firstName = "Felipe";

// Printing variables
console.log(firstName);
console.log(firstName);
console.log(firstName);

// Conventions
let felipe_castaneda = "FC";
let $function = 27;
let person = "Felipe"
let PI = 3.1415;

// Best practices naming variables
let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

// Bad practices naming variables
let job1 = "Programmer";
let job2 = "Teacher";

console.log('- - - - - - - - - - - - - - - - - - ');

console.log('9' - '5'); // -> 4
console.log('19' - '13' + '17'); // -> 617
console.log('19' - '13' + 17); // -> 23
console.log('123' < 57); // -> false
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143

console.log('- - - - - - - - - - - - - - - - - - ');

const numNeighbours = Number(
    prompt('How many neighbour countries does your country have?')
);
if (numNeighbours === 1) {
console.log('Only 1 border!');
} else if (numNeighbours > 1) {
console.log('More than 1 border');
} else {
console.log('No borders');
}
console.log('- - - - - - - - - - - - - - - - - - ');

true;
let javaScriptIsFun = true;
console.log(javaScriptIsFun);

// console.log(typeof true);
console.log(typeof javaScriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Felipe");

javaScriptIsFun = "YES!"
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1997;
console.log(year);
console.log(typeof year);

console.log(typeof null);

console.log('- - - - - - - - - - - - - - - - - - ');

let age = 26;
age = 27;
*/

const now = 2024;
const ageFelipe = now - 1997;
const ageSara = now - 2018;
console.log(ageFelipe, ageSara);
console.log(ageFelipe * 2,ageFelipe / 2,2 ** 2);

const firstName = "Felipe";
const lastName = "Castañeda";

console.log(firstName + ' ' + lastName); // Felipe Castañeda


let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
x--;
console.log(x);
console.log(ageFelipe > ageSara);
console.log(ageFelipe >= 18);
