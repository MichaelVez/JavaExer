/*
    JavaScript - Declaring Functions
    The following exercise contains the following subjects:
        * functions
    
    Instructions
        * Please reformat the following function declarations to function expression.
        * Please reformat the following function expressions to function declarations.
    Submit the file to Hive
*/

// From function declarations to function expressions
//This is function declarations
function welcome() {
  let welcome = "Welcome to Appleseeds Bootcamp!";
  return welcome;
}
// function expressions
const welcome2 = function () {
  return "Welcome to Appleseeds Bootcamp!";
};
//arrow function - compact alternative to function expressions
const welcome3 = () => "Welcome to Appleseeds Bootcamp!";

function power(a) {
  let myNumber = a;
  let result = Math.pow(myNumber, 2);
  return result;
}
const power2 = (num) => num * num; //or
const power3 = (num) => Math.pow(num, 2);

function add(a, b = 5) {
  let myNumber = a;
  let sum = myNumber + b;
  return sum;
}
const add2 = (a) => a + 5;

// From function expressions to function declarations
const hello = () => "Hello!";

function helloo() {
  return "Hello";
}

const squareRoot = (a) => Math.sqrt(a);

function squareRoott(a) {
  return Math.sqrt(a);
}

const randomNumbers = (a, b) => Math.random() * (a - b) + b;

function randomNumbers2(a, b) {
  let result = Math.random() * (a - b);
  return result + b;
}
