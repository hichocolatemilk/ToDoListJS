const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = toDoForm.querySelector("#todo-form input");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function successToDo(event) {
  const li = event.target.parentElement;
  toDos = toDos.filter((toDo) => toDo.id == parseInt(li.id));
  li.style.textDecorationLine = "line-through";
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  const button1 = document.createElement("button");
  const button2 = document.createElement("button");
  span.innerText = newTodo.text;
  button1.innerText = "❌";
  button2.innerText = "✔";
  button1.addEventListener("click", deleteToDo);
  button2.addEventListener("click", successToDo);
  li.appendChild(span);
  li.appendChild(button1);
  li.appendChild(button2);
  toDoList.appendChild(li);
}

function toDoSubmit(event) {
  const newTodo = toDoInput.value;
  const TodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  event.preventDefault();
  toDoInput.value = "";
  toDos.push(TodoObj);
  paintToDo(TodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", toDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parseToDos = JSON.parse(savedToDos);
  toDos = parseToDos;
  parseToDos.forEach(paintToDo);
}
