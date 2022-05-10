const btn = document.querySelector("#btn");
const input = document.querySelector("input");
let openCards = [];
btn.addEventListener("click", myFetch);
function myFetch() {
  if (input.value) {
    let inputText = input.value;
    input.value = "";
    fetchUser(inputText);
  }
}
async function fetchUser(user) {
  let request = await fetch(`https://api.github.com/users/${user}`);
  let data = await request.json();
  if (data.message === "Not Found") {
    alert("Not Found");
  } else {
    if (openCards.includes(data.login)) alert("Already open silly");
    else {
      let cards = document.querySelector(".cards");
      openCards.push(data.login);
      let card = document.createElement("div");
      card.classList.add("card");
      let img = document.createElement("img");
      img.src = `${data.avatar_url}`;
      card.appendChild(img);
      let name = document.createElement("div");
      name.textContent = `${data.login}`;
      card.appendChild(name);
      let repos = document.createElement("div");
      repos.textContent = `Public repos: ${data.public_repos}`;
      card.appendChild(repos);
      cards.appendChild(card);
    }
  }
}
