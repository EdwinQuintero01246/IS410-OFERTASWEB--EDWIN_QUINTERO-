function VerContraseña() {
    var x = document.getElementById('contrasenia');
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
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
    if((datos[i].usuario==parametros.usuario)&&(datos[i].Contraseña==parametros.Contraseña)){
      console.log("exitoso: "+datos[i].usuario+" = "+parametros.usuario+" es "+datos[i].rango);
      //con = 3;
      $("#ErrorContraseña").html($(``));
      $("#ErrorUsuario").html($(``));
      alert("iniciar");
      //ErrorConsulta(con);
    }
    if((datos[i].usuario==parametros.usuario)&&(datos[i].Contraseña!=parametros.Contraseña)){
      console.log("exitoso: "+datos[i].usuario+" = "+parametros.usuario+" es "+datos[i].rango);
      console.log("Contraseña no correcta");
      $("#ErrorContraseña").html($(`<div>Ha introducido una contraseña incorrecta.</div>`));
      $("#ErrorUsuario").html($(``));
      alert("error contaseña");
      //con =1;
      //ErrorConsulta(con);
    }
    if((datos[i].usuario)=!(parametros.usuario)){
      console.log("exitoso: "+datos[i].usuario+" = "+parametros.usuario+" es "+datos[i].rango);
      if(i+1==datos.length){
        console.log("usuario no encontardo");
        $("#ErrorContraseña").html($(`<div>El correo o numero de telefono no coincide.</div>`));
        $("#ErrorUsuario").html($(``));
        //con =2;
        //ErrorConsulta(con);
      
      };
    };
  };
    
}
function ErrorConsulta(consulta){
  if(consulta==1){
    $("#ErrorUsuario").html($(`<div>Ha introducido una contraseña incorrecta.</div>`));
    $("#ErrorContraseña").html($(``));
  }
  if(consulta==2){
  $("#ErrorContraseña").html($(`<div>El correo o numero de telefono no coincide.</div>`));
  $("#ErrorUsuario").html($(``));
  };
  if(consulta==3){
    $("#ErrorContraseña").html($(``));
    $("#ErrorUsuario").html($(``));
    alert("iniciar");
  };
}