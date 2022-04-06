/*
    JavaScript - Declaring Functions
    The following exercise contains the following subjects:
        * functions
    
    Instructions
        * Please reformat the following function expressions to IIFE functions.
        * Please reformat the following function declarations in two ways, explicit return and implicit return functions.
    Submit the file to Hive
*/

// From function declarations to explicit and implicit return functions (one of each).
function welcome1() {
  let welcome = "Welcome to Appleseeds Bootcamp!";
  return welcome;
}
//implicit return
const welcome12 = () => "Welcome to Appleseeds Bootcamp!";
//explicit return
const welcome13 = () => {
  return "Welcome to Appleseeds Bootcamp!";
};

function power(a) {
  let myNumber = a;
  let result = Math.pow(myNumber, 2);
  return result;
}
//implicit return
const powerr = (a) => Math.pow(a, 3);
//explicit return
const powerr2 = (a) => {
  return Math.pow(a, 3);
};

// From function expressions to IIFE functions.
const squareRoot = (a) => Math.sqrt(a);
(function (a) {
  Math.sqrt(a);
})();

let mysqrt = ((a) => Math.sqrt(a))(25);

const randomNumbers = (a, b) => Math.random() * (a - b) + b;

let myRandomNum = ((a, b) => Math.random() * (a - b) + b)(1, 2);
