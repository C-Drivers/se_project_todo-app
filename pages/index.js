import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import TodoCounter from "../components/TodoCounter.js";

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopup = document.querySelector("#add-todo-popup");
const addTodoForm = document.forms["add-todo-form"];
const addTodoCloseBtn = addTodoPopup.querySelector(".popup__close");
const todosList = document.querySelector(".todos__list");

//Todo Counter
const todoCounter = new TodoCounter(initialTodos, ".counter__text");

//Checkbox Functions
function handleCheck(completed) {
  todoCounter.updateCompleted(completed);
}

function handleDelete() {
  todoCounter.updateTotal();
}

//Todo class
const generateTodo = (data) => {
  const todo = new Todo(data, "#todo-template", handleCheck, handleDelete);
  const todoElement = todo.getView();
  return todoElement;
};

//Section class
const section = new Section({
  items: initialTodos,
  renderer: (item) => {
    const renderEl = generateTodo(item);
    section.addItem(renderEl);
  },
  containerSelector: ".todos__list",
});

section.renderItems();

const popupForm = new PopupWithForm({
  popupSelector: "#add-todo-popup",
  handleFormSubmit: (inputValues) => {
    console.log(inputValues);
    const name = inputValues.name;
    const dateInput = inputValues.date;

    // Create a date object and adjust for timezone
    const date = new Date(dateInput);
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
    const id = uuidv4();
    const values = { name, date, id };
    renderTodo(values);
    todoFormValidator.resetValidation();
    popupForm.close();
    todoCounter.updateTotal(true);
  },
});
popupForm.setEventListeners();

addTodoButton.addEventListener("click", () => {
  popupForm.open();
});

const renderTodo = (item) => {
  const todoEl = generateTodo(item);
  section.addItem(todoEl);
};

const todoFormValidator = new FormValidator(validationConfig, addTodoForm);
todoFormValidator.enableValidation();
