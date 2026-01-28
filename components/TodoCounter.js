class TodoCounter {
  constructor(todos, selector) {
    this._element = document.querySelector(selector);
    this._completed = 0;
    this._total = 0;
  }

  updateCompleted = (increment) => {};

  updateTotal = (increment) => {};

  _updateText() {
    this._element.textcontent = `Showing ${this._completed} out of ${this._total} this._completed`;
  }
}

export default TodoCounter;