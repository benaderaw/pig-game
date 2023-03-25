export default class View {
  _leftPanel = document.querySelector(".left-panel");
  _rightPanel = document.querySelector(".right-panel");

  //
  _rollDice = document.querySelector(".roll-dice");
  _diceImg = document.querySelector(".dice-img");

  // PLAYER 1
  _player1Score = document.querySelector(".player-1-score-text");
  _Player2CurrentScore = document.querySelector(".player-1-current-score-text");

  // PLAYER 2
  _player2Score = document.querySelector(".player-2-score-text");
  _Player2CurrentScore = document.querySelector(".player-2-current-score-text");

  _holdBtn = document.querySelector(".hold-btn");

  _scoreSum = 0;
  _player1CurrentScoreSum = 0;
  _player2CurrentScoreSum = 0;
}
