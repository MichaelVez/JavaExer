// Answer the following questions:
// Question 1:
// In your own words what will this point to and why?(Note
// this is the global scope)
// console.log(this);
//logs the window object in the browser because of the global scope
// Question 2:
// a. In your own words what will this point to and why.
// b. How can you fix this code.
// const myObj = {
//   name: "Timmy",
//   greet: () => {
//     console.log(`Hello ${this.name}`);
//   },
// };
// myObj.greet();
//arrow function refering to the global scope
//   greet: function () {
//     console.log(`Hello ${this.name}`);
//   },
// };

// Question 3:
// In your own words what will this point to and why?
// const myFuncDec = function () {
//   console.log(this);
// };
//global scope window

// Question 4:
// In your own words what will this point to and why?
// const myFuncArrow = () => {
//   console.log(this);
// };
// myFuncArrow();
//window object

// Question 5:
// a. In your own words what will this point to and why.
// b. How can you fix this code.
// document.querySelector(".element").addEventListener(() => {
//   console.log(this);
// });
//this is refering to perant object which is the element
//logging the element on page
