$(document).ready(function() {
  
})

function VerContraseña(){
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
  
function IniciarSeccion(){
  if($("#usuario").val()==""){
    $("#ErrorUsuario").html($(`<div>Campos vacios</div>`));
    $("#ErrorContraseña").html($(``));
  };
  if($("#contrasenia").val()==""){
    $("#ErrorUsuario").html($(``));
    $("#ErrorContraseña").html($(`<div>Campos vacios</div>`));
  };
  var parametros=
  'usuario='+$("#usuario").val()+"&"+
  'Contrasenia='+$("#contrasenia").val();
    console.log(parametros);
    $.ajax({
      url:"ajax/usuario.php?accion=usuario",
      method:"POST",
      dataType:"json",
      data:parametros,
      success:function(respuesta){
        console.log(respuesta);
        if(respuesta[0]==null){
          $("#ErrorContraseña").html($(`<div>Ha introducido una contraseña incorrecta.</div>`));
          $("#ErrorUsuario").html($(``));
        }else{
          if(respuesta[0].Rango=="Usuario"||respuesta[0].Rango=="Usuario"){
          window.location.assign("../us-perfil/index.html");
          }else 
          if(respuesta[0].Rango=="empresa"||respuesta[0].Rango=="Empresa"){
            window.location.assign("../emp-perfil/index.html");
          }else
          if(respuesta[0].Rango=="admin"||respuesta[0].Rango=="Admin"){
            window.location.assign("../perfil-administrador/index.html");
          };
        }
      },
      error:function(respuesta){
        
      }
    });
}
