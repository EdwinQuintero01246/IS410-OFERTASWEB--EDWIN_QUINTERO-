<?php
    include("../class/classUsuario.php");
    switch($_GET["accion"]){
        case 'usuario':
            echo Usuario::infoUsuario($_POST['usuario'],$_POST['Contrasenia']);
         break;
         case 'ObtenerLlaveEmpresa':
            echo Usuario::ObtenerLlave($_POST['usuario'],$_POST['Contrasenia']);
         break;
         case 'ObtenerLlaveUsuario':
            echo Usuario::ObtenerLlaveUsuario($_POST['usuario'],$_POST['Contrasenia']);
         break;
    }
?>