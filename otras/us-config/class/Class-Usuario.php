<?php
    class Usuario{
        private $NombreEmpresa;
        private $Email;
        private $password1;
        private $password2;
        private $Telefono;
        private $select;
        private $preguntaSeguridadText;
        private $respuestaSeguridadText;
        private $textarea;
        private $Dirrección;
        private $país;
        private $cuidad;
        private $Estado;
        private $Codigo;
        private $Facebook;
        private $Twitter;
        private $instagram;

        public function __construct(
            $NombreEmpresa,
            $Email,
            $password1,
            $password2,
            $Telefono,
            $select,
            $preguntaSeguridadText,
            $respuestaSeguridadText,
            $textarea,
            $Dirrección,
            $país,
            $cuidad,
            $Estado,
            $Codigo,
            $Facebook,
            $Twitter,
            $instagram
        ){
            $this->NombreEmpresa=$NombreEmpresa;
            $this->Email=$Email;
            $this->password1=$password1;
            $this->password2=$password2;
            $this->Telefono=$Telefono;
            $this->select=$select;
            $this->preguntaSeguridadText=$preguntaSeguridadText;
            $this->respuestaSeguridadText=$respuestaSeguridadText;
            $this->textarea=$textarea;
            $this->Dirrección=$Dirrección;
            $this->país=$país;
            $this->cuidad=$cuidad;
            $this->Estado=$Estado;
            $this->Codigo=$Codigo;
            $this->Facebook=$Facebook;
            $this->Twitter=$Twitter;
            $this->instagram=$instagram;
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
        
        public static function VerInsssfoEmpresa($datos){
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
        public static function VerInfoEmpresa($datosx){
            $llave = $datosx["LLave"];
            $ch = curl_init();    // initialize curl handle
            $datos=array();
            $contador=0;
            curl_setopt($ch, CURLOPT_URL, "https://quintex-ofertas.firebaseio.com/Usuario.json");
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($ch, CURLOPT_HTTPHEADER, array("Accept: application/json"));
            $d = json_decode(curl_exec($ch),true);
            foreach($d as $key => $value){
                if( $llave === $key){
                    $datos[$contador]['Apellido']=$d[$key]["Apellido"];
                    $datos[$contador]['Apodo']=$d[$key]["Apodo"];
                    $datos[$contador]['NombreEmpresa']=$d[$key]["NombreUsuario"];
                    $datos[$contador]['Cumple_anio']=$d[$key]["Cumple_anio"];
                    $datos[$contador]['Cumple_dia']=$d[$key]["Cumple_dia"];
                    $datos[$contador]['Cumple_mes']=$d[$key]["Cumple_mes"];
                    $datos[$contador]['Dirrección']=$d[$key]["Dirrección"];
                    $datos[$contador]['Email']=$d[$key]["Email"];
                    $datos[$contador]['ciudad']=$d[$key]["cuidad"];
                    $datos[$contador]['país']=$d[$key]["país"];
                    $datos[$contador]['password']=$d[$key]["Password1"];
                    $datos[$contador]['Telefono']=$d[$key]["Telefono"];
                    $datos[$contador]['Facebook']=$d[$key]["Facebook"];
                    $datos[$contador]['instagram']=$d[$key]["instagram"];
                    $datos[$contador]['Twitter']=$d[$key]["Twitter"];
                $contador=$contador+1;
                }
            }
            curl_close($ch);
        return json_encode($datos);
        }
        public static function CambiarNombre($datosRecibidos){
            $NombreActual = $datosRecibidos["NombreActual"];
            $NombreEmpresa = $datosRecibidos["NombreEmpresa"];
            $LLave = $datosRecibidos["LLave"];
            $ch = curl_init();    // initialize curl handle
            $datos=array();
            $contador=0;
            curl_setopt($ch, CURLOPT_URL, "https://quintex-ofertas.firebaseio.com/empresa.json");
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($ch, CURLOPT_HTTPHEADER, array("Accept: application/json"));
            $d = json_decode(curl_exec($ch),true);
            foreach($d as $key => $value){
                if( $LLave === $key){
                    $d[$key]["NombreEmpresa"]= $NombreEmpresa;
                    $res = $d[$key]["NombreEmpresa"];
                }
            }
            curl_close($ch);
        return json_encode($res);
        }
    }
?>