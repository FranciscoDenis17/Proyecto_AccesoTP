document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el envío del formulario por defecto

        // Redirigir a la página del administrador
        window.location.href = 'Admin_pag.html';
    });
});
