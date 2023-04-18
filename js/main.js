const darkBtn = document.querySelector("#dark");

const menuBar = document.querySelector(".fa-bars");
const closeBar = document.querySelector(".fa-xmark");
const menu = document.querySelector(".ul");
const links = document.querySelectorAll(".ul li a");

const body = document.body;

menuBar.addEventListener("click", () => {
  menu.classList.add("drop");
});

closeBar.addEventListener("click", () => {
  menu.classList.remove("drop");
});

links.forEach((link) => {
  link.addEventListener("click", function () {   /* Note: arrow function is not used here because of the 'this' keyword */
    menu.classList.remove("drop");
    links.forEach((link) => {
      link.classList.remove("active");
      this.classList.add("active");
    });
  });
});

darkBtn.addEventListener("click", () => {
  body.classList.toggle("darkmode");
  if (darkBtn.classList.contains("fa-moon")) {
    darkBtn.classList.replace("fa-moon", "fa-sun");
    darkBtn.style.color = "white";
  } else {
    darkBtn.classList.replace("fa-sun", "fa-moon");
    darkBtn.style.color = "black";
  }
});






