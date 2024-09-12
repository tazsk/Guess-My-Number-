"use strict";

let secretNumber = Math.trunc(Math.random() * 100) + 1;
let score = 10;
let highScore = 0;
let prevScore = 0;

document.querySelector(".score").textContent = score;
document.querySelector(".highscore").textContent = highScore;

//Reset and Play Again click button functionality
document.querySelector(".reset").addEventListener("click", function () {
  document.querySelector(".secret").textContent = '?';
  secretNumber = Math.trunc(Math.random() * 100) + 1;
  document.querySelector("body").style.backgroundColor = "000000";
  document.querySelector(".guess").value = "";
  document.querySelector(".check").disabled = false;
  score = 10;
  document.querySelector(".score").textContent = score;
});

//Check button functionality
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //Correct guess
  if (guess === secretNumber) {
    if (score >= prevScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
    document.querySelector(".status").textContent = "Correct!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".secret").textContent = secretNumber;
    document.querySelector(".check").disabled = true;
    document.querySelector(".reset").textContent = "Play Again";
    prevScore = highScore;

    //Guess lower than secret number
  } else if (guess < secretNumber && guess > 0 && score > 0) {
      document.querySelector(".status").textContent = "Go higher...";
      --score;
      if (score === 0) {
        document.querySelector(".check").disabled = true;
        document.querySelector(".status").textContent = "Game Over...";
        document.querySelector(".reset").textContent = "Play Again";
        document.querySelector("body").style.backgroundColor = "ff0000";
      }
      document.querySelector(".score").textContent = score;
      
    //Guess higher than secret number
  } else if (guess > secretNumber && guess <=100 && score > 0) {
      document.querySelector(".status").textContent = "Go lower...";
      --score;
      if (score === 0) {
        document.querySelector(".check").disabled = true;
        document.querySelector(".status").textContent = "Game Over...";
        document.querySelector(".reset").textContent = "Play Again";
        document.querySelector("body").style.backgroundColor = "ff0000";
      }
      document.querySelector(".score").textContent = score;
    
    //Guess out of bounds
  } else {
      document.querySelector(".status").textContent = "Please enter a number between 1 and 100";
  }
});
