// Simple Mobile Navbar.
const navLinks = document.querySelector(".navNarrow");
const narrowLinks = document.querySelector(".narrowLinks");

const toggle = () => {
  narrowLinks.classList.toggle("hidden");
}

navLinks.addEventListener("click", toggle);

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