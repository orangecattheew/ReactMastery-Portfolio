//using selectors inside the element
// traversing the dom

const question_btn = document.querySelectorAll(".question-btn");
// const plus_icon1 = document.querySelector(".plus-icon").parentElement.parentElement.nextElementSibling;

question_btn.forEach((element) => {
  element.addEventListener("click", function (e) {
    console.log(e.currentTarget.parentElement.parentElement);
    console.log(e.currentTarget.parentElement.parentElement.parentElement);
    e.currentTarget.parentElement.parentElement.classList.toggle("show-text");
  });
});
