// const history = document.getElementById("history");
// const vision = document.getElementById("vision");
// const goals = document.getElementById("goals");
const sections = ["history", "vision", "goals"];
const tab_btn = document.querySelectorAll(".tab-btn");

tab_btn.forEach((item) =>
  item.addEventListener("click", function (e) {
    const a = e.currentTarget.dataset.id;
    console.log(a);
    // if (a == "vision") {
    //   vision.classList.add("active");
    //   history.classList.remove("active");
    //   goals.classList.remove("active");
    // } else if (a == "history") {
    //   history.classList.add("active");
    //   vision.classList.remove("active");
    //   goals.classList.remove("active");
    // } else if (a == "goals") {
    //   goals.classList.add("active");
    //   history.classList.remove("active");
    //   vision.classList.remove("active");
    // }
    // Alternate way:
    sections.forEach((section) => {
      if (a === section) {
        document.getElementById(`${section}`).classList.add("active");
      } else {
        document.getElementById(`${section}`).classList.remove("active");
      }
    });
  })
);
