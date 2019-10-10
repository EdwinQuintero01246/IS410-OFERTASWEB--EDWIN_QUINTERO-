<?php
    class Empresa{
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
        public static function EmpresaSeguidas($datosRecibidos){
            $llave = $datosRecibidos['llave'];
            $ch = curl_init();    // initialize curl handle
            $datos=array();
            $contador=0;
            curl_setopt($ch, CURLOPT_URL, "https://quintex-ofertas.firebaseio.com/Usuario/$llave/EmpresaSeguidas.json");
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($ch, CURLOPT_HTTPHEADER, array("Accept: application/json"));
            $d = json_decode(curl_exec($ch),true);
            foreach($d as $key => $value){
                $datos[$contador]['NombreEmpresa']=$d[$key]["NombreEmpresa"];
                $contador=$contador+1;
            }
            curl_close($ch);
        return json_encode($datos);
        }
    }
?>