// setup date
const date = (document.getElementById(
  "date"
).innerHTML = new Date().getFullYear());
// setup nav
const navBtn = document.getElementById("nav-btn");
const navbar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");
// show nav
// Target the nav-btn, and when clicked, add the showNav class
navBtn.addEventListener("click", () => {
  navbar.classList.add("showNav");
});
// close nav
// Target the nav-btn, and when clicked, remove the showNav class
navClose.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});
