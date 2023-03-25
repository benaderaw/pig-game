import View from "./Views/views";
import rollDiceView from "./Views/rollDiceView";

const controlDiceRoll = function () {
  // GET RANDOM NUMBER
  rollDiceView.randomNumber();

  // ROLL THE DICE AND CHANGE THE IMG
  rollDiceView.changeDiceImg();

  //
  rollDiceView.addScore();
};

const init = function () {
  rollDiceView.rollDiceHandler(controlDiceRoll);
};

init();
