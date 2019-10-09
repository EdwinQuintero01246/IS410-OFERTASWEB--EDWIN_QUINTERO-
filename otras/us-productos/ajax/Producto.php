<?php
 switch($_GET["accion"]){
  case 'VerProducto':
    include("../class/Class-Producto.php");
    echo Producto::VerProducto();
  break;
  case 'GuardarCompra':
    include("../class/Class-Producto.php");
    echo Producto::GuardarCompra($_POST);
  break;
  case 'GuardarVenta':
    include("../class/Class-Producto.php");
    echo Producto::GuardarVenta($_POST);
  break;
 };
?>