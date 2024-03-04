//select element
//add event listener()
//what event ,what to do
//function reference
//adding callback function as a reference instead of directly adding it
//here is changeColors function we are referencing it and not adding ()
//immediately
//otherwise it will be used by event listener immediately before the event
//has happened
const element1 = document.querySelector(".element1");
const element2 = document.querySelector(".element2");
const element3 = document.querySelector(".element3");

// here i am directly adding a function in event listener
// which will happen when i click the element
// element1.addEventListener("click", function () {
//   element1.classList.add("red");
// });
// element2.addEventListener("click", function () {
//   element2.classList.add("red");
// });
// element3.addEventListener("click", function () {
//   element3.classList.add("red");
// });

// above code has some duplication which will be refactored by creating a seperate function and passing that
// Here we use events object and try to use target or current target to automatically identify where the function is being used

const changeColors = (event) => {
  event.currentTarget.classList.add("red");
};
element1.addEventListener("click", changeColors);
element2.addEventListener("click", changeColors);
element3.addEventListener("click", changeColors);

//so then on even only that function that is referenced is used

//mouse events
//click-fires after full action occurs
//mousedown-button is pressed
//mouseup-button is released
//mouseenter-moved onto an element
//mouseleave-moved out of an element

// we can add multiple events to an element

element1.addEventListener("mousedown", function () {
  console.log("mousedown");
});
element1.addEventListener("mouseup", function () {
  console.log("mouseup");
});
element1.addEventListener("mouseenter", function () {
  console.log("mouseenter");
});
element1.addEventListener("mouseleave", function () {
  console.log("mouseleave");
});

//Key Events
//keypress-when key is pressed
//keydown-when key is down
//keyup-when key is released
//Event Object argument e,evt
//info about triggered event
//event type
//event.currentTarget
//this keyword
//preventDefault()=prevents default behaviour
//current Target:
const keyup = document.getElementById("keyup");
const keydown = document.getElementById("keydown");
const keypress = document.getElementById("keypress");

keyup.addEventListener("keyup", function (e) {
  console.log(e.currentTarget.value);
});
keydown.addEventListener("keydown", function (e) {
  console.log(e.currentTarget.value);
});
keypress.addEventListener("keypress", function (e) {
  console.log(e.currentTarget.value);
});

//current target always referes to the element to which the event handler
//has been attached to

//target -identifies the element on which the event occured
