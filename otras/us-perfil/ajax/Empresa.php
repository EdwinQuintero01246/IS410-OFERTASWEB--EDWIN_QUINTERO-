<?php
 switch($_GET["accion"]){
  case 'EmpresaSeguidas':
    include("../class/class-Empresa.php");
    echo Empresa::EmpresaSeguidas($_POST);
  break;
 };
?>