<?php
 switch($_GET["accion"]){
  case 'GuardarProducto':
    include("../class/Class-Producto.php");
    echo Producto::GuardarProducto($_POST);
  break;
  case 'VerProducto':
    include("../class/Class-Producto.php");
    echo Producto::VerProducto();
  break;
 };
?>