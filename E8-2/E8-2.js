const mycountry = {
  country: "israel",
  capital: "Jerusalem",
  language: "Hebrew",
  population: 9e6,
  neighbours: ["Egypt", "Jordan", "Lebanon", "Syria"],
  describe() {
    console.log(`${this.country} has ${this.population} people, their mother tongue is ${this.language}, they
    have ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}. `);
  },
  checkIsland() {
    this.isIsland = this.neighbours.length === 0 ? true : false;
  },
};
mycountry.checkIsland();
mycountry.describe();
