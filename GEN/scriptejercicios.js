// Animación de aparición progresiva de tarjetas
document.addEventListener("DOMContentLoaded", () => {
const cards = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if (entry.isIntersecting) entry.target.classList.add("visible");
});
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));
});
