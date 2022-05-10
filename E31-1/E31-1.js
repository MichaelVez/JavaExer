async function getStarWars() {
  let sendFirst = await fetch("https://swapi.dev/api/");
  let data = await sendFirst.json();
  console.log(data);
}
getStarWars();
