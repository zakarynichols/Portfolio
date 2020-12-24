// Simple Mobile Navbar.
const navLinks = document.querySelector(".navNarrow");
const narrowLinks = document.querySelector(".narrowLinks");

navLinks.addEventListener("click", toggle);

const toggle = () => {
  narrowLinks.classList.toggle("hidden");
}

// Scroll Reveal Configuration.
ScrollReveal({
  duration: 1000,
})

const options = {
  distance: '20px',
  origin: 'left',
  interval: 120,
};

const fadeOptions = {
  interval: 480
}

ScrollReveal().reveal('.reveal', options)
ScrollReveal().reveal('.fade-reveal', fadeOptions)