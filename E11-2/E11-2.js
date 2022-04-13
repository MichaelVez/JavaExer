function doubleValues(arr) {
  return arr.map(function (el) {
    return el * 2;
  });
}
// console.log(doubleValues([1, 2, 3, 4]));
//!2
function onlyEvenValues(arr) {
  const newarr = [];
  arr.forEach((element) => {
    element % 2 === 0 ? newarr.push(element) : null;
  });
  return newarr;
}
// console.log(onlyEvenValues([1, 2, 3, 4, 5]));
//!3
function showFirstAndLast(arr) {
  const newarr = [];
  arr.forEach(function (el) {
    if (typeof el === "string") return newarr.push(el);
  });
  if (newarr.length === 0 || newarr.length === 1 || newarr.length === 2)
    return newarr;
  if (newarr.length > 2) return [newarr[0], newarr[newarr.length - 1]];
}
// console.log(
//   showFirstAndLast(["fisasdrt", 2, 3, 4, 5, "klast", 5, 6, "last", 7])
// );
// !4
function vowelCount(string) {
  let obj = {};
  string
    .toLowerCase()
    .split("")
    .forEach(function (let) {
      if (
        let === "e" ||
        let === "a" ||
        let === "i" ||
        let === "o" ||
        let === "u"
      )
        obj[let] === undefined ? (obj[let] = 1) : obj[let]++;
    });
  return obj;
}
// console.log(vowelCount("MichaelEEIIOOUU"));
// !5
function capitalize(string) {
  return string
    .split("")
    .map((el) => el.toUpperCase())
    .join("");
}
// console.log(capitalize("abcd"));
//!6
function shiftLetters(string) {
  const myarr = string.split("");
  myarr.map((el, i) => {
    let charizard = el.codePointAt();
    charizard--;
    myarr[i] = String.fromCharCode(charizard);
  });
  return myarr.join("");
}
// console.log(shiftLetters("abbcc"));
//!7
function swapCase(string) {
  const myarr = string.split(" ").map(function (el, i) {
    if (i % 2 == 0) return capitalize(el);
    else return el;
  });
  console.log(myarr);
  return myarr.join(" ");
}
// console.log(swapCase("yestarday i bought some headphone at the mall"));
