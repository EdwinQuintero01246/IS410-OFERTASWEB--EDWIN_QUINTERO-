
function ModalNombre(){
    $("#GenerarModal").html($( `
    <div class="modal fade" id="NombreModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document" >
            <div class="modal-content">
                <div class="modal-body">
                    <div class="container-fluid" >
                        <div class="row">
                            <ul class="UlConfModal">
                                <li><span class="tittle" >Editar</span></li>
                                <li><span class="content-text">Nombre Actual:<span class="content-text">$</span></span></li>
                                <li><span class="content-text">Nombre Nuevo: <input type="text" name="" id="Nombre"></span></li>
                                <li><a href="javascript:document.location.reload();" onclick="guardar()"><button class="btn-danger" id="ButtonGuardar">Guardar</button></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `));
}
function ModalCorreo(){
    $("#GenerarModal").html($( `
    <div class="modal fade" id="CorreoModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document" >
            <div class="modal-content">
                <div class="modal-body">
                    <div class="container-fluid" >
                        <div class="row">
                            <ul class="UlConfModal">
                                <li><span class="tittle" >Editar</span></li>
                                <li><span class="content-text">Correo Actual:<span class="content-text">$</span></span></li>
                                <li><span class="content-text">Correo Nuevo: <input type="text" name="" id="Nombre"></span></li>
                                <li><a href="javascript:document.location.reload();" onclick="guardar()"><button class="btn-danger" id="ButtonGuardar">Guardar</button></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `));
}
function ModalContraseña(){
    $("#GenerarModal").html($( `
    <div class="modal fade" id="ContraseñaModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document" >
            <div class="modal-content">
                <div class="modal-body">
                    <div class="container-fluid" >
                        <div class="row">
                            <ul class="UlConfModal">
                                <li><span class="tittle" >Editar</span></li>
                                <li><span class="content-text">Contraseña Anterior: <input type="password" name="" id="Contraseña"></span></li>
                                <li><span class="content-text">Contraseña Nueva: <input type="password" name="" id="ContraseñaN"></span></li>
                                <li><span class="content-text">Contraseña Nueva: <input type="password" name="" id="ContraseñaC"></span></li>
                                <li class="li-form-iniciar-seccion" id="confi_li_checkbutton">
                                    <input type="checkbox" name="" id="Checkbutton" onclick="VerContraseña()" class="ng-valid ng-dirty ng-valid-parse ng-touched ng-not-empty" >
                                    <span  class="span_line"> Recuérdame</span>
                                </li>
                                <li><a href="javascript:document.location.reload();" onclick="guardar()"><button class="btn-danger" id="ButtonGuardar">Guardar</button></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
        $("#contenidoRespuesta").html($(`<h1 class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-2 " id="respuestaCorrecta">ok</h1><img class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-2 " src="img/icon/check.png" alt="">`));
    }else{
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
        $('#generar').html($(`<span class="glyphicon glyphicon-ok form-control-feedback"></span>`));
        $('#contentContaseñaLocal').html($(`<div id="textContraseñaLocal">ok</div>`));
        $("#textContraseñaLocal").css({"color":"white"});
    }else{
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
});
function ModalSexo(){
    $("#GenerarModal").html($( `
    <div class="modal fade" id="SexoModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog" role="document" >
<div class="modal-content">
  <div class="modal-body">
  </div>
</div>
</div>
</div>
    `));
}
function ModalTelefono(){
    $("#GenerarModal").html($( `
    <div class="modal fade" id="TelefonoModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog" role="document" >
<div class="modal-content">
  <div class="modal-body">
  </div>
</div>
</div>
</div>
    `));
}
function ModalGPS(){
    $("#GenerarModal").html($( `
    <div class="modal fade" id="GPSModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog" role="document" >
<div class="modal-content">
  <div class="modal-body">
  </div>
</div>
</div>
</div>
    `));
}
function ModalTarjeta(){
    $("#GenerarModal").html($( `
    <div class="modal fade" id="TarjetaModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog" role="document" >
<div class="modal-content">
  <div class="modal-body">
  </div>
</div>
</div>
</div>
    `));
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
//funciones para modal