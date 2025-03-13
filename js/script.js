document.addEventListener("DOMContentLoaded", function () {
  // Slider 1: Banner de servicios
  const slidesLande = document.querySelector('.slides-lande');
  if (slidesLande) {
    let currentIndexLande = 0;
    const totalSlidesLande = document.querySelectorAll('.slides-lande .slide-lande').length;

    function moveSlideLande(direction) {
      currentIndexLande += direction;

      if (currentIndexLande < 0) {
        currentIndexLande = totalSlidesLande - 1;
      } else if (currentIndexLande >= totalSlidesLande) {
        currentIndexLande = 0;
      }

      slidesLande.style.transform = `translateX(-${currentIndexLande * 100}%)`;
    }

    setInterval(() => {
      moveSlideLande(1);
    }, 5000);

    const leftArrow = document.querySelector(".arrow-left");
    const rightArrow = document.querySelector(".arrow-right");

    if (leftArrow && rightArrow) {
      leftArrow.addEventListener("click", () => moveSlideLande(-1));
      rightArrow.addEventListener("click", () => moveSlideLande(1));
    }
  }

  // Slider 2: Carrusel de imágenes infinito
  const slider = document.querySelector('.slider');
  if (slider) {
    const sliderImages = document.querySelectorAll('.slider img');
    slider.innerHTML += slider.innerHTML; // Duplica el contenido

    const speed = 20;
    const slideWidth = sliderImages[0].width + 20;
    slider.style.animationDuration = `${speed}s`;
  }

  // Slider 3: Carrusel general con botones
  let currentIndex = 0;
  const slides = document.querySelector('.slides');
  const images = document.querySelectorAll('.slides img');
  const totalSlides = images.length;

  if (slides) {
    function moveSlide(direction) {
      currentIndex += direction;

      if (currentIndex < 0) {
        currentIndex = totalSlides - 2;
      } else if (currentIndex >= totalSlides - 1) {
        currentIndex = 0;
      }

      slides.style.transform = `translateX(-${currentIndex * 50}%)`;
    }

    setInterval(() => {
      moveSlide(1);
    }, 10000);
  }
});
