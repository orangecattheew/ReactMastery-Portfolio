btn = document.getElementById("btn");
btn.style.backgroundColor = "blue";
btn.style.color = "red";

fruits = document.getElementsByTagName("li");
console.log(fruits);
fruits[1].style.color = "orange";
betterFruits = [...fruits];
betterFruits.forEach(function (item) {
  console.log(item);
  //   betterFruits.style.color = "blue";this doesnot work
});

const specialFruits = document.getElementsByClassName("special");
console.log(specialFruits);
specialFruits[1].style.color = "brown";

document.querySelector(".last").style.color = "pink";
const ol = document.querySelectorAll("ol li");
console.log(ol);
ol.forEach((element) => (element.style.color = "green"));

//
console.log("Travering the dom");
const allChildern = document.querySelector("ol.Navigating_the_DOM");
console.log(allChildern.childNodes);
console.log(allChildern.firstChild);
console.log(allChildern.lastChild);
console.log(allChildern.children);

ParentElement = document.querySelector(".ParentElement");
console.log("This is the parent Element");
console.log(ParentElement.parentElement);
console.log(ParentElement.parentElement.parentElement);
console.log("Parent Element property can be used back to back");

const ele = document.querySelector("li.li123");
ele.nextSibling.nextSibling.style.color = "blue";
console.log(
  (ele.parentElement.lastChild.previousSibling.previousSibling.previousSibling.style.color =
    "yellow")
);
ele.nextElementSibling.nextElementSibling.style.color = "red";
ele.lastElementChild.previousElementSibling.style.color = "black";
