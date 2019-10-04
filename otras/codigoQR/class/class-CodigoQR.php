<?php 
require ('../../codigoQR/phpqrcode/qrlib.php');
class CodigoQr{
    private $contenido;
    private $tamanio;
    
    public function __construct(
        $contenido,
        $tamanio
    ){
        $this->$contenido= $contenido;
        $this->tamanio= $tamanio;
    }
    public static function Obtener(){
        $dir = "../temp/";
        if(!file_exists($dir)){
            mkdir($dir);
        }
        $filename = $dir.'test.png';
        $tamaño = 10; //Tamaño de Pixel
        $level = 'L'; //Precisión Baja
        $framSize = 3; //Tamaño en blanco
        $contenido = "http://codigosdeprogramacion.com"; //Texto
            //Enviamos los parametros a la Función para generar código QR 
        QRcode::png($contenido, $filename, $level, $tamaño, $framSize); 
            //Mostramos la imagen generada
        echo '<img src="'.$dir.basename($filename).'" /><hr/>';
    }
}
?>