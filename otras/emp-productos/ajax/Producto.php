<?php
 switch($_GET["accion"]){
  case 'GuardarProducto':
    include("../class/Class-Producto.php");
    echo Producto::GuardarProducto();
  break;
 };
?>