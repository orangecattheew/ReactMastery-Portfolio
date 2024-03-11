const sidebar_toggle = document.querySelector(".sidebar-toggle");
const close_btn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");
sidebar_toggle.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar");
});
close_btn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
