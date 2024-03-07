// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const window_width = window.innerWidth;
const links = document.querySelector(".links");
console.log(window_width);

const nav_toggle = document.querySelector(".nav-toggle");
nav_toggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});
