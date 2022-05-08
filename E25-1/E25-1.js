const hero = {
  health: 5,
  power: 68,
  getStrength: function () {
    if (this.health <= 5) {
      return this.power - 10;
    } else return this.power;
  },
};
function whoIsStronger(getStrength) {
  const myStrength = 82;
  if (getStrength() < myStrength) {
    return "I am stronger";
  } else return "You are stronger";
}
whoIsStronger(hero.getStrength);
//? 1: What is the problem in this code?
//*function whoIsStronger is called globally and the arg getStrength function is also called
//* globally, causing the function to ignore hero object and look for a global power value

console.log(whoIsStronger(hero.getStrength));

//? 2:Fix the problem
console.log(whoIsStronger(hero.getStrength.bind(hero)));
