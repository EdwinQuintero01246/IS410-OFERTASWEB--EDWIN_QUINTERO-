
function ModalNombre(){
    $("#GenerarModal").html($( `
    <div class="modal fade" id="NombreModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document" >
            <div class="modal-content">
                <div class="modal-body">
                    <div class="container-fluid" >
                        <div class="row">
                            <ul class="UlConfModal">
                                <li><span class="tittle" id="tittleModal">Editar</span></li>
                                <li><span class="content-text">Nombre Actual:<span class="content-text" id="colorinfoUsuarioViejo"> Mrs. Robot</span></span></li>
                                <li>
                                    <span class="content-text">
                                        <form class="form-horizontal">
                                            <div class="form-group has-success has-feedback">
                                                <label class="col-sm-2 control-label" for="inputSuccess"></label>
                                                <div class="col-sm-12">
                                                    <input type="text" name="" id="Nombre" id="inputSuccess" style="font-size: 2rem" class="form-control textContrasenias" placeholder="Nombre Nuevo">
                                                    <div id="generarSpanContaseñaNueva"></div>
                                                </div>
                                            </div>
                                        </form>
                                    </span>
                                </li>
                                <li><input onclick="guardarDatosNombreUsuario()" class="btn-danger" id="ButtonGuardar" type="button" value="Guardar"></li>
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
                                <li><span class="tittle" id="tittleModal">Editar</span></li>
                                <li><span class="content-text">Correo Actual:<span class="content-text" id="colorinfoUsuarioViejo"> Mrs.Robot@unah.hn</span></span></li>
                                <li>
                                    <form class="form-horizontal">
                                        <div class="form-group has-success has-feedback">
                                            <label class="col-sm-2 control-label" for="inputSuccess"></label>
                                            <div class="col-sm-12">
                                                <input type="text" name="" id="Correo" id="inputSuccess" style="font-size: 2rem" class="form-control textContrasenias" placeholder="Nombre Nuevo">
                                            </div>
                                        </div>
                                    </form>
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
function ModalContraseña(){
    $("#GenerarModal").html($( `
    <div class="modal fade" id="ContraseñaModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document" >
            <div class="modal-content">
                <div class="modal-body">
                    <div class="container-fluid" >
                        <div class="row">
                            <ul class="UlConfModal">
                                <li><span class="tittle" id="tittleModal">Editar</span></li>
                                <li>
                                    <form class="form-horizontal">
                                        <div class="form-group has-success has-feedback">
                                            <label class="col-sm-2 control-label" for="inputSuccess"></label>
                                            <div class="col-sm-12">
                                                <input type="password" name="" id="Contraseña" id="inputSuccess" style="font-size: 2rem" class="form-control textContrasenias" onchange="ContraseñaLocal()" placeholder="Contraseña Anterior">
                                                <div id="generarSpanContaseñaVieja"></div>
                                            </div>
                                        </div>
                                        <div id="contentContaseñaLocal"></div>
                                    </form>
                                </li>
                                <li>
                                    <form class="form-horizontal">
                                        <div class="form-group has-success has-feedback">
                                            <label class="col-sm-2 control-label" for="inputSuccess"></label>
                                            <div class="col-sm-12">
                                                <input type="password" name="" id="ContraseñaN" id="inputSuccess" style="font-size: 2rem" class="form-control textContrasenias" onchange="vercambio()" placeholder="Contraseña Nueva">
                                                <div id="generarSpanContaseñaNueva"></div>
                                            </div>
                                        </div>
                                    </form>
                                </li>
                                <li>
                                    <form class="form-horizontal">
                                        <div class="form-group has-success has-feedback">
                                            <label class="col-sm-2 control-label" for="inputSuccess"></label>
                                            <div class="col-sm-12">
                                                <input type="password" name="" id="ContraseñaC" id="inputSuccess" style="font-size: 2rem" class="form-control textContrasenias" onchange="vercambio()" placeholder="Contraseña Nueva">
                                                <div id="generarSpanContaseñaNueva"></div>
                                            </div>
                                        </div>
                                    </form>
                                </li>
                                <li style="height: 70px;"><div id="contenidoRespuesta"></div></li>
                                <li class="li-form-iniciar-seccion" id="confi_li_checkbutton">
                                    <input type="checkbox" name="" id="Checkbutton" onclick="VerContraseña()" class="ng-valid ng-dirty ng-valid-parse ng-touched ng-not-empty" >
                                    <span style="font-size: 15px" class="span_line"> Recuérdame</span>
                                </li>
                                <li>
                                    <input type="button" class="btn-danger" id="ButtonGuardar" value="Guardar">
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script src="js/controlador.js"></script>
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
                            <li><span class="tittle" id="tittleModal">Editar</span></li>
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
                    <input type="text" name="" id="NuevoGenero" id="inputSuccess" style="font-size: 2rem" class="form-control textContrasenias" placeholder="Nombre Nuevo">
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
 
function ModalTelefono(){
    $("#GenerarModal").html($( `
    <div class="modal fade" id="TelefonoModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document" >
            <div class="modal-content">
                <div class="modal-body">
                    <div class="container-fluid" >
                        <div class="row">
                            <ul class="UlConfModal">
                                <li><span class="tittle" id="tittleModal">Editar</span></li>
                                <li><span class="content-text">Telefono Actual:<span class="content-text" id="colorinfoUsuarioViejo"> 3247-1306</span></span></li>
                                <li>
                                    <span class="content-text">
                                        <form class="form-horizontal">
                                            <div class="form-group has-success has-feedback">
                                                <label class="col-sm-2 control-label" for="inputSuccess"></label>
                                                <div class="col-sm-12">
                                                    <input type="tel" name="" id="NuevoTelefono" id="inputSuccess" style="font-size: 2rem" class="form-control textContrasenias" placeholder="Nuevo Numero Telefonico">
                                                </div>
                                            </div>
                                        </form>
                                    </span>
                                </li>
                                <li><input onclick="guardarDatosTelefonoUsuario()" class="btn-danger" id="ButtonGuardar" type="button" value="Guardar"></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `));
}
function guardarDatosTelefonoUsuario(){
    var tel = $("#NuevoTelefono").val();
    console.log(tel); 
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
                    <div class="container-fluid" >
                        <div class="row">
                            <ul class="UlConfModal" id="nuevoTextTarjeta">
                                <li><span class="tittle" id="tittleModal">Editar</span></li>
                                <li><span class="content-text">Tarjeta Actual:<span class="content-text" id="colorinfoUsuarioViejo"> XXXX-XXXX-XXXX-2989</span></span></li>
                                <li>
                                    <span class="content-text">
                                        <form class="form-horizontal">
                                            <div class="form-group has-success has-feedback">
                                                <label class="col-sm-2 control-label" for="inputSuccess"></label>
                                                <div class="col-sm-12">
                                                    <input style="display: block;" type="button" value="Datos nuevos tarjeta" class="btn btn-secondary buttonModalTarjeta" id="buttonNuevosAtribustosTarjeta" >
                                                    <!--input type="tel" name="" id="NuevoTelefono" id="inputSuccess" style="font-size: 2rem" class="form-control textContrasenias" placeholder="Nuevo Numero Telefonico"-->
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
            <li><span class="tittle" id="tittleModal">Editar</span></li>
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
//funciones para modal