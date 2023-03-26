import { WINNING_NUMBER } from "../config";
import View from "./views";

class HoldView extends View {
  _holdBtn = document.querySelector(".hold-btn");

  updateCurrentScore() {
    //RENDER CURRENT SUM
    if (this._leftPanel.classList.contains("active")) {
      // GET THE SUM
      this._currScoreSum = +this._player1CurrentScore.textContent; // 6

      // STORE INTO CURR SUM
      this._player1ScoreSum += this._currScoreSum; // 6

      //
      this._player1Score.textContent = this._player1ScoreSum; // 6

      if (this._player1ScoreSum >= WINNING_NUMBER) {
        this._leftPanel.classList.add("winner");
        this._player1Text.style.color = "#fff";
        this._rightPanel.classList.remove("active");
        this._diceImg.style.opacity = 0;
      }
    }

    if (this._rightPanel.classList.contains("active")) {
      // GET THE SUM
      this._currScoreSum = +this._player2CurrentScore.textContent;

      // STORE INTO CURR SUM
      this._player2ScoreSum += this._currScoreSum;

      //
      this._player2Score.textContent = this._player2ScoreSum;

      if (this._player2ScoreSum >= WINNING_NUMBER) {
        this._rightPanel.classList.add("winner");
        this._player2Text.style.color = "#fff";
        this._leftPanel.classList.remove("active");
        this._diceImg.style.opacity = 0;
      }
    }

    this.toggleActive();
  }

  // RESET CURRENT SCORE
  resetCurrScore() {
    this._player1ScoreSum = 0;
    this._player1Score.textContent = 0;
    this._player2ScoreSum = 0;
    this._player2CurrentScore.textContent = 0;
  }

  holdBtnHandler(handle) {
    this._holdBtn.addEventListener("click", function (e) {
      e.preventDefault();

      handle();
    });
  }
}

export default new HoldView();
