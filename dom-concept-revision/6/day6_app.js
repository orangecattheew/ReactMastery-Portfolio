const nodevalue_div = document.querySelector(".nodevalue_div");
nodevalue_div.firstChild.nodeValue = "I set up this node value using nodevalue";

const textContent_div = document.querySelector(".textContent_div");
textContent_div.textContent =
  "I set up this textContent using Javascript textcontent";

const getAttribute_example_div = document.querySelector(
  ".getAttribute_example_div"
);
let a1 = getAttribute_example_div.getAttribute("class");
getAttribute_example_div.textContent = `The class attribute of above div is "${a1}"`;

const setAttribute_example_div = document.querySelector(
  ".setAttribute_example_div"
);
setAttribute_example_div.setAttribute("class", "red");

const className_example_div = document.querySelector(".className_example_div");

className_example_div.className = "blue font-arial text-bold text-italic";
console.log(className_example_div.className);
className_example_div.lastChild.textContent = className_example_div.className;

const classList_example = document.querySelector(".classList_example");
classList_example.classList.add("red", "font-times", "text-italic");

const createElement_example_div = document.querySelector(
  ".createElement_example_div"
);

const createElement_example_element1 = document.createElement("h6");
const createElement_example_element2 = document.createElement("h6");
createElement_example_element1.textContent =
  "I created this h1 element using Javascript";
createElement_example_element2.textContent =
  "I created this h1 element using Javascript";
createElement_example_element1.classList.add("text-italic");
createElement_example_div.appendChild(createElement_example_element1);
createElement_example_div.appendChild(createElement_example_element2);

const createTextNode_example_div = document.querySelector(
  ".createTextNode_example_div"
);

createTextNode_example_div.appendChild(
  document
    .createElement("h6")
    .appendChild(document.createTextNode("Hello World"))
);

const insertBefore_example = document.querySelector(".insertBefore_example");
const insertBefore_example1 = document.querySelector(".insertBefore_example p");

insertBefore_example.insertBefore(
  document
    .createElement("h5")
    .appendChild(document.createTextNode("insert Before element")),
  insertBefore_example1
);

const replaceChild_example_div = document.querySelector(
  ".replaceChild_example_div"
);

replaceChild_example_div.replaceChild(
  document
    .createElement("h5")
    .appendChild(document.createTextNode("replace child element")),
  replaceChild_example_div.firstElementChild
);

const innerHTML_example = document.querySelector(".innerHTML_example");
innerHTML_example.innerHTML = `<ul>
    <li>Apple</li>
    <li>Banana</li>
    <li>Orange</li>
    <li>Grapes</li>
    <li>Strawberry</li>
    <li>Mango</li>
    <li>Watermelon</li>
    <li>Pineapple</li>
    <li>Kiwi</li>
    <li>Peach</li>
</ul>`;

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

const input1 = document.querySelector(".keypress");
const input2 = document.querySelector(".keydown");
const input3 = document.querySelector(".keyup");

input1.addEventListener("keypress", function (e) {
  //   console.log(e.currentTarget.value);
  console.log("keypress");
});
input2.addEventListener("keydown", function (e) {
  //   console.log(e.currentTarget.value);
  console.log("keydown");
});
input3.addEventListener("keyup", function (e) {
  //   console.log(e.currentTarget.value);
});
