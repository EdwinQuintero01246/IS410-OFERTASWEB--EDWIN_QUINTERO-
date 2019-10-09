<?php
 switch($_GET["accion"]){
  case 'VerCompras':
    include("../class/Class-Compras.php");
    echo Compras::VerCompras($_POST['Correo']);
  break;
 };
?>