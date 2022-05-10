let input = document.querySelector("#text");
let button = document.querySelector("#btn");
let img = document.querySelector("img");
let title = document.querySelector(".title");
let genre = document.querySelector(".genre");
let year = document.querySelector(".year");
let plot = document.querySelector(".plot");
let director = document.querySelector(".director");
let actors = document.querySelector(".actors");
let awards = document.querySelector(".awards");
let searchType = "titleSearch";
button.addEventListener("click", getMovie);

function getMovie(event) {
  event.preventDefault();
  if (input.value) {
    let userInput = input.value;
    if (searchType == "titleSearch") {
      searchByTitleAPI(userInput);
    } else {
      searchByIDAPI(userInput);
    }
  }
}
function radClick(btn) {
  searchType = btn.id;
  input.value = "";
  input.setAttribute("placeholder", `Search by ${btn.value}`);
}
async function searchByIDAPI(userInput) {
  let req = await fetch(
    `http://www.omdbapi.com/?apikey=f2094faf&i=${userInput}`
  );
  let data = await req.json();
  if (data.Response === "True") {
    RenderMovie(data);
  } else alert("no such movie");
}
async function searchByTitleAPI(userInput) {
  userInput.replaceAll(" ", "+");
  let req = await fetch(
    `http://www.omdbapi.com/?apikey=f2094faf&t=${userInput}`
  );
  let data = await req.json();
  if (data.Response === "True") {
    RenderMovie(data);
  } else alert("no such movie");
}
function RenderMovie(data) {
  img.src = data.Poster;
  title.textContent = "Title: " + data.Title;
  genre.textContent = "Genre: " + data.Genre;
  year.textContent = "Year: " + data.Year;
  plot.textContent = "Plot: " + data.Plot;
  director.textContent = "Director: " + data.Director;
  actors.textContent = "Actors: " + data.Actors;
  awards.textContent = "Awards: " + data.Awards;
}
