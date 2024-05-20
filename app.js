function changeVal() {
  let randomNumber1 = Math.floor(Math.random() * 7);
  if (randomNumber1 > 0 && randomNumber1 <= 6) {
    let img1 = document.querySelector(".img1");
    img1.src = `images/download (${randomNumber1}).png`;
    console.log(randomNumber1);
  }

  let randomNumber2 = Math.floor(Math.random() * 7);
  if (randomNumber2 > 0 && randomNumber2 <= 6) {
    let img2 = document.querySelector(".img2");
    img2.src = `images/download (${randomNumber2}).png`;
    console.log(randomNumber2);
  }
  let result = document.querySelector(".result");
  if (randomNumber1 > randomNumber2) {
    result.innerHTML = `player 1 win!`;
  }
  if (randomNumber2 > randomNumber1) {
    result.innerHTML = `player 2 win!`;
  }
  if (randomNumber1 === randomNumber2) {
    result.innerHTML = "draw";
  }
}
