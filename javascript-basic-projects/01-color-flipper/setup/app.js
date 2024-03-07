const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

const colorFlipper = () => {
  const randomNumber = Math.round(Math.random() * 3);
  document.body.style.backgroundColor = colors[randomNumber];
  console.log(randomNumber);
  color.textContent = colors[randomNumber];
  color.style.color = randomColor;
};

btn.addEventListener("click", colorFlipper);
