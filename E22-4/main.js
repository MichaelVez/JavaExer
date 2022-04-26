let player1 = document.querySelector("#player1-race");
let player2 = document.querySelector("#player2-race");
let h1 = document.createElement("h1");
let reset = document.createElement("button");
reset.textContent = "Play again";
reset.addEventListener("click", () => {
  //todo reset
  player1.children[0].classList.add("active");
  player2.children[0].classList.add("active");
  for (let i = 1; i < 12; i++) {
    player1.children[i].classList.remove("active");
    player2.children[i].classList.remove("active");
  }
  document.body.removeChild(h1);
  document.body.removeChild(reset);
});
console.dir(player1.children);
document.body.addEventListener("keyup", (e) => {
  //player one key space
  if (
    !player1.children[11].classList.contains("active") &&
    !player2.children[11].classList.contains("active")
  ) {
    if (e.key === " ") {
      for (let i = 0; i < player1.children.length; i++) {
        if (player1.children[i].classList.contains("active")) {
          //move
          player1.children[i].classList.remove("active");
          player1.children[i + 1].classList.add("active");
          break;
        }
      }
      //win
      if (player1.children[11].classList.contains("active")) {
        h1.textContent = "Player 1 win";
        document.body.appendChild(h1);
        document.body.appendChild(reset);
      }
    }
    //player two key rightarrow
    if (e.key === "ArrowRight") {
      for (let i = 0; i < player2.children.length; i++) {
        if (player2.children[i].classList.contains("active")) {
          //move
          player2.children[i].classList.remove("active");
          player2.children[i + 1].classList.add("active");
          break;
        }
      }
      //win
      if (player2.children[11].classList.contains("active")) {
        console.log("hre");
        h1.textContent = "Player 2 win";
        document.body.appendChild(h1);
        document.body.appendChild(reset);
      }
    }
  }
});
