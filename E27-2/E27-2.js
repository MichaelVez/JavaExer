/* Write two functions that use Promises that you can chain.
The first function, makeAllCaps(), will take in an array of words and capitalize
them, and then the second function, sortWords(), will sort the words in
alphabetical order. If the array contains anything but strings, it should throw
an error.
Call the functions once with an array of words and call it once with an array
that includes at least one item that is not a word. Print the resolve and reject
in a .then, .catch.*/
function makeAllCaps(arr) {
  return new Promise(function (resolve, reject) {
    arr.forEach(function (e) {
      if (typeof e !== "string") reject();
      for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toUpperCase();
      }
      console.log(arr);
    });
    resolve(arr);
  });
}

function sortWords(arr) {
  return new Promise(function (resolve, reject) {
    arr.forEach(function (e) {
      if (typeof e !== "string") reject();
    });
    resolve();
  })
    .then(() => {
      arr.sort();
      console.log(arr);
      return arr;
    })
    .catch(() => {
      console.log("something that is not string");
    });
}
//test
let myArray = ["a", "b", "c"];
console.log(myArray);
makeAllCaps(myArray)
  .then((data) => {
    console.log(data);
  })
  .catch(() => {
    console.log("something that is not string");
  });

let myArray2 = ["zen", "apple", "camel", "bee"];
console.log(myArray2);
sortWords(myArray2);
