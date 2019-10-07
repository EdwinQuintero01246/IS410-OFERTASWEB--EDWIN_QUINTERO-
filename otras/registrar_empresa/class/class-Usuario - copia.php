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
        public static function GuardarUsuario($datos){
            $data= json_encode($datos);
            $ch = curl_init();    // initialize curl handle
            curl_setopt($ch, CURLOPT_URL, "https://quintex-ofertas.firebaseio.com/empresa.json");
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
            $d =json_encode(curl_exec($ch));
            
            $res=curl_errno($ch);
            curl_close($ch);
        return $res;
        }
        public static function CrearArchivos($NombreEmpresa,$Url){
            $carpeta = $Url.$NombreEmpresa;
            $carpetaImagen=$carpeta."/img";
            $carpetaProductos=$carpeta."/productos";
                if(!file_exists($carpeta)){
                    mkdir($carpeta);
                    mkdir($carpetaImagen);
                    mkdir($carpetaProductos);
                }
            return json_encode($NombreEmpresa);
          }
        public static function verificarUsuarioEmpresa($NombreEmpresa,$Email){
                $ch = curl_init();    // initialize curl handle
                curl_setopt($ch, CURLOPT_URL, "https://quintex-ofertas.firebaseio.com/empresa.json");
                curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
                curl_setopt($ch, CURLOPT_HTTPHEADER, array("Accept: application/json"));
                $datos=array();
                $contador=0;
                $d = json_decode(curl_exec($ch),true);
                foreach($d as $key => $value){
                    $datos[$contador]["NombreEmpresa"]=$d[$key]["NombreEmpresa"];
                    $datos[$contador]["Email"]=$d[$key]["Email"];
                    $contador=$contador+1;
                }
                $respuesta=array();
                $variablefinal="";
                for($i=0;$i<count($datos);$i++){
                    if($NombreEmpresa==$datos[$i]["NombreEmpresa"]){
                        if(($Email==$datos[$i]["Email"])){
                            $variablefinal="01000101";//nombre igual y email igual = E 01001010
                        };
                        if($Email==""){
                            $variablefinal="01011001";//nombre igual y email vacio = Y 
                        };
                        if(($Email!==$datos[$i]["Email"])){
                            $variablefinal="01000001";//nombre igual y email distinto = A 
                        };
                    }else 
                    if($NombreEmpresa!==$datos[$i]["NombreEmpresa"]){
                        //$variablefinal="usuario";
                        if(($Email==$datos[$i]["Email"])){
                            $variablefinal="01010001";//nombre distinto y email igual = Q
                        };
                        if($Email==""){
                            $variablefinal="01001101";//nombre distinto y email vacio = M
                        };
                        if($Email!==$datos[$i]["Email"]){
                            $variablefinal="01001010";//nombre distnto y email distinto = J 
                        };
                    } else 
                    if($NombreEmpresa==""){
                        //$variablefinal="usuario";
                        if(($Email==$datos[$i]["Email"])){
                            $variablefinal="01010110";//nombre vacio y email igual = V 
                        };
                        if($Email==""){
                            $variablefinal="01010011";//nombre vacio y email vacio = S
                        };
                        if($Email!==$datos[$i]["Email"]){
                            $variablefinal="01010010";//nombre vacio y email distinto = R
                        }
                    };
                };
                curl_close($ch);
                return json_encode($variablefinal);
              }
        }
?>