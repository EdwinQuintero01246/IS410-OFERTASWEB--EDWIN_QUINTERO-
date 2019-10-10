<?php
switch($_GET["accion"]){
    case 'ObtenerVentas':
      include("../class/class-Empresa.php");
      echo Empresa::ObtenerVentas($_POST['Llave']);
    break;
    case 'VerProducto':
      include("../../emp-productos/class/Class-Producto.php");
      echo Producto::VerProducto($_POST);
    break;
    case 'Seguidores':
      include("../class/class-Empresa.php");
      echo Empresa::VerSeguidores($_POST);
    break;
};
?>