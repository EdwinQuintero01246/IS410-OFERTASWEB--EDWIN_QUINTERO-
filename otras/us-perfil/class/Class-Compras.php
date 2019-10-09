<?php
    class Compras{
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
        
        public static function VerCompras($Correo){
            $ch = curl_init();    // initialize curl handle
            $datos=array();
            $contador=0;
            curl_setopt($ch, CURLOPT_URL, "https://quintex-ofertas.firebaseio.com/Usuario.json");
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($ch, CURLOPT_HTTPHEADER, array("Accept: application/json"));
            $d = json_decode(curl_exec($ch),true);
            foreach($d as $key => $value){
                if($Correo==$d[$key]["Email"]){
                    $cr = curl_init();
                    curl_setopt($cr, CURLOPT_URL, "https://quintex-ofertas.firebaseio.com/Usuario/$key/Compras.json");
                    curl_setopt($cr, CURLOPT_RETURNTRANSFER, 1);
                    curl_setopt($cr, CURLOPT_HTTPHEADER, array("Accept: application/json"));
                    $dd = json_decode(curl_exec($cr),true);
                    foreach($dd as $key2 => $value){
                        $datos[$contador]['Descripcion']=$dd[$key2]["Descripcion"];
                        $datos[$contador]['Producto']=$dd[$key2]["Nombre"];
                        $datos[$contador]['Empresa']=$dd[$key2]["NombreEmpresa"];
                        $datos[$contador]['Precio']=$dd[$key2]["Precio"];
                        $contador=$contador+1;
                    }
                }
            }
            curl_close($cr);
            curl_close($ch);
        return json_encode($datos);
        }
    }
?>