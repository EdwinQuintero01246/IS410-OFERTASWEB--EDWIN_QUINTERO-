var UsuarioGeneral= [];
$(document).ready(function(){
    UsuarioImport = localStorage.getItem("NombreEmpresa");
    llaveImport = localStorage.getItem("llave");
    
    if(UsuarioImport==null){
        alert("Inicie Seccion Primero");
        window.location.assign("../../index.html");
    };
    $("#nombreUsuario").html($(`
        <a class="nav-button-option-navbar" href="#${UsuarioImport}">${UsuarioImport}</a>
    `));
    var dataLLave=
    'LLave='+ llaveImport;
    $.ajax({
        url:"ajax/Usuario.php?accion=VerInfoEmpresa",
        method:"POST",
        dataType:"json",
        data: dataLLave,
        success:function(respuesta){
            UsuarioGeneral = respuesta ;
            $("#LateralButton").html($(`
            <div style="margin-bottom: 12px">
                <div><span class="tittle">Información</span></div>
                    <div class="SizeFormLi col-12 row">
                        <h1 class="TextPrincipal content-text col-12">Nombre empresa</h1>
                        <h1 class="TextSecundario content-textInfo col-12">${respuesta[0].NombreEmpresa}</h1>
                    </div>
                    <div class="SizeFormLi col-12 row">
                        <h1 class="TextPrincipal content-text col-12">Correo</h1>
                        <h1 class="TextSecundario content-textInfo col-12">${respuesta[0].Email}</h1>
                    </div>
                    <div class="SizeFormLi col-12 row">
                        <h1 class="TextPrincipal content-text col-12">Contraseña</h1>
                        <h1 class="TextSecundario content-textInfo col-12">...</h1>
                    </div>
                    <div class="SizeFormLi col-12 row">
                        <h1 class="TextPrincipal content-text col-12">Telefono(s)</h1>
                        <h1 class="TextSecundario content-textInfo col-12">${respuesta[0].Telefono}</h1>
                    </div>
                    <a onclick="generarinfo()"  class="boton_personalizado row" id="buttonInfo">
                        <Img class="imagenEditar" src="img/icon/desplegue.png">
                        </Img>
                    </a>
                    <div><div class="line"></div></div>
                    <div><span class="tittle">ubicacion</span></div>
                    <div class="row" id="rowGeneral">
                        <input disabled class="TextPrincipal content-text col-sm-10 col-12" type="text" name="" id="text-lugar" placeholder="Lugar,Sitio" >
                        <a onclick="ModalGPS()" data-toggle="modal" data-target="#GPSModal" id="tamanioButton" class="boton_personalizado"   style="height: 33px; width: 27px;">
                            <Img src="img/icon/localizacion.png" id="">
                            </Img>
                        </a>
                    </div>
                    <div><div class="line"></div></div>
                    <div><span class="tittle">Numero de cuenta</span></div>
                    <div class="row" style="margin-left: 0px;margin-right: 0px;">
                        <h1 class="TextSecundario content-textInfo row col-sm-10 col-12">XXXX-XXXX-XXXX-2989</h1>
                        <a onclick="ModalTarjeta()" data-toggle="modal" data-target="#TarjetaModal" id="tamanioButton" style="height: 24px; width: 27px;" class="boton_personalizado" href="">
                            <Img src="img/icon/tarjetas.png" id="">
                            </Img>
                        </a>
                    </div>
                    <div><div class="line" id="lineMargin"></div></div>
                    <div><span class="tittle" id="redes">redes sociales</span></div>
                    <div>
                        <div class="btn-group col-12 ceroPadding " id="redes" role="group" aria-label="Basic example">
                            <button type="button" onclick="ModalFacebook()" data-toggle="modal" data-target="#FacebookModal" class="btn btn-facebook">facebook/</button>
                            <div class="input-group-text" id="btnGroupAddon">@</div>
                            <input type="text" class="form-control" disabled placeholder="${respuesta[0].Facebook}" aria-label="Input group example" aria-describedby="btnGroupAddon">
                        </div>
                    </div>
                    <div>
                        <div class="btn-group col-12 ceroPadding " id="redes" role="group" aria-label="Basic example">
                            <button type="button" onclick="ModalTwitter()" data-toggle="modal" data-target="#TwitterModal" class="btn btn-twitter">twitter.com/</button>
                            <div class="input-group-text" id="btnGroupAddon">@</div>
                            <input type="text" class="form-control" disabled placeholder="${respuesta[0].Twitter}" aria-label="Input group example" aria-describedby="btnGroupAddon">
                        </div>
                    </div>
                    <div>
                        <div class="btn-group col-12 ceroPadding " id="redes" role="group" aria-label="Basic example">
                            <button type="button" onclick="ModalInstagram()" data-toggle="modal" data-target="#InstagramModal" class="btn btn-instagram">instagram.com/</button>
                            <div class="input-group-text" id="btnGroupAddon">@</div>
                            <input type="text" class="form-control" disabled placeholder="${respuesta[0].instagram}" aria-label="Input group example" aria-describedby="btnGroupAddon">
                        </div>
                    </div>
                </div>
            `));
        },
        error:function(respuesta){
            console.log("Error");
        }
    });
});
function cerrarSesion(){
    UsuarioImport="";
    localStorage.clear();
    window.location.assign("../../index.html");
}
function generarinfo(){
    $("#Información").html($( `
    <div class="col-sm-10 col-md-10 col-lg-7 col-xl-7 col-12  margenDivInfo">
        <h1 class="TextPrincipal  textinfo col-12">Nombre Empresa Actual</h1>
        <h1 class="TextSecundario  textinfo col-12">${UsuarioGeneral[0].NombreEmpresa}</h1>
        <input class="col-sm-8 col-md-8 col-lg-8 col-xl-6 col-12 btn btn-primary" data-toggle="modal" data-target="#NombreModal" onclick="ModalNombre()" type="button" value="Cambiar Nombre">
        <div id="generarNombre" class="col-12 row" style="padding-top: 10px;">
            
        </div>
    </div>
    <div class="col-sm-10 col-md-10 col-lg-7 col-xl-7 col-12  margenDivInfo">
        <h1 class="TextPrincipal  textinfo col-12">Correo Actual</h1>
        <h1 class="TextSecundario  textinfo col-12">${UsuarioGeneral[0].Email}</h1>
        <input class="col-sm-8 col-md-8 col-lg-8 col-xl-6 col-12 btn btn-primary" data-toggle="modal" data-target="#CorreoModal" onclick="ModalCorreo()" type="button" value="Cambiar Correo">
        <div id="generarCorreo" class="col-12 row" style="padding-top: 10px;"></div>
    </div>
    <div class="col-sm-10 col-md-10 col-lg-7 col-xl-7 col-12  margenDivInfo">
        <h1 class="TextPrincipal  textinfo col-6">Contraseña cambiar</h1>
        <h1 class="TextSecundario  textinfo col-6">"${UsuarioGeneral[0].password}"</h1>
        <input class="col-sm-8 col-md-8 col-lg-8 col-xl-6 col-12 btn btn-primary" data-toggle="modal" data-target="#ContraseñaModal" onclick="ModalContraseña()" type="button" value="Cambiar Contraseña">
        <div id="generarContraseña" class="col-12 row " style="padding-top: 10px;"></div>
    </div>
    <div class="col-sm-10 col-md-10 col-lg-7 col-xl-7 col-12  margenDivInfo">
        <h1 class="TextPrincipal  textinfo col-12">Telefono Actual</h1>
        <div id="allTel" class="col-12">
            <h1 class="TextSecundario  textinfo col-12">${UsuarioGeneral[0].Telefono}</h1>
        </div>
        <input class="col-sm-8 col-md-8 col-lg-8 col-xl-6 col-12 btn btn-primary" data-toggle="modal" data-target="#TelefonoModal" onclick="ModalTelefono()" type="button" value="Cambiar o Agregar Telefonos">
        <div id="generarTelefono" class="col-12 row" style="padding-top: 10px;">
            
        </div>
    </div>  
    `));
}
function ModalNombre(){
    $("#generarNombre").html($( `
        <input type="text" class="col-sm-8 col-md-8 col-lg-8 col-xl-6 col-12" name="" id="NombreTextCambiar" style="font-size: 1.2rem" class="form-control textContrasenias" placeholder="Nombre Nuevo">
        <div class="col-12">
            <input class="col-sm-8 col-md-8 col-lg-8 col-xl-6 col-12 btn-danger" onclick="guardarDatosNombreUsuario()" id="ButtonGuardar" type="button" value="Guardar">
        </div>
    `));
    
} 
function guardarDatosNombreUsuario(){
    var parametros = 
    'NombreActual='+ UsuarioGeneral[0].NombreEmpresa+"&"+
    'NombreEmpresa='+$("#NombreTextCambiar").val()+"&"+
    'LLave='+ llaveImport;
    console.log(parametros)
    $.ajax({
        url:"ajax/Usuario.php?accion=CambiarNombre",
        method:"POST",
        dataType:"json",
        data: parametros,
        success:function(respuesta){
            console.log(respuesta);
        },
        error:function(respuesta){
            console.log("Error");
        }
    });
}
function ModalCorreo(){
    $("#generarCorreo").html($( `
        <input type="text" name="" id="Correo" id="inputSuccess" style="font-size: 1.2rem" class="col-sm-8 col-md-8 col-lg-8 col-xl-6 col-12 form-control textContrasenias" placeholder="Correo Nuevo">
        <div class="col-12">
            <input onclick="guardarDatosCorreoUsuario()" class="col-sm-8 col-md-8 col-lg-8 col-xl-6 col-12 btn-danger" id="ButtonGuardar" type="button" value="Guardar">
        </div>
    `));
}
function ModalTelefono(){
    $("#generarTelefono").html($( `
            <input type="tel" name="" id="NuevoTelefono" id="inputSuccess" style="font-size: 1.2rem" class="form-control textContrasenias col-sm-8 col-md-8 col-lg-8 col-xl-6 col-12" placeholder="Nuevo Numero Telefonico">
            <div class="col-12">
                <input onclick="guardarDatosTelefonoUsuario()" class="col-sm-8 col-md-8 col-lg-8 col-xl-6 col-12 btn-danger" id="ButtonGuardar" type="button" value="Guardar">
            </div>
    `));
}
function ModalContraseña(){
    $("#generarContraseña").html($( `
            <form class="form-horizontal col-12 row">
                <div class="form-group has-success has-feedback">
                    <label class="col-sm-2 control-label" for="inputSuccess"></label>
                    <div class="col-sm-12">
                        <input type="password" name="" id="Contraseña" id="inputSuccess" style="font-size: 1.2rem" class="form-control textContrasenias col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12" onchange="ContraseñaLocal()" placeholder="Contraseña Anterior">
                        <div id="generarSpanContaseñaVieja" class="col-12"></div>
                    </div>
                </div>
                <div id="contentContaseñaLocal"></div>
            </form>
            <form class="form-horizontal col-12 row">
                <div class="form-group has-success has-feedback">
                    <label class="col-sm-2 control-label" for="inputSuccess"></label>
                    <div class="col-sm-12">
                        <input type="password" name="" id="ContraseñaN" id="inputSuccess" style="font-size: 1.2rem" class="form-control textContrasenias col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12" onchange="vercambio()" placeholder="Contraseña Nueva">
                        <div id="generarSpanContaseñaNueva" class="col-12"></div>
                    </div>
                </div>
            </form>
            <form class="form-horizontal col-12 row">
                <div class="form-group has-success has-feedback">
                    <label class="col-sm-2 control-label" for="inputSuccess"></label>
                    <div class="col-sm-12">
                        <input type="password" name="" id="ContraseñaC" id="inputSuccess" style="font-size: 1.2rem" class="form-control textContrasenias col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12" onchange="vercambio()" placeholder="Contraseña Nueva">
                        <div id="generarSpanContaseñaNueva" class="col-12"></div>
                    </div>
                </div>
            </form>
        <div style="height: 70px;"class="row col-12"><div id="contenidoRespuesta" class="col-12"></div></div>
        <div class="li-form-iniciar-seccion col-12" id="confi_li_checkbutton">
            <input type="checkbox" name="" id="Checkbutton" onclick="VerContraseña()" class="ng-valid ng-dirty ng-valid-parse ng-touched ng-not-empty" >
            <span style="font-size: 15px" class="span_line"> Recuérdame</span>
        </div>
        <div>
            <input type="button" class="btn-danger" id="ButtonGuardar" value="Guardar">
        </div>
    `));
}
function VerContraseña() {
    var x = document.getElementById('Contraseña');
    var y = document.getElementById('ContraseñaN');
    var z = document.getElementById('ContraseñaC') ;
    if (x.type === "password"||y.type === "password"||z.type === "password") {
      x.type = "text";
      y.type = "text";
      z.type = "text";
    } else {
        x.type = "password";
        y.type = "password";
        z.type = "password";
    };
}
function vercambio(){
    var y = $("#ContraseñaN").val();
    var z = $("#ContraseñaC").val();
    if(y==z){
        $('#generarSpanContaseñaNueva').html($(`<span class="glyphicon glyphicon-ok form-control-feedback"></span>`));
        $("#contenidoRespuesta").html($(`<h1 class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-2 " id="respuestaCorrecta">ok</h1><img class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-2 " src="img/icon/check.png" alt="">`));
    }else{
        $('#generarSpanContaseñaNueva').html($(`<span class="glyphicon glyphicon-remove form-control-feedback"></span>`));
        $("#contenidoRespuesta").html($(`
        <h1 class="col-sm-8 col-md-8 col-lg-8 col-xl-8 col-8 " id="respuestaIncorrecta">contraseña no coinciden</h1>
        <img class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-2 " id="imgCheckNot"src="img/icon/checknot.png" alt="">
        `));
    };
}
function ContraseñaLocal(){
    var x = $('#Contraseña').val();
    console.log(x);
    if(x!=""){
        $('#generarSpanContaseñaVieja').html($(`<span class="glyphicon glyphicon-ok form-control-feedback"></span>`));
        $('#contentContaseñaLocal').html($(`<div id="textContraseñaLocal">ok</div>`));
        $("#textContraseñaLocal").css({"color":"white"});
    }else{
        $('#generarSpanContaseñaVieja').html($(`<span class="glyphicon glyphicon-remove form-control-feedback"></span>`));
        $('#contentContaseñaLocal').html($(`<div id="textContraseñaLocal">campo Obligatorio</div>`));
        $("#textContraseñaLocal").css({"color":"red"});
    };
}
var datos =[];
$('#ButtonGuardar').click(function(){
        datos={
        contaseñaVieja: $('#Contraseña').val(),
        contaseñaNueva1: $("#ContraseñaN").val(),
        contaseñaNueva2: $("#ContraseñaC").val()
    };
    console.log(datos);
    alert("YA ha SIDO GUARDADA");
});
function ModalSexo(){
    $("#GenerarModal").html($( `
    <div class="modal fade" id="SexoModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document" >
        <div class="modal-content">
            <div class="modal-body">
                <div class="container-fluid" >
                    <div class="row">
                        <ul class="UlConfModal">
                            <li><span id="TittleModal">Editar</span></li>
                            <li><span class="content-text">Genero Actual:<span class="content-text" id="colorinfoUsuarioViejo"> Masculino</span></span></li>
                            <li><select class="select-css" id="select-css" onchange="selectSexo()">
                                    <option value="0">Seccione un Elemento</option>
                                    <option value="1">Masculino</option>
                                    <option value="2">Femenino</option>
                                    <option  value="3">Otros</option>
                                    <div id="otrosGenero"></div>
                                </select>
                                <div id="infoOtros">
                                </div>
                            </li>
                            <li><input onclick="guardarDatosCorreoUsuario()" class="btn-danger" id="ButtonGuardar" type="button" value="Guardar"></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    `));
}
function selectSexo(){
    var x = $("#select-css").val();
    if(x==3){
        $("#infoOtros").html($(`
        <form class="form-horizontal">
            <div class="form-group has-success has-feedback">
                <label class="col-sm-2 control-label" for="inputSuccess"></label>
                <div class="col-sm-12">
                    <input type="text" name="" id="NuevoGenero" id="inputSuccess" style="font-size: 1.2rem" class="form-control textContrasenias" placeholder="Nombre Nuevo">
                </div>
            </div>
        </form>
        `));
    }else{
        $("#infoOtros").html($(``));
    };
}
 function guardarDatosGeneroUsuario(){
    var x = $("#select-css").val();
    console.log(x);
    if(x==3){
        console.log($("#NuevoGenero").val());
        var parametros = [];
        parametros={
            nuevosGenero: $("#NuevoGenero").val()
        };
        console.log(parametros);
    }else{

    };
 }
 

function guardarDatosTelefonoUsuario(){
    var tel = $("#NuevoTelefono").val();
    console.log(tel); 
}
function ModalGPS(){
    $("#Información").html($( `
        <div class="col-sm-10 col-md-12 col-lg-10 col-xl-10 col-12" id="centerGooGlemaps">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3869.5466889809295!2d-87.19663958472394!3d14.103916292835082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2shn!4v1566495508897!5m2!1ses!2shn" class="GoogleMaps" width="600" height="450" frameborder="0"  allowfullscreen></iframe>
        </div>
    `));
}
function ModalTarjeta(){
    $("#GenerarModal").html($( `
    <div class="modal fade" id="TarjetaModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document" >
            <div class="modal-content">
                <div class="modal-body">
                    <div class="container-fluid" >
                        <div class="row">
                            <ul class="UlConfModal" id="nuevoTextTarjeta">
                                <li><span id="TittleModal">Editar</span></li>
                                <li><span class="content-text">Tarjeta Actual:<span class="content-text" id="colorinfoUsuarioViejo"> XXXX-XXXX-XXXX-2989</span></span></li>
                                <li>
                                    <span class="content-text">
                                        <form class="form-horizontal">
                                            <div class="form-group has-success has-feedback">
                                                <label class="col-sm-2 control-label" for="inputSuccess"></label>
                                                <div class="col-sm-12">
                                                    <input style="display: block;" type="button" value="Datos nuevos tarjeta" class="btn btn-secondary buttonModalTarjeta" id="buttonNuevosAtribustosTarjeta" >
                                                    <!--input type="tel" name="" id="NuevoTelefono" id="inputSuccess" style="font-size: 1.2rem" class="form-control textContrasenias" placeholder="Nuevo Numero Telefonico"-->
                                                </div>
                                            </div>
                                        </form>
                                    </span>
                                </li>
                                <li><button style="display: block;" type="button" class="btn btn-danger buttonModalTarjeta" data-dismiss="modal">Close</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `));
    NuevosAtribustosTarjeta();
}
function NuevosAtribustosTarjeta(){
    $('#buttonNuevosAtribustosTarjeta').click(function(){
        $("#nuevoTextTarjeta").html($(`
        <li>
            <form class="form-horizontal">
                <div class="form-group has-success has-feedback">
                    <label class="col-sm-2 control-label" for="inputSuccess"></label>
                    <div class="col-sm-12">
                        <input type="text" name="" id="NuevoDatoTarjeta" id="inputSuccess" style="font-size: 1.4rem" class="form-control cajastext" placeholder="Nuevo Numero de Tarjera">
                    </div>
                </div>
            </form>
        </li>
        <li>
            <form class="form-horizontal">
                <div class="form-group has-success has-feedback">
                    <label class="col-sm-1.4 control-label" for="inputSuccess"></label>
                    <div class="col-sm-6">
                        <input type="password" name="" id="NuevoDatoTarjetaPin" id="inputSuccess" style="font-size: 1.4rem" class="form-control cajastext" placeholder="Nuevo Pin">
                    </div>
                </div>
            </form>
        </li>
        <li>
            <span class="content-text">
                <form class="form-horizontal">
                    <div class="form-group has-success has-feedback">
                        <label class="col-sm-2 control-label" for="inputSuccess"></label>
                        <div class="col-sm-12">
                            <input style="display: block;" type="button" value="ir atras" class="btn btn-secondary buttonModalTarjeta" id="buttonAnterioresAtribustosTarjeta" >
                        </div>
                    </div>
                </form>
            </span>
        </li>
    `));
    AtribustosAnteriorTarjeta();
    });
};

function AtribustosAnteriorTarjeta(){
    
    $('#buttonAnterioresAtribustosTarjeta').click(function(){
        var datosTarjeta=[];
        datosTarjeta ={
            NuevoDatoTarjeta: $("#NuevoDatoTarjeta").val(), 
            NuevoDatoTarjetaPin: $("#NuevoDatoTarjetaPin").val()
        };
        console.log(datosTarjeta);
        console.log("entro");
        $("#nuevoTextTarjeta").html($(`
            <li><span id="TittleModal">Editar</span></li>
            <li><span class="content-text">Tarjeta Actual:<span class="content-text" id="colorinfoUsuarioViejo"> ${datosTarjeta.NuevoDatoTarjeta}</span></span></li>
            <li><input type="button" onclick"location.reload()" type="button" style="display: block;" class="btn btn-warning buttonModalTarjeta" data-dismiss="modal" value="Close" ></li>
            <script src="js/controlador.js"></script>
        `));
    });
}

function ModalFacebook(){
    $("#GenerarModal").html($( `
    <div class="modal fade" id="FacebookModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog" role="document" >
<div class="modal-content">
  <div class="modal-body">
  </div>
</div>
</div>
</div>
    `));
}
function ModalTwitter(){
    $("#GenerarModal").html($( `
    <div class="modal fade" id="TwitterModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog" role="document" >
<div class="modal-content">
  <div class="modal-body">
  </div>
</div>
</div>
</div>
    `));
}
function ModalInstagram(){
    $("#GenerarModal").html($( `
    <div class="modal fade" id="InstagramModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog" role="document" >
<div class="modal-content">
  <div class="modal-body">
  </div>
</div>
</div>
</div>
    `));
}
//funciones para modaly