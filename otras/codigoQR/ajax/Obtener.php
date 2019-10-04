<?php
    require ('../../codigoQR/phpqrcode/qrlib.php');
    $var=time();
    $dir = "../temp/".$var;
        if(!file_exists($dir)){
            
            mkdir($dir);
        }
        $filename = $dir.'test.png';
        $framSize = 2;
        $contenido = "http://codigosdeprogramacion.com";
        QRcode::png($_POST['formData'], $filename, $_POST['ecc'], $_POST['size'], $framSize); 
            
        echo $var.'test.png';
?>