document.addEventListener('DOMContentLoaded', function() {
    const userList = document.getElementById('user-list');
    const deactivateBtn = document.getElementById('deactivate-btn');
    const activateBtn = document.getElementById('activate-btn');
    const createBtn = document.getElementById('create-btn');


    let users = [
        { id: 1, username: 'usuario1', name: 'Nombre Usuario 1', active: true },
        { id: 2, username: 'usuario2', name: 'Nombre Usuario 2', active: false },
        { id: 3, username: 'usuario3', name: 'Nombre Usuario 3', active: true }
    ];


    renderUserList(users);

    
    deactivateBtn.addEventListener('click', function() {
        const userId = parseInt(document.getElementById('user-id').value);
        toggleUserStatus(userId, false);
    });

 
    activateBtn.addEventListener('click', function() {
        const userId = parseInt(document.getElementById('user-id').value);
        toggleUserStatus(userId, true);
    });

    // Evento para crear una nueva cuenta de usuario
    createBtn.addEventListener('click', function() {
        const newUsername = document.getElementById('new-username').value.trim();
        const newName = document.getElementById('new-name').value.trim();
        if (newUsername && newName) {
            const newUser = {
                id: users.length + 1,
                username: newUsername,
                name: newName,
                active: true
            };
            users.push(newUser);
            renderUserList(users);
            // Limpiar los campos de entrada después de crear la nueva cuenta
            document.getElementById('new-username').value = '';
            document.getElementById('new-name').value = '';
        } else {
            alert('Por favor ingrese un nombre de usuario y un nombre válido.');
        }
    });

    // Función para renderizar la lista de usuarios
    function renderUserList(users) {
        // Limpiar la lista de usuarios existente
        userList.innerHTML = '';
        // Mostrar la lista actualizada de usuarios
        users.forEach(user => {
            const userCard = document.createElement('div');
            userCard.classList.add('user-card');
            userCard.innerHTML = `
                <p><strong>ID:</strong> ${user.id}</p>
                <p><strong>Usuario:</strong> ${user.username}</p>
                <p><strong>Nombre:</strong> ${user.name}</p>
                <p><strong>Estado:</strong> ${user.active ? 'Activo' : 'Inactivo'}</p>
            `;
            userList.appendChild(userCard);
        });
    }

    // Función para cambiar el estado de un usuario
    function toggleUserStatus(userId, active) {
        const userIndex = users.findIndex(user => user.id === userId);
        if (userIndex !== -1) {
            users[userIndex].active = active;
            renderUserList(users);
        } else {
            alert('Usuario no encontrado');
        }
    }
});
