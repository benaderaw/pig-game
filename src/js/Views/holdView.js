import View from "./views";
import rollDiceView from "./rollDiceView";

class HoldView extends View {
  updateCurrentScore() {
    //  WHEN HOLD BTN IS HIT

    //RENDER CURRENT SUM
    if (this._leftPanel.classList.contains("active")) {
      // GET THE SUM
      this._scoreSum = +this._player1Score.textContent; // 6

      // STORE INTO CURR SUM
      this._player1CurrentScoreSum += this._scoreSum; // 6

      //
      this._player1CurrentScore.textContent = this._player1CurrentScoreSum; // 6
    }

    if (this._rightPanel.classList.contains("active")) {
      // GET THE SUM
      this._scoreSum = +this._player2Score.textContent;

      // STORE INTO CURR SUM
      this._player2CurrentScoreSum += this._scoreSum;

      //
      this._player2CurrentScore.textContent = this._player2CurrentScoreSum;
    }

    this.toggleActive();
  }

  holdBtnHandler(handle) {
    this._holdBtn.addEventListener("click", function (e) {
      e.preventDefault();

      handle();
    });
  }
}

export default new HoldView();
