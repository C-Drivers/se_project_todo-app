class FormValidator {
  constructor(settings, formEl) {
    this._inputSelector = settings.inputSelector;
    this._formSelector = settings.formSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._errorClass = settings.errorClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._formEl = formEl;
  }

  _setEventListeners(formEl, settings) {
    const inputList = Array.from(
        formElement.querySelectorAll(settings.inputSelector),
      );
      const buttonElement = formElement.querySelector(
        settings.submitButtonSelector,
      );
    
      toggleButtonState(inputList, buttonElement, settings);
    
      inputList.forEach((inputElement) => {
        inputElement.addEventListener("input", () => {
          checkInputValidity(formElement, inputElement, settings);
          toggleButtonState(inputList, buttonElement, settings);
        });
      });
  }

  enableValidation() {
    this._formEl.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }

  resetValidation() {
    this._submitButtonSelector.disabled = true;
  }
}

export default FormValidator;
