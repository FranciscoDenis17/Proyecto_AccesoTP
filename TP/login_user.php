<?php
include('config.php'); // Incluir la conexión a la base de datos

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $dni = $_POST['dni'];
    $password = $_POST['password'];

    // Preparar la consulta para evitar inyecciones SQL
    $stmt = $conexion->prepare("SELECT password, role FROM UserAuth WHERE DNI = ?");
    $stmt->bind_param("i", $dni);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        $stmt->bind_result($hashed_password, $role);
        $stmt->fetch();

        // Verificar la contraseña
        if (password_verify($password, $hashed_password)) {
            session_start();
            $_SESSION['dni'] = $dni;
            $_SESSION['role'] = $role;

            // Redirigir a la página correspondiente según el rol
            if ($role == 'admin') {
                header("Location: Admin_pag.html");
            } else {
                header("Location: user_pag.html");
            }
        } else {
            echo "Contraseña incorrecta.";
        }
    } else {
        echo "Usuario no encontrado.";
    }
    $stmt->close();
}
$conexion->close();
?>
