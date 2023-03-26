import View from "./views";

class RollDiceView extends View {
  // ADD THE DICE RESULTS
  renderScore() {
    // CHECK IF YOU TOLL A 1
    if (this._rolledNumber === 1) {
      return this.toggleActive();
    }

    // SCORE SUM
    this.totalScoreSum();

    // UPDATE THE SCORE AS YOU ROLL
    if (this._leftPanel.classList.contains("active"))
      this._player1Score.textContent = this._scoreSum;

    if (this._rightPanel.classList.contains("active"))
      this._player2Score.textContent = this._scoreSum;
  }

  //
  resetScoreSum() {
    this.reset();
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
