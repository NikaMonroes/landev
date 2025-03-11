// Para hacer que el slider sea infinito de forma automática
window.addEventListener('load', function () {
    const slider = document.querySelector('.slider');
    const sliderImages = document.querySelectorAll('.slider img');

    // Duplicamos el contenido para hacerlo infinito
    slider.innerHTML += slider.innerHTML;

    // Ajustamos el tiempo de animación según el número de imágenes que tengamos
    const speed = 20; // Asegúrate de ajustar la velocidad del movimiento
    const slideWidth = sliderImages[0].width + 20; // Ancho de las imágenes + márgenes

    slider.style.animationDuration = `${speed}s`;  // Duración de la animación
});


let currentIndex = 0;

const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slides .slide').length;

function moveSlide(direction) {
  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalSlides - 1; // Regresa a la última imagen
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0; // Regresa a la primera imagen
  }

  // Desplazar el carrusel
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Cambiar la imagen cada 5 segundos automáticamente
setInterval(() => {
  moveSlide(1);
}, 5000);


let currentIndex = 0;

const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const totalSlides = images.length;

// Función para mover el carrusel
function moveSlide(direction) {
  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalSlides - 2; // Mostrar las últimas dos imágenes cuando se desplace hacia la izquierda
  } else if (currentIndex >= totalSlides - 1) {
    currentIndex = 0; // Regresar al principio cuando llegamos al final
  }

  slides.style.transform = `translateX(-${currentIndex * 50}%)`; // Desplazar el carrusel
}

// Cambiar la imagen cada 3 segundos (opcional)
setInterval(() => {
  moveSlide(1);
}, 10000);