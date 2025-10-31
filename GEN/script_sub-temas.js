// Este script gestiona la navegación suave entre secciones de la página
// y confirma en consola que el documento ha sido cargado correctamente.

document.addEventListener("DOMContentLoaded", () => {
  // Este evento se ejecuta cuando el contenido HTML ha sido cargado por completo.
  // Garantiza que todos los elementos del DOM estén disponibles antes de manipularlos.

  const links = document.querySelectorAll("nav a");
  // Selecciona todos los enlaces (<a>) que se encuentran dentro del elemento <nav>.
  // querySelectorAll devuelve una lista de nodos (NodeList) con todos los enlaces del menú.

  links.forEach(link => {
    // Se recorre cada enlace del menú de navegación.
    // A cada uno se le añade un "escuchador" que responderá cuando el usuario haga clic.

    link.addEventListener("click", e => {
      e.preventDefault();
      // Previene el comportamiento predeterminado del enlace (como recargar la página).
      // Esto permite manejar el desplazamiento de forma controlada con JavaScript.

      const target = document.querySelector(link.getAttribute("href"));
      // Obtiene el valor del atributo "href" (por ejemplo, "#formulas") del enlace clicado.
      // Luego busca dentro del documento el elemento que coincida con ese identificador.

      target.scrollIntoView({ behavior: "smooth" });
      // Realiza un desplazamiento suave hacia la sección correspondiente.
      // La propiedad "behavior: 'smooth'" crea un efecto visual fluido al moverse por la página.
    });
  });

  console.log("Página de carga y campo eléctrico cargada correctamente.");
  // Muestra un mensaje en la consola del navegador para confirmar que
  // el script se ha ejecutado correctamente y está en funcionamiento.
});
