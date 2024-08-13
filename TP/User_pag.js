document.addEventListener('DOMContentLoaded', function() {
    const arrivalTime = document.getElementById('arrival-time');
    const lateArrivals = document.getElementById('late-arrivals');
    const totalLateArrivals = document.getElementById('total-late-arrivals');

   
    const userInfo = {
        arrivalTime: '09:00 AM',
        lateArrivals: 2,
        totalLateArrivals: 5
    };

    // Mostrar la información del usuario
    displayUserInfo(userInfo);

    // Función para mostrar la información del usuario en la interfaz
    function displayUserInfo(userInfo) {
        arrivalTime.textContent = userInfo.arrivalTime;
        lateArrivals.textContent = userInfo.lateArrivals;
        totalLateArrivals.textContent = userInfo.totalLateArrivals;
    }
});
