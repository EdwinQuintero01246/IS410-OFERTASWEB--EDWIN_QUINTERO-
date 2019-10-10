<?php
 switch($_GET["accion"]){
  case 'VerInfoEmpresa':
    include("../class/Class-Empresa.php");
    echo Empresa::VerInfoEmpresa($_POST);
  break;
  case 'CambiarNombre':
    include("../class/Class-Empresa.php");
    //echo Empresa::CambiarNombre($_POST['NombreActual'],$_POST['NombreEmpresa'],$_POST['LLave']);
    echo Empresa::CambiarNombre($_POST);
  break;
 };
?>