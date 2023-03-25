import View from "./views";
import diceOne from "url:../../img/dice-1.png";
import diceTwo from "url:../../img/dice-2.png";
import diceThree from "url:../../img/dice-3.png";
import diceFour from "url:../../img/dice-4.png";
import diceFive from "url:../../img/dice-5.png";
import diceSix from "url:../../img/dice-6.png";

class RollDiceView extends View {
  _rolledNumber = 0;

  randomNumber() {
    const randomNum = Math.floor(Math.random() * 6) + 1;
    return randomNum;
  }

  changeDiceImg() {
    const randomNum = this.randomNumber();
    // console.log(randomNum);
    this._rolledNumber = randomNum;
    if (randomNum === 1) this._diceImg.src = diceOne;
    if (randomNum === 2) this._diceImg.src = diceTwo;
    if (randomNum === 3) this._diceImg.src = diceThree;
    if (randomNum === 4) this._diceImg.src = diceFour;
    if (randomNum === 5) this._diceImg.src = diceFive;
    if (randomNum === 6) this._diceImg.src = diceSix;
  }

  toggleActive() {
    this._leftPanel.classList.toggle("active");
    this._rightPanel.classList.toggle("active");
  }

  reset() {
    this._scoreSum = 0; // reset the current score sum
    this._player1Score.textContent = 0; // reset the score to 0
    this._player2Score.textContent = 0; // reset the score to 0
  }

  addScore() {
    // CHECK IF YOU TOLL A 1
    if (this._rolledNumber === 1) {
      this.toggleActive();
      return this.reset();
    }

    // IF YOU DID NOT ROLL A 1
    this._scoreSum = this._scoreSum + this._rolledNumber;
    console.log("score is: " + this._scoreSum);

    // UPDATE THE SCORE AS YOU ROLL
    if (this._leftPanel.classList.contains("active"))
      this._player1Score.textContent = this._scoreSum;

    if (this._rightPanel.classList.contains("active"))
      this._player2Score.textContent = this._scoreSum;
  }

  rollDiceHandler(handle) {
    this._rollDice.addEventListener(
      "click",
      function (e) {
        e.preventDefault();

        handle();
      }.bind(this)
    );
  }
}

export default new RollDiceView();
