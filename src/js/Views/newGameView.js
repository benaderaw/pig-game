import View from "./views";

class NewGameView extends View {
  //
  newGame() {
    this.toggleActive();
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
