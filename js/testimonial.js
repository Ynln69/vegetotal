document.addEventListener("DOMContentLoaded", () => {
  const testimonials = document.querySelectorAll(".testimonial-item");
  const dots = document.querySelectorAll(".dot");
  let currentIndex = 0;

  function showTestimonial(index) {
    testimonials.forEach((item, i) => {
      item.classList.remove("active");
      dots[i].classList.remove("active");
      if (i === index) {
        item.classList.add("active");
        dots[i].classList.add("active");
      }
    });
  }

  document.querySelector(".next-btn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
  });

  document.querySelector(".prev-btn").addEventListener("click", () => {
    currentIndex =
      (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentIndex);
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      currentIndex = parseInt(dot.dataset.index);
      showTestimonial(currentIndex);
    });
  });

  showTestimonial(currentIndex);
});
