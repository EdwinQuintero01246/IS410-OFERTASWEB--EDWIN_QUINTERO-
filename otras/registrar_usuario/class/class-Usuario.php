<?php
    class Usuario{
        private $usuario;
        private $nombre;
        private $apellido;
        private $urlImagen;
        private $tweets;
        private $followers;   

        public function __construct(
            $usuario,
            $nombre,
            $apellido,
            $urlImagen,
            $tweets,
            $followers
        ){
            $this->usuario= $usuario;
            $this->nombre= $nombre;
            $this->apellido= $apellido;
            $this->urlImagen= $urlImagen;
            $this->tweets= $tweets;
            $this->followers= $followers;
        }
        public static function retornarUsuarios(){
            return file_get_contents("../data/usuarios.json");
        }
        public static function retornarInfoUsuarios($usuario){
            $archivo=json_decode(file_get_contents("../data/usuarios.json"),true);
            $dato=array();
            $indice=0;
            for($i=0;$i<count($archivo);$i++){
                if($usuario==$archivo[$i]["usuario"]){
                    $dato[$indice]=$archivo[$i];
                }
            }
        return json_encode($dato);
        }
    }
?>