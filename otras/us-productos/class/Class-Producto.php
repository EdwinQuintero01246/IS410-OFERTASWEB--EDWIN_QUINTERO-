<?php
    class Producto{
        private $NuevoProductoNombre;
        private $NuevoProductoPrecio;
        private $NuevoProductoOferta;
        private $NuevoProductoDescripcion;
        private $InformacionVendedor;
        private $Url;
        private $NombreEmpresa;

        public function __construct(
            $NuevoProductoNombre,
            $NuevoProductoPrecio,
            $NuevoProductoOferta,
            $NuevoProductoDescripcion,
            $InformacionVendedor,
            $Url,
            $NombreEmpresa
        ){
            $this->NuevoProductoNombre=$NuevoProductoNombre;
            $this->NuevoProductoPrecio=$NuevoProductoPrecio;
            $this->NuevoProductoOferta=$NuevoProductoOferta;
            $this->NuevoProductoDescripcion=$NuevoProductoDescripcion;
            $this->InformacionVendedor=$InformacionVendedor;
            $this->Url=$Url;
            $this->NombreEmpresa=$NombreEmpresa;
        }
        
        public static function VerProducto(){
            $ch = curl_init();    // initialize curl handle
            $datos=array();
            $contador=0;
            $contador2=0;
            curl_setopt($ch, CURLOPT_URL, "https://quintex-ofertas.firebaseio.com/empresa.json");
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($ch, CURLOPT_HTTPHEADER, array("Accept: application/json"));
            $d = json_decode(curl_exec($ch),true);
            foreach($d as $key => $value){
                //$datos[$contador]['Llave']=$key;
                    $cr = curl_init();    // initialize curl handle
                    curl_setopt($cr, CURLOPT_URL, "https://quintex-ofertas.firebaseio.com/empresa/$key/Productos.json");
                    curl_setopt($cr, CURLOPT_RETURNTRANSFER, 1);
                    curl_setopt($cr, CURLOPT_HTTPHEADER, array("Accept: application/json"));
                    $dd = json_decode(curl_exec($cr),true);
                    foreach($dd as $key2 => $value){
                        //$datos[$contador]['Llave'][$contador2]=$key;
                        $datos[$contador2]['NombreEmpresa']=$dd[$key2]["NombreEmpresa"];
                        $datos[$contador2]['Nombre']=$dd[$key2]["NombreProducto"];
                        $datos[$contador2]['Precio']=$dd[$key2]["PrecioProducto"];
                        $datos[$contador2]['Oferta']=$dd[$key2]["OfertaProducto"];
                        $datos[$contador2]['Descripcion']=$dd[$key2]["DescripcionProducto"];
                        $datos[$contador2]['InformacionVendedor']=$dd[$key2]["InformacionVendedor"];
                        $datos[$contador2]['Url']=$dd[$key2]["Url"];
                        $datos[$contador2]['Categorias']=$dd[$key2]["Categorias"];
                        $contador2=$contador2+1;
                    }
                $contador=$contador+1;
            }
            
            curl_close($cr);
            curl_close($ch);
        return json_encode($datos);
        }
        public static function GuardarCompra($datos){
            $data= json_encode($datos);
            $llave=$datos["llave"];
            $ch = curl_init();    // initialize curl handle
            curl_setopt($ch, CURLOPT_URL, "https://quintex-ofertas.firebaseio.com/Usuario/$llave/Compras.json");
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
            $d =json_encode(curl_exec($ch));
            $res=curl_errno($ch);
            curl_close($ch);
            $Respuesta="ComprasExitos";
        return json_encode($Respuesta);
    }
    public static function GuardarVenta($DatosAGuardar){
        $data= json_encode($DatosAGuardar);
        $NombreEmpresa=$DatosAGuardar["NombreEmpresa"];
        $ch = curl_init();    // initialize curl handle
            $datos=array();
            $contador=0;
            $contador2=0;
            curl_setopt($ch, CURLOPT_URL, "https://quintex-ofertas.firebaseio.com/empresa.json");
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_HTTPHEADER, array("Accept: application/json"));
            $d = json_decode(curl_exec($ch),true);
            foreach($d as $key => $value){
                //$datos[$contador]['Llave']=$key;
                if($d[$key]["NombreEmpresa"]==$NombreEmpresa){
                    $cr = curl_init();    // initialize curl handle
                    curl_setopt($cr, CURLOPT_URL, "https://quintex-ofertas.firebaseio.com/empresa/$key/Ventas.json");
                    curl_setopt($cr, CURLOPT_RETURNTRANSFER, true);
                    curl_setopt($cr, CURLOPT_POSTFIELDS, $data);
                    $d =json_encode(curl_exec($cr));
                    $res=curl_errno($cr);
                    $Respuesta="VentasExito";
                }
            }
        curl_close($cr);
        curl_close($ch);
        
    return json_encode($Respuesta);
}
}
?>