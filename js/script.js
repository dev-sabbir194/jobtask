// JavaScript code to toggle the dropdown
const dropdownButton = document.getElementById("dropdown-button");
const dropdownMenu = document.getElementById("dropdown-menu");
const arrowIcon = document.getElementById("arrow-icon");

dropdownButton.addEventListener("click", () => {
  dropdownMenu.classList.toggle("hidden");
  arrowIcon.classList.toggle("rotate-180"); 
});


// Initialize Swiper
let swiper = new Swiper(".slide-container", {
  slidesPerView: 5,
  spaceBetween: 40,
  sliderPerGroup: 5,
  loop: true,
  centerSlide: true,
  fade: true,
  grabCursor: true,
  pagination: {
    clickable: true,
  },
});

//  event listeners to custom buttons
document
  .getElementById("custom-next-btn")
  .addEventListener("click", function () {
    swiper.slideNext();
  });

document
  .getElementById("custom-prev-btn")
  .addEventListener("click", function () {
    swiper.slidePrev();
  });

// swiper two
let swiperTwo = new Swiper(".slide-container-two", {
  slidesPerView: 5,
  spaceBetween: 50,
  sliderPerGroup: 5,
  loop: true,
  centerSlide: true,
  fade: true,
  grabCursor: true,
  pagination: {
    clickable: true,
  },
});

//  event listeners to custom buttons
document
  .getElementById("custom-next-btn-two")
  .addEventListener("click", function () {
    swiperTwo.slideNext();
  });

document
  .getElementById("custom-prev-btn-two")
  .addEventListener("click", function () {
    swiperTwo.slidePrev();
  });

  // fevorite selection

function toggleHeart(icon) {
  icon.classList.toggle("active-heart");
  const card = icon.closest(".icon");
  card.classList.toggle("active-icon");
}



