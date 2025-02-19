let index = 0;
const slides = document.querySelectorAll(".review-card");
const dots = document.querySelectorAll(".dot");

function showSlide(n) {
  slides.forEach((slide, i) => {
    slide.style.display = i === n ? "block" : "none";
    dots[i].classList.toggle("active", i === n);
  });
}

document.querySelector(".prev-btn").addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
});

document.querySelector(".next-btn").addEventListener("click", () => {
  index = (index + 1) % slides.length;
  showSlide(index);
});

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    index = i;
    showSlide(index);
  });
});

showSlide(index);
