var parametros1;
var parametros2;
var parametros3;
var parametrosCrearArchivos;
function VerContraseña(){
    var x = document.getElementById('password1');
    var y = document.getElementById('password2');
    if (x.type === "password" && y.type === "password") {
      x.type = "text";
      y.type = "text";
    } else {
      x.type = "password";
      y.type = "password";
    }
}
function activarSiguiente(){
    var parametrosdata=
    'NombreEmpresa='+$("#NombreEmpresa").val()+"&"+
    'Email='+$("#Email").val();
    parametrosCrearArchivos=
    'NombreEmpresa='+$("#NombreEmpresa").val()+"&"+
    'Url='+"../../data/user/Empresa/";
    parametros1=
    'NombreEmpresa='+$("#NombreEmpresa").val()+"&"+
    'Email='+$("#Email").val()+"&"+
    'password1='+$("#password1").val()+"&"+
    'password2='+$("#password2").val()+"&"+
    'Telefono='+$("#Telefono").val()+"&"+
    'PreguntaSeguridad='+$("#select-css").val()+"&"+
    'PreguntaSeguridad='+$("#preguntaSeguridadText").val()+"&"+
    'RespuestaSeguridad='+$("#respuestaSeguridadText").val()+"&"+
    'DescripcionMuro='+$("#textarea-descripcion").val()+"&";
    $.ajax({
        url:"ajax/Usuario.php?hacer=VerificarUsuario",
        method:"POST",
        dataType:"json",
        data: parametrosdata,
        success:function(respuesta){
            console.log(respuesta);/*
            if(respuesta=="01000101"){
                $("#ValidarUsuario").html($(`
                    <i class="fas fa-exclamation-circle"></i><h1 id="VerificarUsuarioText">Nombre Y Correo Existen</h1>
                `));
            };
            if(respuesta=="01011001"){
                $("#ValidarUsuario").html($(`
                    <i class="fas fa-exclamation-circle"></i><h1 id="VerificarUsuarioText">nombre Ya existe y Correo Vacio</h1>
                `));
            };
            if(respuesta=="01000001"){
                $("#ValidarUsuario").html($(`
                    <i class="fas fa-exclamation-circle"></i><h1 id="VerificarUsuarioText">Nombre le pertenece a un cliente</h1>
                `));
            };
            if(respuesta=="01010001"){
                $("#ValidarUsuario").html($(`
                    <i class="fas fa-exclamation-circle"></i><h1 id="VerificarUsuarioText">Correo le pertenece a un cliente</h1>
                `));
            };
            if(respuesta=="01001101"){
                $("#ValidarUsuario").html($(`
                    <i class="fas fa-exclamation-circle"></i><h1 id="VerificarUsuarioText">Campo Correo Vacio</h1>
                `));
            };*/
            if(respuesta=="01001010"){
                $("#ValidarUsuario").html($(``));
                if($("#password1").val()==$("#password2").val()){
                    $("#información").html($(`
                        <div class="row" style="margin-left: 0px;margin-right: 0px;">
                            <img class="col-4" src="../registrar_usuario/img/icon/puntosFom2.png" alt="" id="PointsPoint">
                        </div>
                    `));
                    textPlano();
                    $("#información").append($(`
                        <h2 class="tittle-registrarse-seccion col-12" id="h2-registrarse-seccion">ubicacion</h2>
                        <li class="li-form-registrarse-seccion col-sm-12 col-md-6 col-lg-6 col-xl-6 col-12" ><input class="input-option" id="Dirrección" type="text"   placeholder="Dirrección"></li>
                        <li class="li-form-registrarse-seccion col-sm-12 col-md-6 col-lg-6 col-xl-6 col-12"><input class="input-option"  id="país" type="text"   placeholder="país"></li>
                        <li class="li-form-registrarse-seccion col-sm-12 col-md-6 col-lg-6 col-xl-6 col-12"><input class="input-option"  id="cuidad" type="text"   placeholder="cuidad"></li>
                        <li class="li-form-registrarse-seccion col-sm-12 col-md-6 col-lg-6 col-xl-6 col-12"><input class="input-option"  id="Estado" type="text"   placeholder="Estado/Provincia/Región"></li>
                        <li class="li-form-registrarse-seccion col-sm-12 col-md-6 col-lg-6 col-xl-6 col-12"><input class="input-option"  id="Codigo" type="text"   placeholder="Codigo Postal"></li>
                        <li class="li-form-registrarse-seccion row col-12">
                        <li class="li-form-registrarse-seccion  col-6 "><input type="button" class="btn btn-danger buttonForm3" id="confiButtonAnterior"value="Anterior" onclick="activarAnteriorForm1()"></li>
                        <li class="li-form-registrarse-seccion  col-6 "><input type="button" class="btn btn-danger buttonForm3" id="confiButtonSiguiente" value="Siguiente" onclick="activarSiguienteForm2()"></li>
                    `));
                }else{
                    $("#ValidarPassword").html($(`<h1 id="VerificarUsuarioText">contraseñas no coinciden</h1>`));
                };
            };/*
            if(respuesta=="01010110"){
                $("#ValidarUsuario").html($(`
                    <i class="fas fa-exclamation-circle"></i><h1 id="VerificarUsuarioText">Campo Nombre Vacio y Correo Existe</h1>
                `));
            };
            if(respuesta=="01010011"){
                $("#ValidarUsuario").html($(`
                    <i class="fas fa-exclamation-circle"></i><h1 id="VerificarUsuarioText">Campos Nombre y Correo Vacio</h1>
                `));
            };
            if(respuesta=="01010010"){
                $("#ValidarUsuario").html($(`
                    <i class="fas fa-exclamation-circle"></i><h1 id="VerificarUsuarioText">Campo Nombre Vacio</h1>
                `));
            };*/
            
        },
        error:function(respuesta){
            console.log("Error");
        }
    });
}
function activarSiguienteForm2(){
        parametros2=
        'Dirreccion='+$("#Dirrección").val()+"&"+
        'país='+$("#país").val()+"&"+
        'cuidad='+$("#cuidad").val()+"&"+
        'Estado='+$("#Estado").val()+"&"+
        'Codigo='+$("#Codigo").val()+"&";
        $("#información").html($(`
            <div class="row" style="margin-left: 0px;margin-right: 0px;">
                <img class="col-4" src="../registrar_usuario/img/icon/puntosFom3.png" alt="" id="PointsPoint">
            </div>
        `));
        textPlano();
        $("#información").append($(`
        <h2 class="tittle-registrarse-seccion col-12" id="h2-registrarse-seccion">Redes Sociales</h2>
        <li class="li-form-registrarse-seccion col-sm-4 col-md-4 col-lg-4 col-xl-4 col-7"><label id="label-redes-facebook" for="facebookUsername" >facebook.com/</label></li>
        <li class="li-form-registrarse-seccion col-sm-8 col-md-8 col-lg-8 col-xl-8 col-12"><input class="input-option" id="Facebook" type="text"></li>
        <li class="li-form-registrarse-seccion col-sm-4 col-md-4 col-lg-4 col-xl-4 col-7"><label id="label-redes-twitter" for="facebookUsername">twitter.com/</label></li>
        <li class="li-form-registrarse-seccion col-sm-8 col-md-8 col-lg-8 col-xl-8 col-12"><input class="input-option" id="Twitter" type="text"></li>
        <li class="li-form-registrarse-seccion col-sm-4 col-md-4 col-lg-4 col-xl-4 col-7"><label id="label-redes-instagram" for="facebookUsername">instagram.com/</label></li>
        <li class="li-form-registrarse-seccion col-sm-8 col-md-8 col-lg-8 col-xl-8 col-12"><input class="input-option" id="instagram"type="text"></li>
        <li class="li-form-registrarse-seccion  col-6 "><input type="button" class="btn btn-danger buttonForm3" id="confiButtonAnterior"  value="Anterior" onclick="activarAnteriorForm2()"></li>
        <li class="li-form-registrarse-seccion  col-6 "><input type="button" class="btn btn-danger buttonForm3" id="confiButtonSiguiente" onclick="Registrar()" value="Registrar"></li>
    `));
  }
  function activarAnteriorForm1(){
    $("#información").html($(`
        <div class="row" style="margin-left: 0px;margin-right: 0px;">
            <img class="col-4" src="../registrar_usuario/img/icon/puntosFom1.png" alt="" id="PointsPoint">
        </div>
    `));
    textPlano();
    $("#información").append($(`
        <h2 class="tittle-registrarse-seccion col-12" id="h2-registrarse-seccion">Información de la empresa</h2>
        <li class="li-form-registrarse-seccion col-sm-12 col-md-6 col-lg-6 col-xl-6 col-12"><input class="input-option " id="NombreEmpresa" type="text"   placeholder="Nombre De La Empresa"></li>
        <li class="li-form-registrarse-seccion col-sm-12 col-md-6 col-lg-6 col-xl-6 col-12"><input class="input-option " id="Email" type="email"   placeholder="email"></li>
        <div id="ValidarUsuario" class="col-12"></div>
        <li class="li-form-registrarse-seccion col-sm-12 col-md-6 col-lg-6 col-xl-6 col-12"><input class="input-option " id="password1" type="password"   placeholder="password"></li>
        <li class="li-form-registrarse-seccion col-sm-12 col-md-6 col-lg-6 col-xl-6 col-12"><input class="input-option " id="password2" type="password"   placeholder="confirmar password"></li>
        <div id="ValidarPassword" class="col-12"></div>
        <p class="col-12" id="textCheckButton"><input class="w3-check" type="checkbox" onclick="VerContraseña()"> Ver Contraseña</p>
        <li class="li-form-registrarse-seccion col-sm-12 col-md-6 col-lg-6 col-xl-6 col-12"><input class="input-option " id="Telefono" type="tel"   placeholder="telefono"></li>
        <li class="li-form-registrarse-seccion col-12">
            <select class="select-css" id="select-css" onchange="preguntaSeguridad()">
                <option value="0">Pregunta de seguridad</option>
                <option value="1">Primer Cliente</option>
                <option value="2">Nombre Promietario</option>
                <option value="3">Pregunta(Usuario)</option>
            </select>
            <div id="preguntaSeguridad">
            </div>
        </li>
        <li class="li-form-registrarse-seccion col-12"><textarea name=""  rows="4" placeholder="Descripcion en el muro de tu perfil (Opcional)" id="textarea-descripcion"></textarea></li>
        <input type="button" class="btn btn-danger buttonForm3 col-6" id="confiButtonSiguiente" value="Siguiente" onclick="activarSiguiente()">
    `));
  }
  function activarAnteriorForm2(){
    $("#información").html($(`
        <div class="row" style="margin-left: 0px;margin-right: 0px;">
            <img class="col-4" src="../registrar_usuario/img/icon/puntosFom2.png" alt="" id="PointsPoint">
        </div>
    `));
    textPlano();
    $("#información").append($(`
        <h2 class="tittle-registrarse-seccion col-12" id="h2-registrarse-seccion">ubicacion</h2>
        <li class="li-form-registrarse-seccion col-sm-12 col-md-6 col-lg-6 col-xl-6 col-12" ><input class="input-option" id="Dirrección" type="text"   placeholder="Dirrección"></li>
        <li class="li-form-registrarse-seccion col-sm-12 col-md-6 col-lg-6 col-xl-6 col-12"><input class="input-option"  id="país" type="text"   placeholder="país"></li>
        <li class="li-form-registrarse-seccion col-sm-12 col-md-6 col-lg-6 col-xl-6 col-12"><input class="input-option"  id="cuidad" type="text"   placeholder="cuidad"></li>
        <li class="li-form-registrarse-seccion col-sm-12 col-md-6 col-lg-6 col-xl-6 col-12"><input class="input-option"  id="Estado" type="text"   placeholder="Estado/Provincia/Región"></li>
        <li class="li-form-registrarse-seccion col-sm-12 col-md-6 col-lg-6 col-xl-6 col-12"><input class="input-option"  id="Codigo" type="text"   placeholder="Codigo Postal"></li>
        <li class="li-form-registrarse-seccion row col-12">
        <li class="li-form-registrarse-seccion  col-6 "><input type="button" class="btn btn-danger buttonForm3" id="confiButtonAnterior"value="Anterior" onclick="activarAnteriorForm1()"></li>
        <li class="li-form-registrarse-seccion  col-6 "><input type="button" class="btn btn-danger buttonForm3" id="confiButtonSiguiente" value="Siguiente" onclick="activarSiguienteForm2()"></li>
    `));
  }
  function textPlano(){
    $("#información").append($(`
        <h2 class="tittle-registrarse-seccion col-12 ">Registra Tu Empresa</h2><br>
        <li class="li-form-registrarse-seccion col-12" >
            <div class="line">
            </div>
        </li>
    `));
  }
  function preguntaSeguridad(){
      
      if($("#select-css").val()==1||$("#select-css").val()==2){
        $("#preguntaSeguridad").html($(`
            <input type="text" placeholder="Respuesta" class="input-option" style="margin-top: 12px;" name="" id="respuestaSeguridadText">
        `));
      }if($("#select-css").val()==3){
        $("#preguntaSeguridad").html($(`
            <input type="text"  placeholder="Pregunta" class="input-option" style="margin-top: 12px;" name="" id="preguntaSeguridadText">
            <input type="text"  placeholder="Respuesta" class="input-option" style="margin-top: 12px;" name="" id="respuestaSeguridadText">
        `));
      }
  }
  function Registrar(){
    parametros3=
    'Facebook='+$("#Facebook").val()+"&"+
    'Twitter='+$("#Twitter").val()+"&"+
    'instagram='+$("#instagram").val()
    ;
    var parametros= parametros1+parametros2+parametros3;
    console.log(parametrosCrearArchivos);
    $.ajax({
        url:"ajax/Usuario.php?hacer=CrearAchivos",
        method:"POST",
        dataType:"json",
        data: parametrosCrearArchivos,
        success:function(respuesta){
            console.log(respuesta);
        },
        error:function(respuesta){
            console.log("Error");
        }
    });
    $.ajax({
        url:"ajax/Usuario.php?hacer=GuardarUsuario",
        method:"POST",
        dataType:"json",
        data: parametros,
        success:function(respuesta){
            alert("Usuario Creado, ya puedes iniciar seccion");
            window.setTimeout(window.location.assign("../iniciar-seccion"),300);
        },
        error:function(respuesta){

        }
    });
  }