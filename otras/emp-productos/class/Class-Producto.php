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
        return $res;
        }
    }
?>