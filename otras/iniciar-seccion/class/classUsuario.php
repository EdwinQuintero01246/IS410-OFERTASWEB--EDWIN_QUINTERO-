<?php
class Usuario{
        private $usuario;
        private $contraseña;
        
        public function __construct(
            $usuario,
            $contraseña
        ){
            $this->usuario= $usuario;
            $this->contraseña= $contraseña;
        }
        public function __toString(){
                $a["usuario"]=$this->usuario;
                $a["contraseña"]=$this->contraseña;
                return json_encode($a);
        }

        public static function infoUsuario($usuario,$Contrasenia){
                /*$archivo= json_decode(file_get_contents("../../data/data_json/usuarios.json"),true);
                $datos=array();
                $indice=0;
                for($i=0;$i<count($archivo);$i++){
                        if($usuario==$archivo[$i]["NombreUsuario"]){
                                if($contraseña==$archivo[$i]["Contraseña"]){
                                        $datos[$indice]=$archivo[$i];
                                        //$indice=$indice+1;
                                }
                        }
                }
                return  json_encode($datos);*/
                //      return json_encode(file_get_contents("../../data/data_json/usuarios.json"));
                //return file_get_contents("../data/usuarios.json");
          $ch = curl_init();    // initialize curl handle
          curl_setopt($ch, CURLOPT_URL, "https://quintex-ofertas.firebaseio.com/Usuario.json");
          curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
          curl_setopt($ch, CURLOPT_HTTPHEADER, array("Accept: application/json"));
          $datos=array();
          $contador=0;
          $d = json_decode(curl_exec($ch),true);
          foreach($d as $key => $value){
                $datos[$contador]["Usuario"]=$d[$key]["usuario"];
                $datos[$contador]["Contrasenia"]=$d[$key]["Contrasenia"];
                $datos[$contador]["Rango"]=$d[$key]["rango"];

            $contador=$contador+1;
          }
          curl_setopt($ch, CURLOPT_URL, "https://quintex-ofertas.firebaseio.com/Administrador.json");
          $d = json_decode(curl_exec($ch),true);
          foreach($d as $key => $value){
                $datos[$contador]["Usuario"]=$d[$key]["usuario"];
                $datos[$contador]["Contrasenia"]=$d[$key]["Contrasenia"];
                $datos[$contador]["Rango"]=$d[$key]["rango"];
            $contador=$contador+1;
          }
          curl_setopt($ch, CURLOPT_URL, "https://quintex-ofertas.firebaseio.com/empresa.json");
          curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
          curl_setopt($ch, CURLOPT_HTTPHEADER, array("Accept: application/json"));
          $d = json_decode(curl_exec($ch),true);
          foreach($d as $key => $value){
                $datos[$contador]["Usuario"]=$d[$key]["usuario"];
                $datos[$contador]["Contrasenia"]=$d[$key]["Contrasenia"];
                $datos[$contador]["Rango"]=$d[$key]["rango"];

            $contador=$contador+1;
          }$respuesta=array();
          for($i=0;$i<count($datos);$i++){
                if($usuario==$datos[$i]["Usuario"]){
                        if($Contrasenia==$datos[$i]["Contrasenia"]){
                                $respuesta[0]=$datos[$i];
                        }
                }
          }
          curl_close($ch);
        return json_encode($respuesta);
        }






        public function getApellido()
        {
                return $this->apellido;
        } 
        public function setApellido($apellido)
        {
                $this->apellido = $apellido;

                return $this;
        } 
        public function getContraseña()
        {
                return $this->contraseña;
        } 
        public function setContraseña($contraseña)
        {
                $this->contraseña = $contraseña;

                return $this;
        } 
        public function getNombre()
        {
                return $this->nombre;
        }
        public function setNombre($nombre)
        {
                $this->nombre = $nombre;

                return $this;
        }
        public function getUsuario()
        {
                return $this->usuario;
        }
        public function setUsuario($usuario)
        {
                $this->usuario = $usuario;

                return $this;
        }
    }           /* //para ver valores


            */
            
            /*
             // para guardar
            $data= json_encode($usuario);
                $ch = curl_init();    // initialize curl handle
                curl_setopt($ch, CURLOPT_URL, "https://quintex-ofertas.firebaseio.com/Administrador.json");
                curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
                curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
                $d =json_encode(curl_exec($ch));
                
                $res=curl_errno($ch);
                curl_close($ch);
                return $res;
            
            */
?>
