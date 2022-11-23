(function () {
  //variables declaration
  let currentSign = "X";
  let scoreX = 0;
  let scoreO = 0;
  let counter = 0;
  let xWins = 0;
  let oWins = 0;

  //selectors
  const allGameButtons = document.querySelectorAll(
    ".tic-tac-toe-wrapper .game button"
  );
  let xScore = document.querySelector(".tic .wins");
  let oScore = document.querySelector(".tac .wins");
  const restartBtn = document.querySelector(".restart button");

  // board button click
  allGameButtons.forEach((button) => {
    button.addEventListener("click", function () {
      if (button.innerHTML === "" && xWins === 0 && oWins === 0) {
        counter++;
        button.innerHTML = currentSign;
        check();
        if (xWins !== 0 || oWins !== 0 || counter === 9) {
          restartBtn.classList.remove("hide");
        }

        if (currentSign === "X") {
          currentSign = "0";
        } else {
          currentSign = "X";
        }
      }
    });
  });

  // check win conditions
  function check() {
    test(0, 1, 2);
    test(3, 4, 5);
    test(6, 7, 8);
    test(0, 3, 6);
    test(1, 4, 7);
    test(2, 5, 8);
    test(0, 4, 8);
    test(2, 4, 6);
  }

  // win conditions
  function test(a, b, c) {
    if (
      allGameButtons[a].innerHTML === allGameButtons[b].innerHTML &&
      allGameButtons[b].innerHTML === allGameButtons[c].innerHTML &&
      allGameButtons[a].innerHTML !== ""
    ) {
      console.log(`${currentSign} - wins`);

      if (allGameButtons[a].innerHTML === "X") {
        xWins++;
        scoreX++;
        xScore.innerHTML = scoreX;
      } else {
        oWins++;
        scoreO++;
        oScore.innerHTML = scoreO;
      }
    }
  }

  //restart game
  restartBtn.addEventListener("click", restartGame);

  function restartGame() {
    allGameButtons.forEach((button) => {
      button.innerHTML = "";
      restartBtn.classList.add("hide");
      xWins = 0;
      oWins = 0;
      currentSign = "X";
      counter = 0;
    });
  }
})();
