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


const homeScroll = document.querySelector('.homescroll');
const slides = homeScroll.querySelectorAll('img');
const prevButton = homeScroll.querySelector('.prev');
const nextButton = homeScroll.querySelector('.next');

let current = 0;

function showSlide(index) {
  slides.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
}

// ilk şəkli göstər
showSlide(current);

nextButton.addEventListener("click", () => {
  current = (current + 1) % slides.length;
  showSlide(current);
});

prevButton.addEventListener("click", () => {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
});
nextButton.addEventListener("click", () => {
  nextImage.classList.toggle('active');
});

prevButton.addEventListener("click", () => {
  nextImage.classList.toggle('active');
});
