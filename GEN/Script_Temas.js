// Animación de aparición progresiva de tarjetas (efecto "fade-in")

// Espera a que todo el contenido HTML del documento se haya cargado completamente
document.addEventListener("DOMContentLoaded", () => {

  // Selecciona todos los elementos del DOM que tengan la clase "fade-in"
  // (por ejemplo, <div class="card fade-in">...</div>)
  const cards = document.querySelectorAll(".fade-in");

  // Crea un "observador de intersección" (IntersectionObserver)
  // que detecta cuándo un elemento entra o sale del área visible de la ventana
  const observer = new IntersectionObserver(entries => {

    // Recorre todos los elementos que están siendo observados
    entries.forEach(entry => {

      // Si el elemento está visible al menos en un 20% (threshold: 0.2)
      // entonces se le añade la clase "visible"
      // (esto normalmente activa una animación CSS de aparición suave)
      if (entry.isIntersecting)
        entry.target.classList.add("visible");
    });

  }, { threshold: 0.2 });  // threshold indica el porcentaje visible para activar la animación

  // Hace que el observador vigile cada una de las tarjetas seleccionadas
  cards.forEach(card => observer.observe(card));

});
