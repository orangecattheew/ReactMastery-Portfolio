// Event Propogation-BUbbling-Capturing
// allows select dynamic elements
// event propogation -order the events are fired
// event bubbling=clicked element first then bubbles up--default
// event capturing -fires at the root and fires until reaches target

const outer_div = document.querySelector(".outer");
const link_1 = document.querySelector("div.outer ul");

function bubblingTest(e) {
  console.log("currentTarget", e.currentTarget);
  console.log("target", e.target);
}
link_1.addEventListener("click", bubblingTest);
outer_div.addEventListener("click", bubblingTest);
document.addEventListener("click", bubblingTest);
window.addEventListener("click", bubblingTest);
// link_1.addEventListener("click", bubblingTest, { capture: true });
// outer_div.addEventListener("click", bubblingTest, { capture: true });
// document.addEventListener("click", bubblingTest, { capture: true });
// window.addEventListener("click", bubblingTest, { capture: true });
