const images = document.querySelectorAll('.imgbox img');
const prev = document.querySelectorAll('.prev');
const next = document.querySelectorAll('.next');
let current = 0;

function showImage(index) {
  images.forEach(img => img.classList.remove('active'));
  images[index].classList.add('active');
}

prev.addEventListener('click', () => {
  current = (current - 1 + images.length) % images.length;
  showImage(current);
});

next.addEventListener('click', () => {
  current = (current + 1) % images.length;
  showImage(current);
});
