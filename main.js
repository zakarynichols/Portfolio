// Simple Mobile Navbar.
const navLinks = document.querySelector(".navNarrow");
const narrowLinks = document.querySelector(".narrowLinks");

navLinks.addEventListener("click", toggle);

function toggle() {
  narrowLinks.classList.toggle("hidden");
}

// Scroll Reveal Configuration.
ScrollReveal({
  duration: 1000,
})

const myOptions = {
  distance: '20px',
  origin: 'left',
  interval: 120,
};

const fadeOptions = {
  interval: 480
}

ScrollReveal().reveal('.reveal', myOptions)
ScrollReveal().reveal('.fade-reveal', fadeOptions)