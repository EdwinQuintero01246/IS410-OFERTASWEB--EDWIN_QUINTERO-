<?php
 switch($_GET["accion"]){
  case 'ObtenerEmpresa':
    include("../class/class-Empresa.php");
    echo Empresa::ObtnerEmpresa($_POST);
  break;
  case 'GuardarSeguido':
    include("../class/class-Empresa.php");
    echo Empresa::GuardarSeguido($_POST);
  break;
 };
?>