function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} people and its capital city is ${capitalCity}`;
}
let isr = describeCountry("israel", "10 milion", "Jerusalem");
let us = describeCountry("United States", "332 milion", "Washington DC");
let france = describeCountry("France", "67 milion", "Paris");
console.log(isr);
console.log(us);
console.log(france);
