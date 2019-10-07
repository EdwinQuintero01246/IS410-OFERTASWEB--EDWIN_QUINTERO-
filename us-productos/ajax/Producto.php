<?php
 switch($_GET["accion"]){
  case 'VerProducto':
    include("../class/Class-Producto.php");
    echo Producto::VerProducto();
  break;
 };
?>