// const sidebar_toggle = document.querySelector(".sidebar-toggle");
// const sidebar = document.querySelector(".sidebar");
// const closeBtn = document.querySelector(".close-btn");
// sidebar_toggle.addEventListener("click", function () {
//   console.log("click");
//   sidebar.classList.toggle("show-sidebar");
// });

// closeBtn.addEventListener("click", function () {
//   sidebar.classList.remove("show-sidebar");
// });

const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", function () {
  // if (sidebar.classList.contains("show-sidebar")) {
  //   sidebar.classList.remove("show-sidebar");
  // } else {
  //   sidebar.classList.add("show-sidebar");
  // }
  sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
