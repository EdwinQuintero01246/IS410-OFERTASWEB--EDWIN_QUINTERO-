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
        public static function ObtnerEmpresa($datosRecibidos){
            $ch = curl_init();    // initialize curl handle
            $datos=array();
            $contador=0;
            curl_setopt($ch, CURLOPT_URL, "https://quintex-ofertas.firebaseio.com/empresa.json");
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($ch, CURLOPT_HTTPHEADER, array("Accept: application/json"));
            $d = json_decode(curl_exec($ch),true);
            foreach($d as $key => $value){
                        $datos[$contador]['DescripcionMuro']=$d[$key]["DescripcionMuro"];
                        $datos[$contador]['Dirreccion']=$d[$key]["Dirreccion"];
                        $datos[$contador]['Telefono']=$d[$key]["Telefono"];
                        $datos[$contador]['Twitter']=$d[$key]["Twitter"];
                        $datos[$contador]['NombreEmpresa']=$d[$key]["NombreEmpresa"];
                        $datos[$contador]['instagram']=$d[$key]["instagram"];
                        $datos[$contador]['Facebook']=$d[$key]["Facebook"];
                        $datos[$contador]['país']=$d[$key]["país"];
                        $datos[$contador]['Ciudad']=$d[$key]["cuidad"];
                        /*$contador2=0;
                        $cr = curl_init();    // initialize curl handle
                        curl_setopt($cr, CURLOPT_URL, "https://quintex-ofertas.firebaseio.com/empresa/$key/Seguidores.json");
                        curl_setopt($cr, CURLOPT_RETURNTRANSFER, 1);
                        curl_setopt($cr, CURLOPT_HTTPHEADER, array("Accept: application/json"));
                        $dd = json_decode(curl_exec($cr),true);
                        foreach($dd as $key2 => $value){
                            $datos[$contador][$contador2]['Seguidores']=$dd[$key2]["NombreUsuario"];
                            $contador2=$contador2+1;
                        }*/



                $contador=$contador+1;
            }
            
            curl_close($ch);
        return json_encode($datos);
        }
        public static function GuardarSeguido($datosRecibidos){
            $respuesta=0;
            $datadata = json_encode($datosRecibidos);
            $Nombre = $datosRecibidos['NombreEmpresa'];
            $llave = $datosRecibidos['llave'];
            $usuario = $datosRecibidos['NombreUsuario'];
            $data= json_encode($Nombre);
            $ch = curl_init();    // initialize curl handle
            curl_setopt($ch, CURLOPT_URL, "https://quintex-ofertas.firebaseio.com/Usuario/$llave/EmpresaSeguidas.json");
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $datadata);
            $d =json_encode(curl_exec($ch));
            $res=curl_errno($ch);
            
            //
            $cr = curl_init();    // initialize curl handle
            $datos=array();
            $contador=0;
            $respuesta=0;
            curl_setopt($cr, CURLOPT_URL, "https://quintex-ofertas.firebaseio.com/empresa.json");
            curl_setopt($cr, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($cr, CURLOPT_HTTPHEADER, array("Accept: application/json"));
            $d = json_decode(curl_exec($cr),true);
            foreach($d as $key => $value){
                if( $Nombre === $d[$key]["NombreEmpresa"]){
                    $datar= json_encode($usuario);
                    $cv = curl_init();    // initialize curl handle
                    curl_setopt($cv, CURLOPT_URL, "https://quintex-ofertas.firebaseio.com/empresa/$key/Seguidores.json");
                    curl_setopt($cv, CURLOPT_RETURNTRANSFER, 1);
                    curl_setopt($cv, CURLOPT_POSTFIELDS, $datadata);
                    $d =json_encode(curl_exec($cv));
                    $res=curl_errno($cv);
                    curl_close($cv);
                }
            }
            curl_close($cr);
            curl_close($ch);
            $respuesta="Exitollaves";
        return json_encode($respuesta);
        }
    }
?>