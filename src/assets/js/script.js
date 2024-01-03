"use strict";

const sliderContent = document.querySelector(".slider-content");
const slides = document.querySelectorAll(".slider-content > div");
const slideWidth = slides[0].offsetWidth;
let currentIndex = 0;

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSliderPosition();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSliderPosition();
}

function updateSliderPosition() {
  const newPosition = -currentIndex * slideWidth;
  sliderContent.style.transform = `translateX(${newPosition}px)`;
}
