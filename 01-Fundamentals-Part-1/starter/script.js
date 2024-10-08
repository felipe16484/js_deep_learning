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

const now = 2024;
const ageFelipe = now - 1997;
const ageSara = now - 2018;

console.log(now - 1997 > now - 2018);

let x,y;
x = y = 25-10-5;

const averageAge = (ageFelipe + ageSara) / 2;
console.log(x, y);
console.log(ageFelipe, ageSara, averageAge);

const massMark = 78;
const heightMark = 1.69;
const BMIMark = massMark / (heightMark*heightMark);

const massJohn  = 92;
const heightJohn = 1.95;
const BMIJohn = massJohn  / (heightJohn*heightJohn);

const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn);
console.log(markHigherBMI);

const firstName = "Felipe";
const job = "dev";
const birthYear = 1997;
const year = 2024

const felipe = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!"
console.log(felipe);

const newFelipe = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(newFelipe);

console.log(`Just a regular string...`);
console.log("String with \n\
multiple \n\
lines");
console.log(`String with
multiple
lines`);

const age = 15;

if (age >= 18) {
    console.log("Sara can start driving licence 🚗");
} else {
    const yearsLeft = 18 - age;
    console.log(`Sara is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2001;
let century;

if(birthYear <= 2000){
    century = 20;
} else {
    century = 21;
}

console.log(century);

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if(BMIMark > BMIJohn){
    console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`);
} else {
    console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!`);
}

// Type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Felipe'));
console.log(typeof NaN);

// Type coercion
console.log("I'm " +23+ " years old!"); // I'm 23 years old!
console.log('23'-'10'-3);
console.log('23'*'2');
console.log('23'/'2');

let n = '1' + 1;
n = n - 1;
console.log(n);


console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Felipe'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 2;
if(money){
    console.log("Don't spend it all ;)");
} else {
    console.log('You should get a job');
}

let height = 'Hola';
if(height){
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED');
}

const age = '18';
if(age === 18) console.log('You just became a adult :D! (strict)');
if(age == 18) console.log('You just became a adult :D! (loose)');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if(favourite === 23){
    console.log('Cool! 23 is an amazing number!');
} else if (favourite === 7){
    console.log('7 is also a cool number!');
} else if (favourite === 9){
    console.log('9 is also a cool number!');
} else {
    console.log('Your favourite number is not 23 or 7 or 9');
}

if(favourite !== 23) console.log('Why not 23?');

*/

const hasDriverLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

const shouldDrive = hasDriverLicense && hasGoodVision;

// if(hasDriverLicense && hasGoodVision){
//     console.log('Felipe is able to drive!');
// }else {
//     console.log('Someone else should drive...');
// }

const isTired = false; // C
console.log(hasDriverLicense && hasGoodVision && isTired);

if(hasDriverLicense && hasGoodVision && !isTired){
    console.log('Felipe is able to drive!');
}else {
    console.log('Someone else should drive...');
}