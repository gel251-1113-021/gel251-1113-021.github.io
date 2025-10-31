// Función para abrir el modal con la información del curso
function openModal(courseKey) {
    const course = courseData[courseKey];
    let modalContent = `<h2>${course.title}</h2><p>${course.description}</p>`;
    course.modules.forEach(module => {
        modalContent += `<h3>${module.title}</h3><p>${module.content}</p>`;
        if (module.equations) {
            modalContent += `<p><strong>Ecuaciones clave:</strong></p><ul>`;
            module.equations.forEach(eq => {
                modalContent += `<li>${eq}</li>`;
            });
            modalContent += `</ul>`;
        }
    });
    document.getElementById('modalContent').innerHTML = modalContent;
    document.getElementById('courseModal').style.display = 'block';
}

// Función para cerrar el modal
function closeModal() {
    document.getElementById('courseModal').style.display = 'none';
}

// Cerrar el modal si se hace clic fuera del contenido
window.onclick = function(event) {
    const modal = document.getElementById('courseModal');
    if (event.target == modal) {
        closeModal();
    }
}

// Agregar event listeners a los botones de los cursos
document.querySelectorAll('.course-button').forEach(button => {
    button.addEventListener('click', () => {
        const courseKey = button.getAttribute('data-course');
        openModal(courseKey);
    });
});

// Agregar event listener al botón de cerrar
document.getElementById('closeModal').addEventListener('click', closeModal);
