<?php
    class Empresa{
        private $NombreEmpresa;
        private $Email;
        private $password1;
        private $Telefono;
        private $preguntaSeguridadText;
        private $respuestaSeguridadText;
        private $textarea;
        private $Dirreccion;
        private $país;
        private $ciudad;
        private $Estado;
        private $Codigo;
        private $Facebook;
        private $Twitter;
        private $instagram;
        private $DescripcionMuro;
        private $PreguntaSeguridad;
        private $RespuestaSeguridad;

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
            $Dirreccion,
            $país,
            $ciudad,
            $Estado,
            $Codigo,
            $Facebook,
            $Twitter,
            $instagram,
            $Apellido,
            $DescripcionMuro,
            $PreguntaSeguridad,
            $RespuestaSeguridad
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
            $this->Dirreccion=$Dirreccion;
            $this->país=$país;
            $this->ciudad=$ciudad;
            $this->Estado=$Estado;
            $this->Codigo=$Codigo;
            $this->Facebook=$Facebook;
            $this->Twitter=$Twitter;
            $this->instagram=$instagram;
            $this->DescripcionMuro=$DescripcionMuro;
            $this->PreguntaSeguridad=$PreguntaSeguridad;
            $this->RespuestaSeguridad=$RespuestaSeguridad;
        }
        public static function generarEmpresa(){
            $ch = curl_init();    // initialize curl handle
            $datos=array();
            $contador=0;
            curl_setopt($ch, CURLOPT_URL, "https://quintex-ofertas.firebaseio.com/empresa.json");
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($ch, CURLOPT_HTTPHEADER, array("Accept: application/json"));
            $d = json_decode(curl_exec($ch),true);
            foreach($d as $key => $value){
                    $datos[$contador]['NombreEmpresa']=$d[$key]["NombreEmpresa"];
                    $datos[$contador]['Email']=$d[$key]["Email"];
                    $datos[$contador]['password1']=$d[$key]["password1"];
                    $datos[$contador]['Telefono']=$d[$key]["Telefono"];
                    $datos[$contador]['Dirreccion']=$d[$key]["Dirreccion"];
                    $datos[$contador]['DescripcionMuro']=$d[$key]["DescripcionMuro"];
                    $datos[$contador]['PreguntaSeguridad']=$d[$key]["PreguntaSeguridad"];
                    $datos[$contador]['RespuestaSeguridad']=$d[$key]["RespuestaSeguridad"];
                    $datos[$contador]['país']=$d[$key]["país"];
                    $datos[$contador]['ciudad']=$d[$key]["cuidad"];
                    $datos[$contador]['Estado']=$d[$key]["Estado"];
                    $datos[$contador]['Codigo']=$d[$key]["Codigo"];
                    $datos[$contador]['Facebook']=$d[$key]["Facebook"];
                    $datos[$contador]['Twitter']=$d[$key]["Twitter"];
                    $datos[$contador]['instagram']=$d[$key]["instagram"];
                $contador=$contador+1;
            }
            curl_close($ch);
            return json_encode($datos);
        }
    }
?>





