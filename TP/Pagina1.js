document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('biometric-form');
    const thumbprintInput = document.getElementById('thumbprint');
    const messageDiv = document.getElementById('message');

    // Validar que solo se ingresen números
    thumbprintInput.addEventListener('input', function() {
        this.value = this.value.replace(/[^0-9]/g, '');
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el comportamiento de envío del formulario por defecto

        const thumbprint = thumbprintInput.value;

        if (thumbprint) {
            recordAttendance(thumbprint);
        } else {
            showMessage('Por favor, ingrese una huella válida.', 'error');
        }
    });

    function recordAttendance(thumbprint) {
        // Simulación de un error si la huella es un número específico o si no cumple con la longitud requerida
        if (thumbprint === '123456' || thumbprint.length !== 6) {
            showMessage('Error al registrar la asistencia. Inténtelo de nuevo.', 'error');
        } else {
            showMessage(`Asistencia registrada para la huella: ${thumbprint}`, 'success');
        }
        thumbprintInput.value = ''; // Limpiar el campo de entrada después de registrar la asistencia
    }

    function showMessage(message, type) {
        messageDiv.textContent = message;
        messageDiv.className = type;
        messageDiv.style.display = 'block';

       
        setTimeout(() => {
            messageDiv.style.display = 'none';
        }, 30000);
    }
});
