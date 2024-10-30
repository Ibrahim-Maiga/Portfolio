let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function showSlide(index) {
  const carouselInner = document.querySelector('.carousel-inner');
  carouselInner.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  if (currentIndex < totalSlides - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // Loop back to the start
  }
  showSlide(currentIndex);
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalSlides - 1; // Loop to the end
  }
  showSlide(currentIndex);
}
