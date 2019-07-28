<?php
    switch($_GET["hacer"]){
        case 'leer':
            include("../class/class-Usuario.php");
            echo Usuario::retornarUsuarios();
         break;
         case 'infoUsuario':
            include("../class/class-Usuario.php");
            echo Usuario::retornarInfoUsuarios($_POST['usuario']);
         break;
    }
?>