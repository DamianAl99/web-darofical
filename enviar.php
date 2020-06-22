<?php
    $destino = "damiianalmada06@gmail.com";
    $nombre = $_POST["name"];
    $correo = $_POST["correo"];
    $telefono = $_POST["numero"];
    $mensaje = $_POST["nota"];
    $contenido = "Nombre: ".$nombre ."\nCorreo: ".$correo ."\nTelefono: ".$telefono ."\nMensaje: ". $mensaje;
    mail($destino, $contenido) or die("erro al enviar el mensaje");
    
    

?>