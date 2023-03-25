import View from "./views";
import diceOne from "url:../../img/dice-1.png";
import diceTwo from "url:../../img/dice-2.png";
import diceThree from "url:../../img/dice-3.png";
import diceFour from "url:../../img/dice-4.png";
import diceFive from "url:../../img/dice-5.png";
import diceSix from "url:../../img/dice-6.png";

class RollDiceView extends View {
  sayHello() {
    console.log("Hello Benyam, it's nice to meet you");
  }

  randomNumber() {
    const randomNum = Math.floor(Math.random() * 6) + 1;
    return randomNum;
  }

  changeDiceImg() {
    const randomNum = this.randomNumber();
    console.log(randomNum);
    if (randomNum === 1) this._diceImg.src = diceOne;
    if (randomNum === 2) this._diceImg.src = diceTwo;
    if (randomNum === 3) this._diceImg.src = diceThree;
    if (randomNum === 4) this._diceImg.src = diceFour;
    if (randomNum === 5) this._diceImg.src = diceFive;
    if (randomNum === 6) this._diceImg.src = diceSix;
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
