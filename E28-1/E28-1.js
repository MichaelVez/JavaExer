// let myF = fetch("https://api.jokes.one/jod").then((response) =>
//   console.log(response)
// );
let title = document.querySelector(".title");
let joke = document.querySelector(".joke");
let btn = document.querySelector(".btn");

btn.addEventListener("click", fetchDataFunc);
function fetchDataFunc() {
  const fetchData = fetch("https://api.jokes.one/jod")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.contents.jokes[0].joke);
      //   console.log(data.contents.jokes[0].joke.title);
      title.textContent = "title: " + data.contents.jokes[0].joke.title;
      //   console.log(data.contents.jokes[0].joke.text);
      joke.textContent = data.contents.jokes[0].joke.text;
    });
}
