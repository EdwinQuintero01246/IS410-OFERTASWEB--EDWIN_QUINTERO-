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

$('#button-iniciar-seccion').click(function(){
  parametros={
    usuario: $('#usuario').val(),
    Contraseña: $('#contrasenia').val()
  };
  console.log(parametros);
  for(let i=0; i<datos.length;i++){
    
    //console.log(datos[i]);
    //console.log(parametros.usuario);
      if((datos[i].usuario==parametros.usuario)&&(datos[i].Contraseña==parametros.Contraseña)){
        console.log("exitoso: "+datos[i].usuario+" = "+parametros.usuario+" es "+datos[i].rango);
      }
      else{
      };
    };
});
function buttonIniciarSeccio(){
  //console.log("click exitoso");
  

} 