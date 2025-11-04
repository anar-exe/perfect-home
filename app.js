window.addEventListener("scroll", function() {
  const navbar = document.querySelector(".navbar"); // navbar elementi
  const scrollY = window.scrollY; // hal-hazırkı scroll miqdarı (piksel ilə)

  if (scrollY > 100) { // 100px aşağı scroll ediləndə
    navbar.classList.add("scroll");
  } else {
    navbar.classList.remove("scroll");
  }
});
