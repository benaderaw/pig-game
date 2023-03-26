import View from "./views";

class NewGameView extends View {
  _newGameBtn = document.querySelector(".new-game-btn");

  //
  newGame() {
    this._leftPanel.classList.add("active");
    this._rightPanel.classList.remove("active");
    this.newGameReset();
  }

  newGameHandler(handle) {
    this._newGameBtn.addEventListener(
      "click",
      function (e) {
        e.preventDefault();

        handle();
      }.bind(this)
    );
  }
}

export default new NewGameView();

// scoreSum and scoreSum.text
