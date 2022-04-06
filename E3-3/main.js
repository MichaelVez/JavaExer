function percentageOfWorld1(population) {
  const worldPop = 7900000000; //7900 million
  let result = (population / worldPop) * 100;
  return result;
}
let china = 1441000000;
console.log(percentageOfWorld1(china));
let israel = 9518500;
console.log(percentageOfWorld1(israel));
let unitedstates = 334384717;
console.log(percentageOfWorld1(unitedstates));

function percentageOfWorld2(population1, population2, population3) {
  const worldPop = 7900000000;
  return [
    (population1 / worldPop) * 100,
    (population2 / worldPop) * 100,
    (population3 / worldPop) * 100,
  ];
}
console.log(percentageOfWorld2(china, israel, unitedstates));
