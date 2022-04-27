function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
}
let pikachu = new Pokemon("Pikachu", "Electric", [
  "Tackle",
  "Thunder",
  "Sleep",
]);
let fatguy = new Pokemon("Snorlax", "Sleeper", ["Eat", "Sleep", "Rage"]);
let charmander = new Pokemon("Charmander", "Fire", [
  "Flames",
  "Fire-Whip",
  "Smile",
]);
Pokemon.prototype.callPokemon = function () {
  console.log(this.name + " i choose you!");
};
Pokemon.prototype.attack = function (num) {
  console.log(this.name + ", used:" + this.attackList[num]);
};
pikachu.callPokemon();
fatguy.callPokemon();
pikachu.attack(0);
fatguy.attack(0);
pikachu.attack(1);
fatguy.attack(1);
