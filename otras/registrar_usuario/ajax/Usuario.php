<?php
    switch($_GET["hacer"]){
        case 'GuardarUsuario':
            include("../class/class-Usuario.php");
            echo Usuario::GuardarUsuario($_POST);
         break;
         case 'VerificarUsuario':
            include("../class/class-Usuario.php");
            echo Usuario::verificarUsuarioEmpresa($_POST['NombreEmpresa'],$_POST['Email']);
         break;
         case 'CrearAchivos':
            include("../class/class-Usuario.php");
            echo Usuario::CrearArchivos($_POST['NombreUsuario'],$_POST['Url']);
         break;
         
    }
?>