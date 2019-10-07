<?php
 switch($_GET["accion"]){
  case 'generarEmpresa':
    include("../class/class-Empresa.php");
    echo Empresa::generarEmpresa();
  break;
 };
?>