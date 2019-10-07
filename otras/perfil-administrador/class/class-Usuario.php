<?php
    class Usuario{
        private $NombreUsuario;
        private $Email;
        private $password1;
        private $Telefono;
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
        private $Apellido;
        private $Apodo;
        private $Cumple_dia;
        private $Cumple_mes;
        private $Cumple_anio;

        public function __construct(
            $NombreUsuario,
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
            $instagram,
            $Apellido,
            $Apodo,
            $Cumple_dia,
            $Cumple_mes,
            $Cumple_anio
        ){
            $this->NombreUsuario=$NombreUsuario;
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
            $this->Apellido=$Apellido;
            $this->Apodo=$Apodo;
            $this->Cumple_dia=$Cumple_dia;
            $this->Cumple_mes=$Cumple_mes;
            $this->Cumple_anio=$Cumple_anio;
        }
        public static function generrarUsuario(){
            $ch = curl_init();    // initialize curl handle
            $datos=array();
            $contador=0;
            curl_setopt($ch, CURLOPT_URL, "https://quintex-ofertas.firebaseio.com/Usuario.json");
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($ch, CURLOPT_HTTPHEADER, array("Accept: application/json"));
            $d = json_decode(curl_exec($ch),true);
            foreach($d as $key => $value){

                    $datos[$contador]['NombreUsuario']=$d[$key]["NombreUsuario"];
                    $datos[$contador]['Apellido']=$d[$key]["Apellido"];
                    $datos[$contador]['Apodo']=$d[$key]["Apodo"];
                    $datos[$contador]['Email']=$d[$key]["Email"];
                    $datos[$contador]['Password1']=$d[$key]["Password1"];
                    $datos[$contador]['Telefono']=$d[$key]["Telefono"];
                    $datos[$contador]['Cumple_dia']=$d[$key]["Cumple_dia"];
                    $datos[$contador]['Cumple_mes']=$d[$key]["Cumple_mes"];
                    $datos[$contador]['Cumple_anio']=$d[$key]["Cumple_anio"];
                    $datos[$contador]['Dirrección']=$d[$key]["Dirrección"];
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