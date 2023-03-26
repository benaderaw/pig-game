import rollDiceView from "./Views/rollDiceView";
import holdView from "./Views/holdView";
import newGameView from "./Views/newGameView";

const controlDiceRoll = function () {
  // check if winner
  if (rollDiceView.ifWinner()) return;

  // ROLL THE DICE AND CHANGE THE IMG
  rollDiceView.changeDiceImg();

  // RENDER
  rollDiceView.renderScore();
};

const controlHold = function () {
  // check if winner
  if (rollDiceView.ifWinner()) return;

  holdView.renderScore();
  rollDiceView.resetCurrScore();
};

const controllerNewGame = function () {
  //

  rollDiceView.newGameReset();
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
