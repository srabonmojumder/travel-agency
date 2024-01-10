"use strict";

// import Swiper from "swiper/bundle"; // Make sure to use 'swiper/bundle' to import the bundled version
// import "swiper/swiper-bundle.min.css"; // Import Swiper styles

// const sliderContent = document.querySelector(".slider-content");
// const slides = document.querySelectorAll(".slider-content > div");
// const slideWidth = slides[0].offsetWidth;
// let currentIndex = 0;

// function nextSlide() {
//   currentIndex = (currentIndex + 1) % slides.length;
//   updateSliderPosition();
// }

// function prevSlide() {
//   currentIndex = (currentIndex - 1 + slides.length) % slides.length;
//   updateSliderPosition();
// }

// function updateSliderPosition() {
//   const newPosition = -currentIndex * slideWidth;
//   sliderContent.style.transform = `translateX(${newPosition}px)`;
// }

// This is for Swipper Js
var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".nextButton",
    prevEl: ".prevButton",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
  slidesPerview: 2,
});
