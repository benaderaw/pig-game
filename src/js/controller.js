import rollDiceView from "./Views/rollDiceView";
import holdView from "./Views/holdView";
import View from "./Views/views";

const controlDiceRoll = function () {
  // ROLL THE DICE AND CHANGE THE IMG
  rollDiceView.changeDiceImg();

  // RENDER
  rollDiceView.renderScore();
};

const controlHoldHolder = function () {
  holdView.updateCurrentScore();
  rollDiceView.resetScoreSum();
};

const init = function () {
  rollDiceView.rollDiceHandler(controlDiceRoll);
  holdView.holdBtnHandler(controlHoldHolder);
};

init();
