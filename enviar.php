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
    /*mail($destino,"contactos", $contenido);
    header("Location: index.html");*/

    // Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    $mail->isSMTP();                                            // Send using SMTP
    //Server settings
    $mail->SMTPDebug = 0;                      // Enable verbose debug output
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'webdamianal@gmail.com';                     // SMTP username
    $mail->Password   = 'asaditoymandioca'; //desde que cuente se enviara todo                          // SMTP password
    $mail->SMTPSecure =  "tls"/*PHPMailer::ENCRYPTION_STARTTLS*/;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('webdamianal@gmail.com', 'Damian');//el correo que ponen para enviar es esto
    $mail->addAddress('webdamianal@gmail.com', 'Portafolio');     //en donde se enviara
    

    // Attachments
    //$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
    //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Proyecto';
    $mail->Body    = $contenido;

    $mail->send();
    echo 'El mensaje se envio correctamente';
    header("Location: index.html");
} catch (Exception $e) {
    echo "Error al enviar el mensaje: {$mail->ErrorInfo}";
}

?>