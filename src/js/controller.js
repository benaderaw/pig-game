import rollDiceView from "./Views/rollDiceView";
import holdView from "./Views/holdView";
import View from "./Views/views";
import newGameView from "./Views/newGameView";

const controlDiceRoll = function () {
  // ROLL THE DICE AND CHANGE THE IMG
  rollDiceView.changeDiceImg();

  // RENDER
  rollDiceView.renderScore();
};

const controlHold = function () {
  holdView.updateCurrentScore();
  rollDiceView.resetScoreSum();
};

const controllerNewGame = function () {
  //
  rollDiceView.resetScoreSum();
  holdView.resetCurrScore();
  newGameView.newGame();
};

//////////////////
//////////////////

const init = function () {
  rollDiceView.rollDiceHandler(controlDiceRoll);
  holdView.holdBtnHandler(controlHold);
  newGameView.newGameHandler(controllerNewGame);
};

init();
