function percentageOfWorld1(population) {
  const worldPop = 790e6; //7900 million
  let result = (population / worldPop) * 100;
  return result;
}

let populations = [100e6, 30, 40, 50];
function populationPercentages(population) {
  let percentages = [];
  for (let i = 0; i < population.length; i++) {
    percentages.push(percentageOfWorld1(population[i]));
  }
  return percentages;
}
console.log(populationPercentages(populations));
