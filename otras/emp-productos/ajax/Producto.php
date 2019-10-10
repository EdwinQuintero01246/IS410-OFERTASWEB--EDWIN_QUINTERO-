<?php
 switch($_GET["accion"]){
  case 'GuardarProducto':
    include("../class/Class-Producto.php");
    echo Producto::GuardarProducto($_POST);
  break;
  case 'VerProducto':
    include("../class/Class-Producto.php");
    echo Producto::VerProducto($_POST);
  break;
  case 'GuardarProductoLLaves':
    include("../class/Class-Producto.php");
    echo Producto::GuardarProductoLLaves($_POST);
  break;
  case 'CopiarImagen':
    include("../class/Class-Producto.php");
    echo Producto::CopiarImagen($_POST);
  break;
 };
?>