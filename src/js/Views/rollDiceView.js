import { WINNING_NUMBER } from "../config";
import View from "./views";

class RollDiceView extends View {
  _rollDiceBtn = document.querySelector(".roll-dice-btn");

  ifWinner() {
    if (+this._player1Score.textContent >= WINNING_NUMBER) return true;
    if (+this._player2Score.textContent >= WINNING_NUMBER) return true;
  }

  // ADD THE DICE RESULTS
  renderScore() {
    // CHECK IF YOU TOLL A 1
    if (this._rolledNumber === 1) {
      // reset score text content
      this.resetCurrScore();
      return this.toggleActive();
    }

    // SCORE SUM
    this.totalScoreSum();

    // UPDATE THE CURRENT SCORE AS YOU ROLL
    if (this._leftPanel.classList.contains("active")) {
      this._player1CurrentScore.textContent = this._currScoreSum;
    }

    if (this._rightPanel.classList.contains("active"))
      this._player2CurrentScore.textContent = this._currScoreSum;
  }

  //
  resetCurrScore() {
    this._currScoreSum = 0;
    this._player1CurrentScore.textContent = 0;
    this._player2CurrentScore.textContent = 0;
  }

  rollDiceHandler(handle) {
    this._rollDiceBtn.addEventListener(
      "click",
      function (e) {
        e.preventDefault();

        handle();
      }.bind(this)
    );
  }
}

export default new RollDiceView();
