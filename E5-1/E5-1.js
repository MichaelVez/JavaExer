function countryToLiveIn(language, isIsland, population, country) {
  if (population < 50000000 && language === "english" && isIsland === false) {
    console.log(`You should live in ${country}`);
    return true;
  } else {
    console.log(`${country} does not meet your criteria`);
    return false;
  }
}
