let myStuff = [];
getStarWars();
async function getStarWars() {
  let sendFirst = await fetch("https://swapi.dev/api/people/");
  let data = await sendFirst.json();
  for (let i = 0; i < data.results.length; i++) {
    let sendFirst = await fetch(data.results[i].homeworld);
    let dataJson = await sendFirst.json();
    let planetName = dataJson.name;
    let pop = dataJson.population;
    myStuff.push({
      name: data.results[i].name,
      height: data.results[i].height,
      hair_color: data.results[i].hair_color,
      plant: {
        name: planetName,
        population: pop,
      },
    });
  }
  drawBored(myStuff);
}
function drawBored(items) {
  let tags = document.createElement("div");
  tags.style.display = "flex";
  tags.style.flexDirection = "row";
  tags.style.justifyContent = "space-evenly";
  tags.style.height = `${100}%`;

  document.body.appendChild(tags);
  let tagsArr = [
    "name",
    "hair_color",
    "height",
    "plant.name",
    "plant.population",
  ];
  for (let i = 0; i < tagsArr.length; i++) {
    let tag = document.createElement("div");
    tag.textContent = tagsArr[i];
    tag.style.width = `${100 / tagsArr.length}%`;
    tags.appendChild(tag);
  }

  for (let i = 0; i < items.length; i++) {
    let arr = [
      items[i].name,
      items[i].hair_color,
      items[i].height,
      items[i].plant.name,
      items[i].plant.population,
    ];
    document.body.style.height = "100vh";
    document.body.style.display = "flex";
    document.body.style.flexDirection = "column";
    document.body.style.justifyContent = "space-evenly";
    let row = document.createElement("div");
    row.style.display = "flex";
    row.style.flexDirection = "row";
    row.style.justifyContent = "space-evenly";
    row.style.height = `${100}%`;
    document.body.appendChild(row);

    for (let j = 0; j < arr.length; j++) {
      let item = document.createElement("div");
      item.textContent = arr[j];
      item.style.width = `${100 / arr.length}%`;
      item.style.border = "1px solid";
      item.style.textAlign = "center";
      row.appendChild(item);
    }
  }
}
