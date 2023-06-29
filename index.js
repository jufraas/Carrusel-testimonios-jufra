const slider = document.querySelector('.slider-container');
const sliderItems = document.querySelectorAll('.slider-test');
let currentIndex = 0;
const slideWidth = sliderItems[0].clientWidth;
const interval = 1500;

const slideToNext = () => {
  currentIndex = (currentIndex + 1) % sliderItems.length;
  slider.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
  slider.style.transition = 'transform 1s';
};

setInterval(slideToNext, interval);