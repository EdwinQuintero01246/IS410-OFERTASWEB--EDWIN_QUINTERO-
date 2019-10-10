$(document).ready(function(){
    UsuarioImport = localStorage.getItem("NombreEmpresa");
    UsuarioImportTotal = localStorage.getItem("NombreEmpresa");
    if(UsuarioImport==null){
        alert("Inicie Seccion Primero");
        window.location.assign("../../index.html");
    };
    UsuarioImport=UsuarioImport+" "+localStorage.getItem("Apellido");
    $("#nombreUsuario").html($(`
    <a class="nav-button-option-navbar" href="#${UsuarioImport}">${UsuarioImport}</a>
    `));
    var parametro = 'NambreUsuario'+ UsuarioImportTotal;
    $.ajax({
        url:"ajax/Empresa.php?accion=ObtenerEmpresa",
        method:"POST",
        dataType: "json",
        data: parametro,
        success:function(respuesta){
            usuarioGenerarInfo = respuesta;
            
            $("#div-class-option").html($(`
            `));
            for(var i=0;i<respuesta.length;i++){
                $("#div-class-option").append($(`
                <div class="col-12 row heightButtonEmpresa">
                    <button type="button" onclick="VerEmpresa(${i})" class="col-10 OpcionesButtonEmpresa">${respuesta[i].NombreEmpresa}</button>
                    <div class="col-2 OpcionesHeart" style="padding-left: 0px; padding-right: 0px;">
                        <img onclick="SeguirEmpresa(${i})" src="img/icon/heartLleno.png" alt="icono" id="TamanioImgButtonEmpresa">
                    </div>
                </div>
                `));
            }
        },
        error:function(respuesta){
            console.log("error")
        }
    });
});
function cerrarSesion(){
    UsuarioImport="";
    localStorage.clear();
    window.location.assign("../../index.html");
}
var usuarioGenerarInfo=[]
function VerEmpresa(i){
    $("#div-class-perfil").html($(`
        <div class="col-12">
            <img class="tamanio_visualizacion-banner" style="width: 100%" src="../emp-perfil/img/logo-empresa/banner.png">
        </div>
        <div class="col-12 row">
            <div class="col-4">
                <a data-toggle="modal" data-target="#exampleModal">
                    <img class="tamanio_visualizacion-perfil" src="../emp-perfil/img/logo-empresa/logo.png">
                </a>
            </div>
            <div class="col-8">
                <div><h3 class="tittle">Nombre: ${usuarioGenerarInfo[i].NombreEmpresa}</h3></div>
                <div><h3 class="tittle">${usuarioGenerarInfo[i].DescripcionMuro}</h3></div>
                <div><h3 class="tittle">${usuarioGenerarInfo[i].Dirreccion},${usuarioGenerarInfo[i].Ciudad} ,${usuarioGenerarInfo[i].país} </h3></div>
                <div class="row">
                        <h3 class="tittle col-12">redes sociales</h3>
                        <div class="col-12">
                            <div class="btn-group" role="group" aria-label="Basic example" style="width: 100%;">
                                <button type="button" class="btn btn-facebook">facebook/</button>
                                <div class="input-group-text" id="btnGroupAddon">@</div>
                                <input type="text" disabled class="form-control" placeholder="${usuarioGenerarInfo[i].Facebook}" aria-label="Input group example" aria-describedby="btnGroupAddon">
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="btn-group" role="group" aria-label="Basic example" style="width: 100%;">
                                <button type="button" class="btn btn-twitter">twitter.com/</button>
                                <div class="input-group-text" id="btnGroupAddon">@</div>
                                <input type="text" disabled class="form-control" placeholder="${usuarioGenerarInfo[i].Twitter}" aria-label="Input group example" aria-describedby="btnGroupAddon">
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="btn-group" role="group" aria-label="Basic example" style="width: 100%;">
                                <button type="button" class="btn btn-instagram">instagram.com/</button>
                                <div class="input-group-text" id="btnGroupAddon">@</div>
                                <input type="text" disabled class="form-control" placeholder="${usuarioGenerarInfo[i].instagram}" aria-label="Input group example" aria-describedby="btnGroupAddon">
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    `));
}
function SeguirEmpresa(i){
    var parametro=
    'NombreEmpresa='+ usuarioGenerarInfo[i].NombreEmpresa+"&"+
    'llave=' + localStorage.getItem("llave")+"&"+
    'NombreUsuario='+UsuarioImportTotal;
    console.log(parametro);
    $.ajax({
        url:"ajax/Empresa.php?accion=GuardarSeguido",
        method:"POST",
        dataType: "json",
        data: parametro,
        success:function(respuesta){
            console.log(respuesta);
        },
        error:function(respuesta){
            console.log("error");
        }
    });
}