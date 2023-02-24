const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const logoutForm = document.querySelector("#logout-form");
const logout = document.querySelector("#logout-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const savedUsername = localStorage.getItem(USERNAME_KEY);

function loginSubmit(event) {
  const username = loginInput.value;
  // event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(USERNAME_KEY);
}

function logoutSubmit(event) {
  localStorage.removeItem(USERNAME_KEY);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", loginSubmit);
} else {
  paintGreetings(savedUsername);
  logoutForm.classList.remove(HIDDEN_CLASSNAME);
  logoutForm.addEventListener("submit", logoutSubmit);
}
