const slides = document.querySelectorAll('.slide');

for (const slide of slides) {
  
  slide.addEventListener('click', () => {
    classActiveRemove();
    slide.classList.add('active');
  });
}

function classActiveRemove() {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });
}