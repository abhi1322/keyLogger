let start = document.getElementById("start");
let stoper = document.getElementById("stop");

let tellerLeft = document.querySelector(".teller-left");
let tellerRight = document.querySelector(".teller-right");

let loggerOn = false;

// start button handle
start.style.opacity = 0.3;
start.addEventListener("click", (e) => {
  loggerOn = true;
  console.log(loggerOn);
  stoper.style.opacity = 0.3;
  start.style.opacity = 1;
  addMyEvents();
});

// stop button handle
stoper.addEventListener("click", (e) => {
  loggerOn = false;
  console.log(loggerOn);
  stoper.style.opacity = 1;
  start.style.opacity = 0.3;
  removeMyEvents();
});

function keyPress(e) {
  tellerLeft.innerHTML = `key "${e.key}" pressed down`;
}
function keyUp(e) {
  tellerLeft.innerHTML = `key "${e.key}" released `;
}
function keyDown(e) {
  tellerRight.innerHTML = `key is down`;
}
function keyUp2(e) {
  tellerRight.innerHTML = `key is up`;
}

function addMyEvents() {
  window.addEventListener("keypress", keyPress);
  window.addEventListener("keyup", keyUp);
  window.addEventListener("keydown", keyDown);
  window.addEventListener("keyup", keyUp2);
}

function removeMyEvents() {
  window.removeEventListener("keypress", keyPress);
  window.removeEventListener("keyup", keyUp);
  window.removeEventListener("keydown", keyDown);
  window.removeEventListener("keyup", keyUp2);
}
