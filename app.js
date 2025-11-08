window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  const scrollY = window.scrollY;

  if (scrollY > 100) {
    navbar.classList.add("scroll");
  } else {
    navbar.classList.remove("scroll");
  }
});

const navbarmenu = document.querySelector(".menu")
const navbar = document.querySelector("nav")
navbarmenu.addEventListener("click", () => (
  navbar.classList.toggle('menu-toggle')
))
