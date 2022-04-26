let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let playchar = characters[Math.floor(Math.random() * characters.length)];
let status1 = document.querySelector("#status");
let wrongarr = document.querySelector("#wrongGues");
let div = document.querySelector("div");
console.log(playchar);
document.body.addEventListener("keyup", (e) => {
  if (status1.textContent !== "You Win!") {
    if (characters.includes(e.key.toLocaleUpperCase())) {
      console.log(e.key);
      if (e.key.toLocaleUpperCase() === playchar) {
        //wins
        status1.textContent = "You Win!";
        status1.style.color = "green";
        div.innerText = e.key.toLocaleUpperCase();
        let btnPlayAg = document.createElement("button");
        btnPlayAg.textContent = "Play again";
        btnPlayAg.addEventListener("click", () => {
          //reset
          status1.textContent = "Guess your letter";
          status1.style.color = "black";
          wrongarr.textContent = "";
          div.textContent = "?";
          playchar = characters[Math.floor(Math.random() * characters.length)];
          console.log(playchar);
          btnPlayAg.style.display = "none";
        });
        document.body.appendChild(btnPlayAg);
      } else {
        if (wrongarr.textContent.includes(e.key.toLocaleLowerCase())) {
          status1.textContent = `Already guessed ${e.key}`;
        } else {
          status1.textContent = `Your guess was ${e.key} wrong`;
          wrongarr.textContent += e.key + ",";
        }
      }
    } else {
      status1.textContent = `invalid letter : ${e.key}`;
      status1.style.color = "red";
    }
  }
});
