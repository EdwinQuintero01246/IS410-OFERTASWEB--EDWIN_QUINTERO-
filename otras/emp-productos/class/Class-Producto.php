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
        public static function GuardarProducto($datos){
            $data= json_encode($datos);
            $ch = curl_init();    // initialize curl handle
            curl_setopt($ch, CURLOPT_URL, "https://quintex-ofertas.firebaseio.com/Productos.json");
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
            $d =json_encode(curl_exec($ch));
            $res=curl_errno($ch);
            curl_close($ch);
            $Respuesta="ExitoProdcto";
        return json_encode($Respuesta);
        }
        
        public static function GuardarProductoLLaves($datos){
            $data= json_encode($datos);
            $llave=$datos["LLaves"];
            $ch = curl_init();    // initialize curl handle
            curl_setopt($ch, CURLOPT_URL, "https://quintex-ofertas.firebaseio.com/empresa/$llave/Productos.json");
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
            $d =json_encode(curl_exec($ch));
            $res=curl_errno($ch);
            curl_close($ch);
            $Respuesta="Exitollaves";
        return json_encode($Respuesta);
        }
        public static function VerProducto($datos){
            $llave = $datos["LLave"];
            $ch = curl_init();    // initialize curl handle
            $datos=array();
            $contador=0;
            curl_setopt($ch, CURLOPT_URL, "https://quintex-ofertas.firebaseio.com/empresa/$llave/Productos.json");
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($ch, CURLOPT_HTTPHEADER, array("Accept: application/json"));
            $d = json_decode(curl_exec($ch),true);
            foreach($d as $key => $value){
                $datos[$contador]['NombreEmpresa']=$d[$key]["NombreEmpresa"];
                $datos[$contador]['Nombre']=$d[$key]["NombreProducto"];
                $datos[$contador]['Precio']=$d[$key]["PrecioProducto"];
                $datos[$contador]['Oferta']=$d[$key]["OfertaProducto"];
                $datos[$contador]['Descripcion']=$d[$key]["DescripcionProducto"];
                $datos[$contador]['InformacionVendedor']=$d[$key]["InformacionVendedor"];
                $datos[$contador]['Url']=$d[$key]["Url"];
                $datos[$contador]['Categorias']=$d[$key]["Categorias"];
            $contador=$contador+1;
            }
            curl_close($ch);
        return json_encode($datos);
        }
    }
?>