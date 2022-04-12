// !1
function isString(string, callB) {
  if (typeof string === "string") {
    callB(string);
  }
}
function mycallback(string) {
  console.log(string);
}
isString("Just breathe", mycallback);
isString(2, mycallback); //nothing happens
// !2
function firstWordUpperCase(string, callBFunc) {
  let firstwordin = string.indexOf(" ");
  let firstwordUp = string.slice(0, firstwordin).toUpperCase();
  firstwordUp = firstwordUp.concat(string.slice(firstwordin));
  return callBFunc(firstwordUp);
}

function repDash(string) {
  while (string.indexOf(" ") !== -1) {
    string = string.replace(" ", "-");
  }
  return string;
}
// !3
function idontlikeRandO(string) {
  while (string.toLowerCase().indexOf("r") !== -1) {
    string = string.replace("r", "l");
    string = string.replace("R", "L");
    string = string.replace("o", "u");
    string = string.replace("O", "U");
  }
  return string;
}
let res = firstWordUpperCase("Michael is a pro athlete", repDash);
let res2 = firstWordUpperCase("Michael is a PRO athlete", idontlikeRandO);
console.log(res);
console.log(res2);

// !4

function myFunk(value, callback) {
  callback(value);
  return value;
}
function alldouble(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] *= 2;
  }
  return arr;
}

console.log(myFunk([1, 2, 3, 4], alldouble));
