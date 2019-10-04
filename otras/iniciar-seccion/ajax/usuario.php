<?php
    include("../class/classUsuario.php");
    switch($_GET["accion"]){
        case 'usuario':
            echo Usuario::infoUsuario($_POST['usuario'],$_POST['Contrasenia']);
         break;
    }
?>