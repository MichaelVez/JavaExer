//!filter(function(element, index, array) { /* ... */ }, thisArg)
//!filter(callbackFn, thisArg)
//!filter((element, index, array) => { /* ... */ } )
//original
let myarr = [1, 2, 3, 4, 5, 6];
let myarr2 = myarr.filter(function (el, i) {
  return el % 2 === 0;
});
console.log(myarr); //[1, 2, 3, 4, 5, 6]
console.log(myarr2); //[2,4,6]
//
// myarr.filter(callbackFn, myarr2); //same as - myarr2.filter(callbackFN)

Array.prototype.filter2 = function (callback, thisArg = this) {
  let newarr = [];
  if (typeof callback === "function")
    for (let i = 0; i < thisArg.length; i++) {
      if (callback(thisArg[i], i, thisArg)) newarr.push(thisArg[i]);
    }
  return newarr;
};
console.log();

let myarr3 = ["first", "second", "three", "four", "five", "six"];
myarr3 = myarr3.filter2(
  function (el, i, arr) {
    console.log("--");
    console.log(this);
    return i % 2 === 0;
  },
  { a: 1 }
);
console.log("expected :[first,three,five]");
console.log(myarr3);

//find
Array.prototype.find2 = function (callback, thisArg = this) {
  if (typeof callback === "function")
    for (let i = 0; i < thisArg.length; i++) {
      if (callback(thisArg[i], i, thisArg)) return thisArg[i];
    }
  return undefined;
};
console.log([1, 2, 3, 4].find((el) => el === 2));
console.log(["noe", "uno", "tres", "dos"].find2((el) => el === "tres"));
