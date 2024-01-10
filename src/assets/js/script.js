"use strict";

// This is for Close Button for OffCanvus
// document.getElementById("closeButton").addEventListener("click", function () {
//   document.getElementsByClassName(".header-sidebar").style.display = "none";
//   console.log("Clicked On Close Button");
// });

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
