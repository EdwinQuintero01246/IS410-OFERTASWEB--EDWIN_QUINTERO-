function VerContraseña() {
    var x = document.getElementById('contrasenia');
    if (x.type === "password") {
      x.type = "text";
      $("#generarVisivilidad").html($(`
      <i id="mostrarContraseña" class=" fas fa-eye"></i>
      `));
    } else {
      x.type = "password";
      $("#generarVisivilidad").html($(`
      <i id="mostrarContraseña" class=" fas fa-eye-slash"></i>
      `));
    }
}
var datos=[
  {usuario:'juan',Contraseña:'1234',rango:'usuario'},
  {usuario:'pedro',Contraseña:'1234',rango:'administrador'},
  {usuario:'mario',Contraseña:'1234',rango:'empresa'}];
var parametros=[];

function IniciarSeccion(){
  parametros={
    usuario: $('#usuario').val(),
    Contraseña: $('#contrasenia').val()
  };
  console.log(parametros);
  for(let i=0 , con = 0 ; i<datos.length;i++){
    if(datos[i].usuario==parametros.usuario){
      if(datos[i].Contraseña==parametros.Contraseña){
        $("#ErrorContraseña").html($(``));
        $("#ErrorUsuario").html($(``));
        if(datos[i].rango=="usuario"){
        window.location.assign("../us-perfil/index.html");
        }else 
        if(datos[i].rango=="empresa"){
          window.location.assign("../emp-perfil/index.html");
        }else
        if(datos[i].rango=="administrador"){
          window.location.assign("../perfil-administrador/index.html");
        };
        break;
      }else{
        $("#ErrorContraseña").html($(`<div>Ha introducido una contraseña incorrecta.</div>`));
        $("#ErrorUsuario").html($(``));
        break;
      }
    }else{
      if(i+1==datos.length){
        $("#ErrorUsuario").html($(`<div>El correo o numero de telefono no coincide.</div>`));
        $("#ErrorContraseña").html($(``));
      };
    };
  };
}