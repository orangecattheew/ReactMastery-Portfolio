// Events in Javascript
// select element
// add event listener()
// what event ,what to do
const btn = document.querySelector(".btn");
const h1_element = document.querySelector("h1");
btn.addEventListener("click", function () {
  // this is the anonymous function/its an anonymous callback function
  console.log("Hey ,You clicked me");
  //   h1_element.classList.add("red", "font-garamond");
  let hasClass = h1_element.classList.contains("red");
  if (hasClass) {
    h1_element.classList.remove("red");
  } else {
    h1_element.classList.add("red");
  }
});

// function reference
// adding callback function as a reference instead of directly adding it

const changeColors = () => {
  console.log("hello");
  h1_element.classList.remove("red", "font-garamond");
  h1_element.classList.add("color", "text-italic", "text-bold");
};
const btn2 = document.querySelector(".btn2");
btn2.addEventListener("click", changeColors);
// here is changeColors function we are referencing it and not adding () immediately
// otherwise it will be used by event listener immediately before the event has happened
// so then on even only that function that is referenced is used

// mouse events
// click-fires after full action occurs
// mousedown-button is pressed
// mouseup-button is released
// mouseenter-moved onto an element
// mouseleave-moved out of an element
const btn3 = document.querySelector(".btn3");
const h2_element = document.querySelector("h2");

btn3.addEventListener("click", function () {
  console.log("you clicked me ");
});

btn3.addEventListener("mousedown", function () {
  console.log("mouse_down");
});

btn3.addEventListener("mouseup", function () {
  console.log("mouse_up");
});

h2_element.addEventListener("mouseenter", function () {
  console.log("mouse_enter");
  h2_element.classList.add("blue");
});

h2_element.addEventListener("mouseleave", function () {
  console.log("mouse_leave");
  h2_element.classList.remove("blue");
});

// Key Events
// keypress-when key is pressed
// keydown-when key is down
// keyup-when key is released

const keypress_input = document.querySelector(".keypress_1");
const keydown_input = document.querySelector(".keydown_1");
const keyup_input = document.querySelector(".keyup_1");

keypress_input.addEventListener("keypress", function () {
  console.log("keypressed");
});
keydown_input.addEventListener("keydown", function () {
  console.log("key_down");
});
keyup_input.addEventListener("keyup", function () {
  console.log("key_up");
  console.log(keyup_input.value);
});

// Event Object argument e,evt
// info about triggered event
// event type
// event.currentTarget
// this keyword
// preventDefault()=prevents default behaviour

const h5_element = document.querySelector("h5");
const btn4 = document.querySelector(".btn4");
const link1 = document.getElementById("link");
function generateLog(event) {
  console.log(event.currentTarget);
  console.log(event);
  console.log(event.type);
}
h5_element.addEventListener("click", generateLog);
btn4.addEventListener("click", generateLog);

function preventDefault_1(e) {
  e.preventDefault();
}
link1.addEventListener("click", preventDefault_1);

// current Target:
// current target always referes to the element to which the event handler has been attached to
// target -identifies the element on which the event occured

function bold_current_target(e) {
  e.currentTarget.classList.add("font-bold", "blue");
}
function bold_target(e) {
  e.target.classList.add("font-italic", "red");
}

const my_target = document.querySelectorAll(".my_target");
my_target.forEach((ele) => ele.addEventListener("click", bold_current_target));

const my_target_2 = document.querySelectorAll(".my_target_2");
my_target_2.forEach((ele) => ele.addEventListener("click", bold_target));
