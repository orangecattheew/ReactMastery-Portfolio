// preloader
const preloader = document.querySelector(".preloader");

window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});

// Get the button
const scrollButton = document.getElementById("scrollBtn");

// When the user scrolls down 25% of the page height, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > document.body.scrollHeight * 0.25 ||
    document.documentElement.scrollTop >
      document.documentElement.scrollHeight * 0.25
  ) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
scrollButton.addEventListener("click", function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});
//

// Selecting elements by class name and creating document objects

const nodevalue_div = document.querySelector(".nodevalue_div");
nodevalue_div.firstChild.nodeValue = "Hello World";
// nodevalue_div.firstChild.nodeValue = "I set up this node value using nodevalue";
const textContent_div = document.querySelector(".textContent_div");
textContent_div.textContent = "Hello World using text content";
const getAttribute_example_div = document.querySelector(
  ".getAttribute_example_div"
);
console.log(
  `This is the value we get from get Attribute: ${getAttribute_example_div.getAttribute(
    "class"
  )}`
);
const setAttribute_example_div = document.querySelector(
  ".setAttribute_example_div"
);
setAttribute_example_div.textContent = "setAttribute_example_div";
setAttribute_example_div.setAttribute("class", "red text-italic font-times");
const className_example_div = document.querySelector(".className_example_div");
// another way we can get classname and set className using the className property
console.log(setAttribute_example_div.className);
className_example_div.className = "red";
const classList_example = document.querySelector(".classList_example");
// we can add or remove multiple classes using the classList property
console.log(classList_example);
classList_example.firstElementChild.classList.add("red", "font-arial");
const createElement_example_div = document.querySelector(
  ".createElement_example_div"
);
const a = document.createElement("h6");
a.textContent = "create element";
console.log(a);
a.classList.add("blue", "font-italic");
createElement_example_div.appendChild(a);
const createTextNode_example_div = document.querySelector(
  ".createTextNode_example_div"
);
const insertBefore_example = document.querySelector(".insertBefore_example");
const b = document.createElement("h6");
b.textContent = "create element insertBefore_example";
console.log(b);
// here b is element to insert before and we can insert it before the specified element
// so remember the format is element.insertBefore(element_to_insert_before,element)
document.body.insertBefore(b, insertBefore_example);
const replaceChild_example_div = document.querySelector(
  ".replaceChild_example_div"
);
const element_to_replace = replaceChild_example_div.firstElementChild;
console.log(element_to_replace);
replaceChild_example_div.replaceChild(
  document
    .createElement("h6")
    .appendChild(
      document.createTextNode("replace child element".toUpperCase())
    ),
  element_to_replace
);
// using this we can replace any element
const remove_element = document.querySelector("#remove_element");
remove_element.remove();
const innerHTML_example = document.querySelector(".innerHTML_example");
innerHTML_example.innerHTML = ` <li>Apple</li>
    <li>Banana</li>
    <li>Orange</li>
    <li>Grapes</li>
    <li>Strawberry</li>
    <li>Mango</li>
    <li>Watermelon</li>
    <li>Pineapple</li>
    <li>Kiwi</li>
    <li>Peach</li>`;
const keypress = document.querySelector(".keypress");
const keydown = document.querySelector(".keydown");
const keyup = document.querySelector(".keyup");

keypress.addEventListener("keypress", function (e) {
  // console.log("keypress");
  console.log(e.currentTarget.value);
});
keydown.addEventListener("keydown", function (e) {
  // console.log("keydown");
  console.log(e.currentTarget.value);
});
keyup.addEventListener("keyup", function (e) {
  // console.log("keyup");
  console.log(e.currentTarget.value);
});

const btn_mouse_events = document.querySelector(".btn_mouse_events");
btn_mouse_events.addEventListener("click", function () {
  console.log("Button element clicked");
});

btn_mouse_events.addEventListener("mousedown", function () {
  console.log("mousedown");
});
btn_mouse_events.addEventListener("mouseup", function () {
  console.log("mouseup");
});
btn_mouse_events.addEventListener("mouseenter", function () {
  console.log("mouseenter");
});
btn_mouse_events.addEventListener("mouseleave", function () {
  console.log("mouseleave");
});
