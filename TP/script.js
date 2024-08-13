document.addEventListener('DOMContentLoaded', function() {
    const userBtn = document.getElementById('user-btn');
    const adminBtn = document.getElementById('admin-btn');
    const registerBtn = document.getElementById('register-btn');

    userBtn.addEventListener('click', function() {
        window.location.href = 'login_user.html';
    });

    adminBtn.addEventListener('click', function() {
        window.location.href = 'login_admin.html';
    });

    registerBtn.addEventListener('click', function() {
        window.location.href = 'Pagina1.html';
    });
});
