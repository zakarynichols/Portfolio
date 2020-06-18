// Simple Mobile Navbar.
const navLinks = document.querySelector(".navNarrow");
const narrowLinks = document.querySelector(".narrowLinks");

navLinks.addEventListener("click", toggle);

function toggle() {
  narrowLinks.classList.toggle("hidden");
}