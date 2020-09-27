<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'mailer/Exception.php';
    require 'mailer/PHPMailer.php';
    require 'mailer/SMTP.php';

    $destino = "webdamianal@gmail.com";
    $nombre = $_POST["name"];
    $correo = $_POST["correo"];
    $telefono = $_POST["numero"];
    $mensaje = $_POST["nota"];
    $contenido = "Nombre: " . $nombre . "\nCorreo: " . $correo . "\nTelefono: " . $telefono . "\nMensaje: " . $mensaje;
    mail($destino,"contactos", $contenido);
    header("Location: index.html");
?>