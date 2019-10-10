<?php
 switch($_GET["accion"]){
  case 'VerInfoEmpresa':
    include("../class/Class-Usuario.php");
    echo Usuario::VerInfoEmpresa($_POST);
  break;
  case 'CambiarNombre':
    include("../class/Class-Usuario.php");
    //echo Usuario::CambiarNombre($_POST['NombreActual'],$_POST['NombreEmpresa'],$_POST['LLave']);
    echo Usuario::CambiarNombre($_POST);
  break;
 };
?>