const DECREASE = document.querySelector(".DECREASE");
const INCREASE = document.querySelector(".INCREASE");
const RESET = document.querySelector(".RESET");
const value = document.getElementById("value");
RESET.addEventListener("click", function () {
  value.textContent = 0;
});
INCREASE.addEventListener("click", function () {
  value.textContent = parseInt(value.textContent) + 1;
  value.style.color = "brown";
});

DECREASE.addEventListener("click", function () {
  value.textContent = parseInt(value.textContent) - 1;
  value.style.color = "brown";
});
