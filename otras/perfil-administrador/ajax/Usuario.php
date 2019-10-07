<?php
 switch($_GET["accion"]){
  case 'generaraUsuario':
    include("../class/class-Usuario.php");
    echo Usuario::generrarUsuario();
  break;
 };
?>