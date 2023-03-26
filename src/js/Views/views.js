import diceOne from "url:../../img/dice-1.png";
import diceTwo from "url:../../img/dice-2.png";
import diceThree from "url:../../img/dice-3.png";
import diceFour from "url:../../img/dice-4.png";
import diceFive from "url:../../img/dice-5.png";
import diceSix from "url:../../img/dice-6.png";

export default class View {
  _leftPanel = document.querySelector(".left-panel");
  _rightPanel = document.querySelector(".right-panel");

  //
  _rollDiceBtn = document.querySelector(".roll-dice-btn");
  _diceImg = document.querySelector(".dice-img");

  // PLAYER 1
  _player1Score = document.querySelector(".player-1-score-text");
  _player1CurrentScore = document.querySelector(".player-1-current-score-text");

  // PLAYER 2
  _player2Score = document.querySelector(".player-2-score-text");
  _player2CurrentScore = document.querySelector(".player-2-current-score-text");

  // HOLD BUTTON
  _newGameBtn = document.querySelector(".new-game-btn");
  _holdBtn = document.querySelector(".hold-btn");

  _rolledNumber;
  _scoreSum = 0;
  _player1CurrentScoreSum = 0;
  _player2CurrentScoreSum = 0;

  ///////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////

  // TOGGLE THE ACTIVE PLAYER
  toggleActive() {
    this._leftPanel.classList.toggle("active");
    this._rightPanel.classList.toggle("active");
    this.reset();
  }

  // GET A RANDOM NUMBER BETWEEN 1-6
  randomNumber() {
    const randomNum = Math.floor(Math.random() * 6) + 1;
    this._rolledNumber = randomNum;
    return randomNum;
  }

  // CHANGE THE DICE IMAGE BASED ON THE RANDOM NUMBER
  changeDiceImg() {
    const random = this.randomNumber();

    if (random === 1) this._diceImg.src = diceOne;
    if (random === 2) this._diceImg.src = diceTwo;
    if (random === 3) this._diceImg.src = diceThree;
    if (random === 4) this._diceImg.src = diceFour;
    if (random === 5) this._diceImg.src = diceFive;
    if (random === 6) this._diceImg.src = diceSix;
  }
  //
  totalScoreSum() {
    return (this._scoreSum += this._rolledNumber);
  }

  // RESET
  reset() {
    this._scoreSum = 0;
    this._player1Score.textContent = 0; // reset the score to 0
    this._player2Score.textContent = 0; // reset the score to 0
    this._diceImg.src = diceOne;
  }
}
