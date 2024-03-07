const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const getRandomHexColor = () => {
  // Generate a random number and convert it to a hexadecimal string
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  // Ensure the hexadecimal string is always 6 digits by adding leading zeros if needed
  return "#" + "0".repeat(6 - randomColor.length) + randomColor;
};

const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const colorFlipper = () => {
  const randomColor = getRandomHexColor();
  console.log(randomColor);
  document.body.style.backgroundColor = randomColor;
  color.textContent = randomColor.toUpperCase();
  color.style.color = randomColor;
};
btn.addEventListener("click", colorFlipper);
