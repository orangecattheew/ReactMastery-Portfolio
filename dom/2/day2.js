// nodeValue
// textContent
const item = document.querySelector(".special");
const value = item.firstChild.nodeValue;
const easyValue = item.textContent;

console.log("getting values using nodevalue" + value);
console.log("getting values using textcontent" + easyValue);

// getAttribute()
// setAttribute()
const first = document.querySelector(".first");
const classValue = first.getAttribute("class");
const links = document.querySelectorAll(".first");
console.log(links);
console.log(classValue);

const last = document.querySelectorAll(".last");

last.forEach(function (item) {
  item.setAttribute("class", "first");
  item.textContent = "I also have class of first";
});

// className
// classList

const firstElement = document.getElementById("first");
const secondElement = document.getElementById("second");
const thirdElement = document.getElementById("third");
const fourthElement = document.getElementById("fourth");

console.log("classNAme and classList");
console.log(firstElement.className);
firstElement.className = "color text";
console.log(firstElement.className);
console.log(firstElement.classList);
secondElement.classList.add("color", "text");
secondElement.classList.remove("color");

// createElement('element')
// createTextNode('text content')
// element.appendChild(childElement)
const div2 = document.createElement("div");
const div2Text = document.createTextNode("div2 text data");
div2.appendChild(div2Text);
div2.classList.add("color", "text");
document.body.appendChild(div2);

const div3 = document.createElement("div");
div3.appendChild(document.createTextNode("div3"));
div3.classList.add("color");
document.body.appendChild(div3);

const insertBefore_div = document.querySelector(".insertBefore ul");
const insertBefore_list = document.querySelector(".insertBefore_first");
insertBefore_div.insertBefore(
  document
    .createElement("div")
    .appendChild(document.createTextNode("insert before text")),
  insertBefore_list
);

const replaceChildOld = document.querySelector(".replaceChildOld");

const newChild = document.createElement("h6");
const newChild_text = document.createTextNode("new child");
newChild.appendChild(newChild_text);
document.body.replaceChild(newChild, replaceChildOld);

const prependELement = document.createElement("p");
prependELement.innerText = "Prepend Element Text Value";

const elementToprependELement = document.querySelector(".prepend");
elementToprependELement.prepend(prependELement);

const remove_remove_child_practice = document.querySelector(
  ".remove_remove_child_practice"
);

// remove_remove_child_practice.remove();
const remove_child_practice = remove_remove_child_practice.querySelector("ul");
console.log(remove_child_practice);

remove_remove_child_practice.removeChild(remove_child_practice);

// innerHTML
//textContent
