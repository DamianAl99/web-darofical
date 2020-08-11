<?php
   /* use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'mailer/Exception.php';
    require 'mailer/PHPMailer.php';
    require 'mailer/SMTP.php';*/

    $destino = "damiianalmada06@gmail.com";
    $nombre = $_POST["name"];
    $correo = $_POST["correo"];
    $telefono = $_POST["numero"];
    $mensaje = $_POST["nota"];
    $contenido = "Nombre: ".$nombre ."<br>Correo: ".$correo ."<br>Telefono: ".$telefono ."<br>Mensaje: ". $mensaje;

 /*   // Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = 0;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'webdamianal@gmail.com';                     // SMTP username
    $mail->Password   = 'asaditoymandioca'; //desde que cuente se enviara todo                          // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom($_POST["correo"]);//el correo que ponen para enviar es esto
    $mail->addAddress('webdamianal@gmail.com', 'Damian');     //en donde se enviara
    

    // Attachments
    //$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
    //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Poryecto';
    $mail->Body    = $contenido;

    $mail->send();
    echo 'El mensaje se envio correctamente';
    header("Location: index.html");
} catch (Exception $e) {
    echo "Error al enviar el mensaje: {$mail->ErrorInfo}";
}*/

    $destino = "damiianalmada06@gmail.com";
    $nombre = $_POST["name"];
    $correo = $_POST["correo"];
    $telefono = $_POST["numero"];
    $mensaje = $_POST["nota"];
    $contenido = "Nombre: ".$nombre ."\nCorreo: ".$correo ."\nTelefono: ".$telefono ."\nMensaje: ". $mensaje;
    mail($destino,"contactos", $contenido) or die("erro al enviar el mensaje");
    
    

?>