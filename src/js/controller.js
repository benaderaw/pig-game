import View from "./Views/views";
import rollDiceView from "./Views/rollDiceView";

const controlDiceRoll = function () {
  // GET RANDOM NUMBER
  rollDiceView.randomNumber();

  // ROLL THE DICE AND CHANGE THE IMG
  rollDiceView.changeDiceImg();
};

const init = function () {
  rollDiceView.rollDiceHandler(controlDiceRoll);
};

init();

console.log(Math.floor(0.001));
