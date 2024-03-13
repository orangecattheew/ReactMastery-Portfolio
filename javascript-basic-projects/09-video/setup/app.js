// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const preloader__item = document.querySelector(".preloader");
window.addEventListener("load", function () {
  preloader__item.classList.add("hide-preloader");
});

const switch_btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");
switch_btn.addEventListener("click", function () {
  if (!switch_btn.classList.contains("slide")) {
    switch_btn.classList.add("slide");
    video.pause();
  } else {
    switch_btn.classList.remove("slide");
    video.play();
  }
});
