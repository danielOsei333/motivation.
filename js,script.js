const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

document.getElementById('next').addEventListener('click', () => {
    slides[currentIndex].classList.remove('active'); // Remove the active class from the current slide
    currentIndex = (currentIndex + 1) % slides.length; // Increment the index and wrap around if needed
    slides[currentIndex].classList.add('active'); // Add the active class to the new slide
});

document.getElementById('prev').addEventListener('click', () => {
    slides[currentIndex].classList.remove('active'); // Remove the active class from the current slide
    currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Decrement the index and wrap around if needed
    slides[currentIndex].classList.add('active'); // Add the active class to the new slide
});

// Initial setup to ensure the first slide is visible
slides[currentIndex].classList.add('active');











