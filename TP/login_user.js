document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('login-form');

    form.addEventListener('submit', function(event) {
        const dni = document.getElementById('dni').value;
        const password = document.getElementById('password').value;

        if (!dni || !password) {
            event.preventDefault(); // Prevenir el envío del formulario
            alert('Por favor, complete todos los campos.');
        }
    });
});
