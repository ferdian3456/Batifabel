document.getElementById("menu-button").addEventListener("click", function () {
  document.getElementById("mobile-menu").classList.toggle("hidden");
});

document.getElementById("close-menu").addEventListener("click", function () {
  document.getElementById("mobile-menu").classList.add("hidden");
});

function toggleAccordion(id) {
  const content = document.getElementById(`content-${id}`);
  content.classList.toggle("active");
}

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
  if (slides.length > 0) {
    slides[slideIndex].classList.add("displaySlide");
    slides[slideIndex].classList.remove("hidden");
    intervalId = setInterval(nextSlide, 5000);
  }
}

function showSlide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex = index;
  }

  slides.forEach((slide) => {
    slide.classList.remove("displaySlide");
    slide.classList.add("hidden");
  });
  slides[slideIndex].classList.add("displaySlide");
  slides[slideIndex].classList.remove("hidden");
}

function prevSlide() {
  clearInterval(intervalId);
  slideIndex--;
  showSlide(slideIndex);
  intervalId = setInterval(nextSlide, 5000); // Restart the interval
}

function nextSlide() {
  clearInterval(intervalId);
  slideIndex++;
  showSlide(slideIndex);
  intervalId = setInterval(nextSlide, 5000); // Restart the interval
}

function goToSlide(index) {
  clearInterval(intervalId);
  showSlide(index);
  intervalId = setInterval(nextSlide, 5000); // Restart the interval
}

// const slides = document.querySelectorAll("#slides img");

// let slideIndex = 0;
// let intervalId = null;

// document.addEventListener("DOMContentLoaded", initializeSlider);
// document.getElementById("prev").addEventListener("click", prevSlide);
// document.getElementById("next").addEventListener("click", nextSlide);

// function initializeSlider() {
//   if (slides.length > 0) {
//     slides[slideIndex].classList.add("displaySlide");
//     slides[slideIndex].classList.remove("hiddenSlide");
//     intervalId = setInterval(nextSlide, 5000);
//   }
// }

// function showSlide(index) {
//   if (index >= slides.length) {
//     slideIndex = 0;
//   } else if (index < 0) {
//     slideIndex = slides.length - 1;
//   } else {
//     slideIndex = index;
//   }

//   slides.forEach((slide, i) => {
//     slide.classList.remove("displaySlide");
//     slide.classList.add("hiddenSlide");
//   });

//   slides[slideIndex].classList.add("displaySlide");
//   slides[slideIndex].classList.remove("hiddenSlide");
// }

// function prevSlide() {
//   clearInterval(intervalId);
//   slideIndex--;
//   showSlide(slideIndex);
//   intervalId = setInterval(nextSlide, 5000); // Reset interval to maintain auto-sliding
// }

// function nextSlide() {
//   clearInterval(intervalId);
//   slideIndex++;
//   showSlide(slideIndex);
//   intervalId = setInterval(nextSlide, 5000); // Reset interval to maintain auto-sliding
// }
