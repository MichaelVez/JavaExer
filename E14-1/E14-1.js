function reduceMax(arr) {
  return arr.reduce(function (tot, el) {
    return (total = Math.max(tot, el));
  });
}
const maxNum = reduceMax([1, 22, 3, 4]);
// console.log(maxNum);
function sumOfEvenReduce(arr) {
  return arr.reduce(function (tot, el) {
    if (el % 2 === 0) return tot + el;
    return 0;
  }, 0);
}
const asd2 = sumOfEvenReduce([1, 2, 3, 2, 4, 5, 4]);

function averageReduce(arr) {
  return arr.reduce(function (tot, el, index) {
    tot = tot + el;
    if (index === arr.length - 1) tot = tot / (index + 1);
    return tot;
  }, 0);
}
function countOnlyVowels(arr) {
  return arr.split("").reduce(function (acc, el) {
    let vowel = "aouie";
    if (vowel.includes(el)) acc[el] ? acc[el]++ : (acc[el] = 1);
    return acc;
  }, {});
}
function addKeyAndValue(arrofObj, key, value) {
  return arrofObj.reduce(function (acc, el) {
    el[key] = value;
    return acc;
  }, []);
}
let myarrofobj = [
  { name: "mike", age: 23 },
  { name: "dani", age: 21 },
  { name: "prone", age: 25 },
  { name: "mikke", age: 26 },
];
addKeyAndValue(myarrofobj, "alive", "yes");
// console.log(myarrofobj);
