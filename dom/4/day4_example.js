const btn = document.querySelector(".btn");

function sayHello(e) {
  e.target.addEventListener("click", function () {
    console.log("Hello");
  });
}
function addHeading() {
  const heading = document.createElement("h1");
  heading.textContent = "this is the element";
  document.body.appendChild(heading);
  heading.addEventListener("click", sayHello);
}

btn.addEventListener("click", addHeading);
