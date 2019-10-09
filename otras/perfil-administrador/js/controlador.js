var usuario=[];
var usuario1=[];
usuario=[
    {CodigoUsuario:"US12254",NombreUsuario:"Juan",Correo:"Juan1@gmail.com",LongirudyLatitud:"Tegucugalpa,Honduras",Contraseña:"soyOtronivel", 
        Compras:[
            {codigodecompras:"CP-0052", NombreUsuarioUsuario: "jetstereo", Producto:"iPad Air",Precio: 32999.00,moneda:"L."},
            {codigodecompras:"CP-1541", NombreUsuarioUsuario: "caribe comp", Producto:"iPad mini",Precio: 24999,moneda:"L."},
            {codigodecompras:"CP-5210", NombreUsuarioUsuario: "Larach y Cía", Producto:"apple watch series 3 precio",Precio: 299,moneda:"$"}
        ],
        EmpresaSeguidas:[
            {CodigoUsuarioEmpresa:"EM12254",NombreUsuarioEmpresa:"Centromatic"},
            {CodigoUsuarioEmpresa:"EM12869",NombreUsuarioEmpresa:"Ricoh"},
            {CodigoUsuarioEmpresa:"EM12884",NombreUsuarioEmpresa:"Diunsa"},
        ]},
    {CodigoUsuario:"US12255",NombreUsuario:"Juan",Correo:"Juan2@gmail.com",LongirudyLatitud:"San Pedro,Honduras",Contraseña:"Fuerajoh", 
        Compras:[
            {codigodecompras:"CP-0052", NombreUsuarioUsuario: "jetstereo", Producto:"iPad Air",Precio: 32999.00,moneda:"L."},
            {codigodecompras:"CP-1541", NombreUsuarioUsuario: "caribe comp", Producto:"iPad mini",Precio: 20999,moneda:"L."},
            {codigodecompras:"CP-5210", NombreUsuarioUsuario: "Larach y Cía", Producto:"apple watch series 3 precio",Precio: 599,moneda:"$"}
        ],
        EmpresaSeguidas:[
            {CodigoUsuarioEmpresa:"",NombreUsuarioEmpresa:""},
            {CodigoUsuarioEmpresa:"",NombreUsuarioEmpresa:""},
            {CodigoUsuarioEmpresa:"",NombreUsuarioEmpresa:""},
        ]},
    {CodigoUsuario:"US12922",NombreUsuario:"Pedro Garza",Correo:"Pedro_Garza@gmail.com",LongirudyLatitud:"Tegucugalpa,Honduras",Contraseña:"Mrs.Garza", 
        Compras:[
            {codigodecompras:"CP-0052", NombreUsuarioUsuario: "jetstereo", Producto:"iPad Air",Precio: 32999.00,moneda:"L."},
            {codigodecompras:"CP-1541", NombreUsuarioUsuario: "caribe comp", Producto:"iPad mini",Precio: 24999,moneda:"L."},
            {codigodecompras:"CP-5210", NombreUsuarioUsuario: "Larach y Cía", Producto:"apple watch series 3 precio",Precio: 599,moneda:"$"}
        ],
        EmpresaSeguidas:[
            {CodigoUsuarioEmpresa:"",NombreUsuarioEmpresa:""},
            {CodigoUsuarioEmpresa:"",NombreUsuarioEmpresa:""},
            {CodigoUsuarioEmpresa:"",NombreUsuarioEmpresa:""},
        ]},
    {CodigoUsuario:"US12922",NombreUsuario:"Pedro Garza",Correo:"Pedro_Garza@gmail.com",LongirudyLatitud:"Tegucugalpa,Honduras",Contraseña:"Mrs.Garza", 
        Compras:[
            {codigodecompras:"CP-0052", NombreUsuarioUsuario: "jetstereo", Producto:"iPad Air",Precio: 32999.00,moneda:"L."},
            {codigodecompras:"CP-1541", NombreUsuarioUsuario: "caribe comp", Producto:"iPad mini",Precio: 24999,moneda:"L."},
            {codigodecompras:"CP-5210", NombreUsuarioUsuario: "Larach y Cía", Producto:"apple watch series 3 precio",Precio: 399,moneda:"$"}
        ],
        EmpresaSeguidas:[
            {CodigoUsuarioEmpresa:"",NombreUsuarioEmpresa:""},
            {CodigoUsuarioEmpresa:"",NombreUsuarioEmpresa:""},
            {CodigoUsuarioEmpresa:"",NombreUsuarioEmpresa:""},
        ]},
]
var empresas=[];
var empresas1=[];
empresas=[
    {CodigoUsuarioEmpresa:"EM12254",NombreUsuarioEmpresa:"Centromatic",Correo:"Centromatic@gmail.com",LongirudyLatitud:"Tegucugalpa,Honduras",Contraseña:"MejorContra",
        Ventas:[
            {codigodecompras:"CP-0052", NombreUsuarioUsuario: "Juan Perez", Producto:"iPad Air",Precio: 32999.00,moneda:"L."},
            {codigodecompras:"CP-1541", NombreUsuarioUsuario: "Maria Padilla", Producto:"iPad mini",Precio: 24999,moneda:"L."},
            {codigodecompras:"CP-5210", NombreUsuarioUsuario: "Fuera Joh", Producto:"apple watch series 3 precio",Precio: 399,moneda:"$"}
        ]},
    {CodigoUsuarioEmpresa:"EM12869",NombreUsuarioEmpresa:"Ricoh",Correo:"Ricoh@gmail.com",LongirudyLatitud:"San Pedro,Honduras",Contraseña:"Ricohh",
        Ventas:[
            {codigodecompras:"CP-0052", NombreUsuarioUsuario: "Juan Perez", Producto:"iPad Air",Precio: 32999.00,moneda:"L."},
            {codigodecompras:"CP-1541", NombreUsuarioUsuario: "Maria Padilla", Producto:"iPad mini",Precio: 24999,moneda:"L."},
            {codigodecompras:"CP-5210", NombreUsuarioUsuario: "Fuera Joh", Producto:"apple watch series 3 precio",Precio: 399,moneda:"$"}
        ]},
    {CodigoUsuarioEmpresa:"EM12884",NombreUsuarioEmpresa:"Diunsa",Correo:"Diunsa@gmail.com",LongirudyLatitud:"Tegucugalpa,Honduras",Contraseña:"1234",
        Ventas:[
            {codigodecompras:"CP-0052", NombreUsuarioUsuario: "Juan Perez", Producto:"iPad Air",Precio: 32999.00,moneda:"L."},
            {codigodecompras:"CP-1541", NombreUsuarioUsuario: "Maria Padilla", Producto:"iPad mini",Precio: 24999,moneda:"L."},
            {codigodecompras:"CP-5210", NombreUsuarioUsuario: "Fuera Joh", Producto:"apple watch series 3 precio",Precio: 399,moneda:"$"}
        ]},
]
var indice=0;
/*usuario*/
function buttonUsuario(){
    generarTablainformacion();
    generarUsuario();
    comprobarTamañoDiv();
}
function generarTablainformacion(){
    $("#colInfo").html($(`
        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12 " id="div-class-content">
            <form class="form-inline my-2 my-lg-0" id="barra-busqueda">
                <input class="form-control mr-sm-1" onchange="BuscarUsuario()" id="Text-Busqueda-Producto" type="search" placeholder="Usuario" aria-label="Search">
                <input type="button" value="Buscar" onclick="BuscarUsuario()" class=" btn-primarys buttonBusqueda">
            </form>
        </div>
        <ul class="ul_conf" id="colInfo2">
            <li class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12 liConfInfo1">
                <div class="col-sm-6 col-md-3 col-lg-1 col-xl-1 col-6">
                    <h2 class="textInfo">Codigo usuario</h2>
                </div>
                <div class="col-sm-6 col-md-3 col-lg-2 col-xl-2 col-6">
                    <h2 class="textInfo">Nombre Usuario</h2>
                </div>
                <div class="col-sm-6 col-md-3 col-lg-3 col-xl-3 col-6">
                    <h2 class="textInfo">Correo</h2>
                </div>
                <div class="col-sm-6 col-md-6 col-lg-4 col-xl-4 col-6">
                    <h2 class="textInfo">Longirud y Latitud</h2>
                </div>
                <div class="col-sm-6 col-md-3 col-lg-2 col-xl-2 col-6">
                    <h2 class="textInfo">Contraseña</h2>
                </div>
            </li>
        </ul>
    `));
}
function generarUsuario(){
    
    $.ajax({
        url:"ajax/Usuario.php?accion=generaraUsuario",
        method:"POST",
        dataType:"json",
        success:function(respuesta){
            usuario1=respuesta;
            for(var i=0 ,j=-1; i<respuesta.length;i++){
                j++;
                if(i%2==0){
                    $("#colInfo2").append($(`
                    <li class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12 liConfInfo2a liConfInfo2Comun">
                        <div class="col-sm-12 col-md-3 col-lg-1 col-xl-1 col-6">
                            <h2 class="textInfo">US0000${i+1}</h2>
                        </div>
                        <div class="col-sm-5 col-md-3 col-lg-2 col-xl-2 col-6">
                            <a href="#${respuesta[i].NombreUsuario}" onclick="verButonesUsuario(${j})" class="textInfo textA">${respuesta[i].NombreUsuario}</a>
                        </div>
                        <div class="col-sm-6 col-md-3 col-lg-3 col-xl-3 col-6">
                            <h2 class="textInfo">${respuesta[i].Email}</h2>
                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-4 col-xl-4 col-6">
                            <h2 class="textInfo">${respuesta[i].ciudad},${respuesta[i].país}</h2>
                        </div>
                        <div class="col-sm-6 col-md-3 col-lg-2 col-xl-2 col-6">
                            <h2 class="textInfo">${respuesta[i].Password1}</h2>
                        </div>
                    </li>
                    `));
                }else{
                    $("#colInfo2").append($(`
                        <li class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12 liConfInfo2b liConfInfo2Comun">
                        <div class="col-sm-12 col-md-3 col-lg-1 col-xl-1 col-6">
                            <h2 class="textInfo">US0000${i+1}</h2>
                            </div>
                            <div class="col-sm-5 col-md-3 col-lg-2 col-xl-2 col-6">
                                <a href="#${respuesta[i].NombreUsuario}" onclick="verButonesUsuario(${j})" class="textInfo textA">${respuesta[i].NombreUsuario}</a>
                            </div>
                            <div class="col-sm-6 col-md-3 col-lg-3 col-xl-3 col-6">
                                <h2 class="textInfo">${respuesta[i].Email}</h2>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-4 col-xl-4 col-6">
                                <h2 class="textInfo">${respuesta[i].ciudad},${respuesta[i].país}</h2>
                            </div>
                            <div class="col-sm-6 col-md-3 col-lg-2 col-xl-2 col-6">
                                <h2 class="textInfo">${respuesta[i].Password1}</h2>
                            </div>
                        </li>
                    </ul>
                `));
                };
            };
        },
        error:function(respuesta){
            console.log("Error");
        }
    });
    
}
function verButonesUsuario(j){
    indice=j;
    console.log( "Usuario Encontrado: " + usuario[j].NombreUsuario+"la indice es: "+indice);
    $("#contenidoButtoonUsuario").html($(`
        <input type="button" class="col-12 buttonConfInfo" value="Informacion" onclick="InformacionButton(${j})">
        <input type="button" class="col-12 buttonConfInfo" value="Compras"  onclick="ComprasButton(${j})">
        <input type="button" class="col-12 buttonConfInfo" value="Empresas a Seguir" onclick="EmpresasButton(${j})">
        <input type="button" class="col-12 buttonConfInfo" value="ver MSJ" onclick="verMSJButton(${j})">
        <input type="button" class="col-12 buttonConfInfo" value="Borrar o Advertir" onclick="BorrarButton(${j})">
    `));
    $("#colInfo").html($(`
        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12 " id="div-class-content">
            <form class="form-inline my-2 my-lg-0" id="barra-busqueda">
                <input class="form-control mr-sm-1" id="TextUsuaarioEncotrado" type="text" value="${usuario[j].NombreUsuario}" disabled>
            </form>
        </div>
        <div id="GenerarInfoUsuario">
        </div>
    `));
};
function InformacionButton(j){
    textUsuario(j);
    $("#colInfo").append($(`
        <div id="DivBanner">
            <div id="StyleBanner">
                <img src="../data/Juan/img/Banner/portada.png" style="width: 100%; height: 100%; border-radius: 3px" alt="">
            </div>
        </div>
        <div class="col-sm-5 col-md-4 col-lg-4 col-xl-3 col-6">
            <div >
                <img src="../data/Juan/img/Foto/foto.jpg"  id="FotoPerfilAdmin"  alt="">
            </div>
        </div>
        <div class="liConfInfo1" id="DivInfo">
            <div class="col-12 row liConfInfo2Comun liConfInfo2a" id="Divnombre">
                <h1 class="col-6">nombre</h1>
                <h1 class="col-6">${usuario[j].NombreUsuario}</h1>
            </div>
            <div class="col-12 row liConfInfo2Comun liConfInfo2b" id="DivCorreo">
                <h1 class="col-6">Correo</h1>
                <h1 class="col-6">${usuario[j].Correo}</h1>
            </div>
            <div class="col-12 row liConfInfo2Comun liConfInfo2a" id="DivContaseña">
                <h1 class="col-6">Contaseña</h1>
                <h1 class="col-6">${usuario[j].Contraseña}</h1>
            </div>
            <div class="col-12 row liConfInfo2Comun liConfInfo2b" id="DivTelefono">
                <h1 class="col-6">Telefono Actual</h1>
                <h1 class="col-6">98657852</h1>
            </div>
            <div class="col-12 row liConfInfo2Comun liConfInfo2a" id="DivUbicacion">
                <h1 class="col-6">Ubicacion</h1>
                <h1 class="col-6">${usuario[j].LongirudyLatitud}</h1>
            </div>
            <div class="col-12 row liConfInfo2Comun liConfInfo2b" id="DivTarjeta">
                <h1 class="col-6">Tarjeta de credito o debito</h1>
                <h1 class="col-6">XXXX-XXXX-XXXX-2989</h1>
            </div>
        </div>
        <div>
            <div class="btn-group col-12 ceroPadding " id="redes" role="group" aria-label="Basic example">
                <button type="button" onclick="ModalFacebook()" data-toggle="modal" data-target="#FacebookModal" class="btn btn-facebook col-3">facebook/</button>
                <div class="input-group-text" id="btnGroupAddon">@</div>
                <input type="text" class="form-control col-4" placeholder="redes" aria-label="Input group example" aria-describedby="btnGroupAddon">
            </div>
        </div>
        <div>
            <div class="btn-group col-12 ceroPadding " id="redes" role="group" aria-label="Basic example">
                <button type="button" onclick="ModalTwitter()" data-toggle="modal" data-target="#TwitterModal" class="btn btn-twitter col-3">twitter.com/</button>
                <div class="input-group-text" id="btnGroupAddon">@</div>
                <input type="text" class="form-control col-4" placeholder="redes" aria-label="Input group example" aria-describedby="btnGroupAddon">
            </div>
        </div>
        <div>
            <div class="btn-group col-12 ceroPadding " id="redes" role="group" aria-label="Basic example">
                <button type="button" onclick="ModalInstagram()" data-toggle="modal" data-target="#InstagramModal" class="btn btn-instagram col-3">instagram.com/</button>
                <div class="input-group-text" id="btnGroupAddon">@</div>
                <input type="text" class="form-control col-4" placeholder="redes" aria-label="Input group example" aria-describedby="btnGroupAddon">
            </div>
        </div>
    `));
}
function ComprasButton(j){
    var sumatoria=0;
    var monedaSumatoria="";
    textUsuario(j); 
    $("#colInfo").append($(`
    <ul class="ul_conf">
        <li class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12 liConfInfo1">
            <div class="col-sm-12 col-md-3 col-lg-3 col-xl-2 col-12">
                <h2 class="textInfo">Codigo de Compra</h2>
            </div>
            <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-12">
                <h2 class="textInfo">Empresa</h2>
            </div>
            <div class="col-sm-12 col-md-3 col-lg-4 col-xl-5 col-12">
                <h2 class="textInfo">Producto</h2>
            </div>
            <div class="col-sm-12 col-md-2 col-lg-2 col-xl-2 col-12">
                <h2 class="textInfo">precio</h2>
            </div>
        </li>
    </ul>
    `));
        for(var i=0; i<usuario[j].Compras.length;i++){
            $("#colInfo").append($(`
                <li class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12 liConfInfo2a liConfInfo2Comun">
                    <div class="col-sm-12 col-md-3 col-lg-3 col-xl-2 col-12">
                        <h2 class="textInfo">${usuario[j].Compras[i].codigodecompras}</h2>
                    </div>
                    <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-12">
                        <a href="#${usuario[j].Compras[i].NombreUsuarioUsuario}" class="textInfo textA"><span class="textInfoSpan"> · </span>${usuario[j].Compras[i].NombreUsuarioUsuario}</a>
                    </div>
                    <div class="col-sm-12 col-md-3 col-lg-4 col-xl-5 col-12">
                        <h2 class="textInfo">${usuario[j].Compras[i].Producto}</h2>
                    </div>
                    <div class="col-sm-12 col-md-2 col-lg-2 col-xl-2 col-12">
                        <h2 class="textInfo">${usuario[j].Compras[i].moneda} ${usuario[j].Compras[i].Precio}</h2>
                    </div>
                </li>
            `));
    };
    for(var i=0; i<usuario[j].Compras.length;i++){
        var  valor=0;
        if(usuario[j].Compras[i].moneda=="L."){
            valor=usuario[j].Compras[i].Precio;
        }if(usuario[j].Compras[i].moneda=="$"){
            valor=usuario[j].Compras[i].Precio*24.45;
        }if(usuario[j].Compras[i].moneda=="€"){
            valor=usuario[j].Compras[i].Precio*27.14;
        };
        sumatoria=valor+ sumatoria;
        monedaSumatoria="L."
    };
    var json=[];
        json={
            sumatoria: sumatoria,
            monedas: monedaSumatoria
        };
        //console.log(json);
        var localStorage = window.localStorage;
        localStorage.clear();
        localStorage.setItem("MONEDA",JSON.stringify(json));
    $("#colInfo").append($(`
        <hr>
        <li class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12 liConfInfo2a liConfInfo2Comun" style="background-color: rgb(137, 192, 219);">
            <div class="col-sm-10 col-md-9 col-lg-10 col-xl-10 col-10">
                <h2 class="textInfo" style="color: rgb(255, 255, 255)">total</h2>
            </div>
            <div class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-2">
                <h2 class="textInfo" id="SumatoriaTotal"style="color: rgb(255, 255, 255)">${monedaSumatoria} ${sumatoria}</h2>
            </div>
        </li>
    `));
}
function EmpresasButton(j){
    textUsuario(j);
    $("#colInfo").append($(`
        <div id="GenerarInfoUsuario">
        </div>
        <ul class="ul_conf">
        <li class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12 liConfInfo1">
            <div class="col-sm-12 col-md-3 col-lg-3 col-xl-2 col-12">
                <h2 class="textInfo">Codigo de Empresa</h2>
            </div>
            <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-12">
                <h2 class="textInfo">Nombre Empresa</h2>
            </div>
        </li>
    </ul>
    `));
    for(var i=0; i<usuario[j].EmpresaSeguidas.length;i++){
        $("#colInfo").append($(`
            <li class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12 liConfInfo2b liConfInfo2Comun">
                <div class="col-sm-12 col-md-3 col-lg-3 col-xl-2 col-12">
                    <h2 class="textInfo">${usuario[j].EmpresaSeguidas[i].CodigoUsuarioEmpresa}</h2>
                </div>
                <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-12">
                    <a href="#${usuario[j].EmpresaSeguidas[i].NombreUsuarioEmpresa}" class="textInfo textA"><span class="textInfoSpan"> · </span>${usuario[j].EmpresaSeguidas[i].NombreUsuarioEmpresa}</a>
                </div>
            </li>
        `));
    };
}
function verMSJButton(j){
    textUsuario(j);
    $("#colInfo").append($(`
        <div id="generarContenido">
            <div id="messegerQuintex">
                <div class="row" id="messegerQuintexRow">
                    <div class="col-4" id="usuariosMessegerButton">
                    </div>
                    <div class="col-8" style="padding-left: 0px; padding-right: 0px;">
                        <div class="col-12" id="colorContenido">
                        </div>
                        <div style="padding-left: 1px;padding-right: 1px;padding-bottom: 1px;" class="btn-group col-12" role="group" aria-label="Basic example" id="div-consola">
                            <input type="text" id="cajaTextoEnviarMSS" class="col-10" placeholder="...">
                            <input type="button" id="buttonEnviarMSS" style="border-radius: 7px;" class="btn-primarys col-2" value="Enviar">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `));
for(var i=0;i<Conversaciones.length;i++){
    $("#usuariosMessegerButton").append($(`
    <input class="col-12 empresaMessegerButton" onclick="VerCoversacion(${i})" type="button" value="${Conversaciones[i].NombreUsuarioEmpresa}">
`));
};
}
function BorrarButton(j){
    textUsuario(j);
    $("#colInfo").append($(`
        <div class="col-12 row">
            <!--Material textarea-->
            <div class="col-6 md-form amber-textarea active-amber-textarea">
                <textarea id="form19" class="md-textarea form-control" rows="3"></textarea>
                <label for="form19" style="font-size: 15px">Enviar un msj de Advertancia</label>
            </div>
            <div class="col-6">
                <input type="button" class="buttonClientes btn-primarys" value="Enviar">
                <input type="button" class="buttonClientes btn-danger" value="Borrar Usuario">
            </div>
        </div>
    `));
}
/*fin usuario*/
/*empresa*/
function buttonEmpresa(){
    comprobarTamañoDiv();
    generarTablainformacionEmpresa();
    generarEmpresa();
}

function verButonesUsuarioEmpresa(j){
    indice=j;
    console.log( "Usuario Encontrado: " + empresas[j].NombreUsuarioEmpresa+"la indice es: "+indice);
    $("#contenidoButtoonEmpresa").html($(`
        <input type="button" class="col-12 buttonConfInfo" value="Informacion" onclick="InformacionButtonEmpresa(${j})">
        <input type="button" class="col-12 buttonConfInfo" value="ventas" onclick="VentasButton(${j})">
        <input type="button" class="col-12 buttonConfInfo" value="ver Productos" onclick="ProductosButton(${j})">
        <input type="button" class="col-12 buttonConfInfo" value="ver MSJ" onclick="verMSJButtonEmpresa(${j})">
        <input type="button" class="col-12 buttonConfInfo" value="Borrar o Advertir" onclick="BorrarButtonEmpresa(${j})">
    `));
    $("#colInfo").html($(`
        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12 " id="div-class-content">
            <form class="form-inline my-2 my-lg-0" id="barra-busqueda">
                <input class="form-control mr-sm-1" id="TextUsuaarioEncotrado" type="text" value="${empresas[j].NombreUsuarioEmpresa}" disabled>
            </form>
        </div>
        <div id="GenerarInfoUsuario">
        </div>
    `));
};
function generarUsuarioBuscar(j){
    
        var i =j;
        if(i%2==0){
            $("#colInfo").append($(`
            <li class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12 liConfInfo2a liConfInfo2Comun">
                <div class="col-sm-12 col-md-3 col-lg-1 col-xl-1 col-6">
                    <h2 class="textInfo">${usuario[j].CodigoUsuario}</h2>
                </div>
                <div class="col-sm-5 col-md-3 col-lg-2 col-xl-2 col-6">
                    <a href="#${usuario[j].NombreUsuario}" onclick="verButonesUsuario(${j})" class="textInfo textA">${usuario[j].NombreUsuario}</a>
                </div>
                <div class="col-sm-6 col-md-3 col-lg-3 col-xl-3 col-6">
                    <h2 class="textInfo">${usuario[j].Correo}</h2>
                </div>
                <div class="col-sm-6 col-md-6 col-lg-4 col-xl-4 col-6">
                    <h2 class="textInfo">${usuario[j].LongirudyLatitud}</h2>
                </div>
                <div class="col-sm-6 col-md-3 col-lg-2 col-xl-2 col-6">
                    <h2 class="textInfo">${usuario[j].Contraseña}</h2>
                </div>
            </li>
            `));
        }else{
        $("#colInfo").append($(`
            <li class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12 liConfInfo2b liConfInfo2Comun">
            <div class="col-sm-12 col-md-3 col-lg-1 col-xl-1 col-6">
                <h2 class="textInfo">${usuario[i].CodigoUsuario}</h2>
                </div>
                <div class="col-sm-5 col-md-3 col-lg-2 col-xl-2 col-6">
                    <a href="#${usuario[i].NombreUsuario}" onclick="verButonesUsuario(${j})" class="textInfo textA">${usuario[i].NombreUsuario}</a>
                </div>
                <div class="col-sm-6 col-md-3 col-lg-3 col-xl-3 col-6">
                    <h2 class="textInfo">${usuario[i].Correo}</h2>
                </div>
                <div class="col-sm-6 col-md-6 col-lg-4 col-xl-4 col-6">
                    <h2 class="textInfo">${usuario[i].LongirudyLatitud}</h2>
                </div>
                <div class="col-sm-6 col-md-3 col-lg-2 col-xl-2 col-6">
                    <h2 class="textInfo">${usuario[i].Contraseña}</h2>
                </div>
            </li>
        </ul>
    `));
        };
 i++;
}
function datosBusquedaNoEncontrado(int){
    if(int==0){
        generarTablainformacion();
    }else{
        generarTablainformacionEmpresa();
    }
    $("#colInfo2").append($(`
    <li><h1 style="font-family: 'Roboto', sans-serif; color:#082041">No se encuentran datos</h1></li>
    `));
}
function generarEmpresaBuscar(j){
    var i =j;
    if(i%2==0){
        $("#colInfo").append($(`
        <li class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12 liConfInfo2a liConfInfo2Comun">
            <div class="col-sm-12 col-md-3 col-lg-1 col-xl-1 col-6">
                <h2 class="textInfo">${empresas[j].CodigoUsuarioEmpresa}</h2>
            </div>
            <div class="col-sm-5 col-md-3 col-lg-2 col-xl-2 col-6">
                <a href="#${empresas[j].NombreUsuarioEmpresa}" onclick="verButonesUsuario(${j})" class="textInfo textA">${empresas[j].NombreUsuarioEmpresa}</a>
            </div>
            <div class="col-sm-6 col-md-3 col-lg-3 col-xl-3 col-6">
                <h2 class="textInfo">${empresas[j].Correo}</h2>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-4 col-xl-4 col-6">
                <h2 class="textInfo">${empresas[j].LongirudyLatitud}</h2>
            </div>
            <div class="col-sm-6 col-md-3 col-lg-2 col-xl-2 col-6">
                <h2 class="textInfo">${empresas[j].Contraseña}</h2>
            </div>
        </li>
        `));
    }else{
    $("#colInfo").append($(`
        <li class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12 liConfInfo2b liConfInfo2Comun">
        <div class="col-sm-12 col-md-3 col-lg-1 col-xl-1 col-6">
            <h2 class="textInfo">${empresas[j].CodigoUsuarioEmpresa}</h2>
            </div>
            <div class="col-sm-5 col-md-3 col-lg-2 col-xl-2 col-6">
                <a href="#${empresas[i].NombreUsuarioEmpresa}" onclick="verButonesUsuario(${j})" class="textInfo textA">${empresas[i].NombreUsuarioEmpresa}</a>
            </div>
            <div class="col-sm-6 col-md-3 col-lg-3 col-xl-3 col-6">
                <h2 class="textInfo">${empresas[i].Correo}</h2>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-4 col-xl-4 col-6">
                <h2 class="textInfo">${empresas[i].LongirudyLatitud}</h2>
            </div>
            <div class="col-sm-6 col-md-3 col-lg-2 col-xl-2 col-6">
                <h2 class="textInfo">${empresas[i].Contraseña}</h2>
            </div>
        </li>
    </ul>
`));
    };
i++;
}
function generarTablainformacionEmpresa(){
    $("#colInfo").html($(`
        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12 " id="div-class-content">
            <form class="form-inline my-2 my-lg-0" id="barra-busqueda">
                <input class="form-control mr-sm-1" onchange="BuscarEmpresa()" id="Text-Busqueda-Producto" type="search" placeholder="Usuario" aria-label="Search">
                <input type="button" value="Buscar" onclick="BuscarEmpresa()" class=" btn-primarys buttonBusqueda">
            </form>
        </div>
        <ul class="ul_conf" id="colInfo2">
            <li class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12 liConfInfo1">
                <div class="col-sm-6 col-md-3 col-lg-1 col-xl-1 col-6">
                    <h2 class="textInfo">Codigo usuario</h2>
                </div>
                <div class="col-sm-6 col-md-3 col-lg-2 col-xl-2 col-6">
                    <h2 class="textInfo">Nombre Usuario</h2>
                </div>
                <div class="col-sm-6 col-md-3 col-lg-3 col-xl-3 col-6">
                    <h2 class="textInfo">Correo</h2>
                </div>
                <div class="col-sm-6 col-md-6 col-lg-4 col-xl-4 col-6">
                    <h2 class="textInfo">Longirud y Latitud</h2>
                </div>
                <div class="col-sm-6 col-md-3 col-lg-2 col-xl-2 col-6">
                    <h2 class="textInfo">Contraseña</h2>
                </div>
            </li>
    `));
}
function generarEmpresa(){
    
    $.ajax({
        url:"ajax/Empresa.php?accion=generarEmpresa",
        method:"POST",
        dataType:"json",
        success:function(respuesta){
            empresas1=respuesta;
            for(var i=0 ,j=-1; i<empresas1.length;i++){
                j++;
                if(i%2==0){
                    $("#colInfo2").append($(`
                    <li class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12 liConfInfo2a liConfInfo2Comun">
                        <div class="col-sm-12 col-md-3 col-lg-1 col-xl-1 col-6">
                            <h2 class="textInfo">EM000${i+1}</h2>
                        </div>
                        <div class="col-sm-5 col-md-3 col-lg-2 col-xl-2 col-6">
                            <a href="#${empresas1[i].NombreEmpresa}" onclick="verButonesUsuarioEmpresa(${j})" class="textInfo textA">${empresas1[i].NombreEmpresa}</a>
                        </div>
                        <div class="col-sm-6 col-md-3 col-lg-3 col-xl-3 col-6">
                            <h2 class="textInfo">${empresas1[i].Email}</h2>
                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-4 col-xl-4 col-6">
                            <h2 class="textInfo">${empresas1[i].ciudad},${empresas1[i].país}</h2>
                        </div>
                        <div class="col-sm-6 col-md-3 col-lg-2 col-xl-2 col-6">
                            <h2 class="textInfo">${empresas1[i].password1}</h2>
                        </div>
                    </li>
                    `));
                }else{
                    $("#colInfo2").append($(`
                        <li class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12 liConfInfo2b liConfInfo2Comun">
                            <div class="col-sm-12 col-md-3 col-lg-1 col-xl-1 col-6">
                                <h2 class="textInfo">EM000${i+1}</h2>
                            </div>
                            <div class="col-sm-5 col-md-3 col-lg-2 col-xl-2 col-6">
                                <a href="#${empresas1[i].NombreEmpresa}" onclick="verButonesUsuarioEmpresa(${j})" class="textInfo textA">${empresas1[i].NombreEmpresa}</a>
                            </div>
                            <div class="col-sm-6 col-md-3 col-lg-3 col-xl-3 col-6">
                                <h2 class="textInfo">${empresas1[i].Email}</h2>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-4 col-xl-4 col-6">
                                <h2 class="textInfo">${empresas1[i].ciudad},${empresas1[i].país}</h2>
                            </div>
                            <div class="col-sm-6 col-md-3 col-lg-2 col-xl-2 col-6">
                                <h2 class="textInfo">${empresas1[i].password1}</h2>
                            </div>
                        </li>
                    </ul>
                `));
                };
            };
        },
        error:function(respuesta){
            console.log("Error");
        }
    });
    
}
function VentasButton(j){
    var sumatoria=0;
    var monedaSumatoria=""; 
    textEmpresa(j);
    $("#colInfo").append($(`
    <ul class="ul_conf">
        <li class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12 liConfInfo1">
            <div class="col-sm-12 col-md-3 col-lg-3 col-xl-2 col-12">
                <h2 class="textInfo">Codigo de Compra</h2>
            </div>
            <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-12">
                <h2 class="textInfo">Empresa</h2>
            </div>
            <div class="col-sm-12 col-md-3 col-lg-4 col-xl-5 col-12">
                <h2 class="textInfo">Producto</h2>
            </div>
            <div class="col-sm-12 col-md-2 col-lg-2 col-xl-2 col-12">
                <h2 class="textInfo">precio</h2>
            </div>
        </li>
    </ul>
    `));
        for(var i=0; i<usuario[j].Compras.length;i++){
            $("#colInfo").append($(`
                <li class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12 liConfInfo2b liConfInfo2Comun">
                    <div class="col-sm-12 col-md-3 col-lg-3 col-xl-2 col-12">
                        <h2 class="textInfo">${usuario[j].Compras[i].codigodecompras}</h2>
                    </div>
                    <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-12">
                        <a href="#${usuario[j].Compras[i].NombreUsuarioUsuario}" class="textInfo textA"><span class="textInfoSpan"> · </span>${usuario[j].Compras[i].NombreUsuarioUsuario}</a>
                    </div>
                    <div class="col-sm-12 col-md-3 col-lg-4 col-xl-5 col-12">
                        <h2 class="textInfo">${usuario[j].Compras[i].Producto}</h2>
                    </div>
                    <div class="col-sm-12 col-md-2 col-lg-2 col-xl-2 col-12">
                        <h2 class="textInfo">${usuario[j].Compras[i].moneda} ${usuario[j].Compras[i].Precio}</h2>
                    </div>
                </li>
            `));
    };
    for(var i=0; i<usuario[j].Compras.length;i++){
        var  valor=0;
        if(usuario[j].Compras[i].moneda=="L."){
            valor=usuario[j].Compras[i].Precio;
        }if(usuario[j].Compras[i].moneda=="$"){
            valor=usuario[j].Compras[i].Precio*24.45;
        }if(usuario[j].Compras[i].moneda=="€"){
            valor=usuario[j].Compras[i].Precio*27.14;
        };
        sumatoria=valor+ sumatoria;
        monedaSumatoria="L."
    };
    var json=[];
        json={
            sumatoria: sumatoria,
            monedas: monedaSumatoria
        };
        //console.log(json);
        var localStorage = window.localStorage;
        localStorage.clear();
        localStorage.setItem("MONEDA",JSON.stringify(json));
    $("#colInfo").append($(`
        <hr>
        <li class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12 liConfInfo2a liConfInfo2Comun" style="background-color: rgb(137, 192, 219);">
            <div class="col-sm-10 col-md-9 col-lg-10 col-xl-10 col-10">
                <h2 class="textInfo" style="color: rgb(255, 255, 255)">total</h2>
            </div>
            <div class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-2">
                <h2 class="textInfo" id="SumatoriaTotal"style="color: rgb(255, 255, 255)">${monedaSumatoria} -${sumatoria}</h2>
            </div>
        </li>
    `));
}
function InformacionButtonEmpresa(j){
    textEmpresa(j);
    $("#colInfo").append($(`
        <div id="DivBanner">
            <div id="StyleBanner">
                <img src="../data/Juan/img/Banner/portada.png" style="width: 100%; height: 100%; border-radius: 3px" alt="">
            </div>
        </div>
        <div class="col-sm-5 col-md-4 col-lg-4 col-xl-3 col-6">
            <div >
                <img src="../data/Juan/img/Foto/foto.jpg"  id="FotoPerfilAdmin"  alt="">
            </div>
        </div>
        <div class="liConfInfo1" id="DivInfo">
            <div class="col-12 row liConfInfo2Comun liConfInfo2a" id="Divnombre">
                <h1 class="col-6">nombre</h1>
                <h1 class="col-6">${empresas[j].NombreUsuarioEmpresa}</h1>
            </div>
            <div class="col-12 row liConfInfo2Comun liConfInfo2b" id="DivCorreo">
                <h1 class="col-6">Correo</h1>
                <h1 class="col-6">${empresas[j].Correo}</h1>
            </div>
            <div class="col-12 row liConfInfo2Comun liConfInfo2a" id="DivContaseña">
                <h1 class="col-6">Contaseña</h1>
                <h1 class="col-6">${empresas[j].Contraseña}</h1>
            </div>
            <div class="col-12 row liConfInfo2Comun liConfInfo2b" id="DivTelefono">
                <h1 class="col-6">Telefono Actual</h1>
                <h1 class="col-6">98657852</h1>
            </div>
            <div class="col-12 row liConfInfo2Comun liConfInfo2a" id="DivUbicacion">
                <h1 class="col-6">Ubicacion</h1>
                <h1 class="col-6">${empresas[j].LongirudyLatitud}</h1>
            </div>
            <div class="col-12 row liConfInfo2Comun liConfInfo2b" id="DivTarjeta">
                <h1 class="col-6">Tarjeta de credito o debito</h1>
                <h1 class="col-6">XXXX-XXXX-XXXX-2989</h1>
            </div>
        </div>
        <div>
            <div class="btn-group col-12 ceroPadding " id="redes" role="group" aria-label="Basic example">
                <button type="button" onclick="ModalFacebook()" data-toggle="modal" data-target="#FacebookModal" class="btn btn-facebook col-3">facebook/</button>
                <div class="input-group-text" id="btnGroupAddon">@</div>
                <input type="text" class="form-control col-4" placeholder="redes" aria-label="Input group example" aria-describedby="btnGroupAddon">
            </div>
        </div>
        <div>
            <div class="btn-group col-12 ceroPadding " id="redes" role="group" aria-label="Basic example">
                <button type="button" onclick="ModalTwitter()" data-toggle="modal" data-target="#TwitterModal" class="btn btn-twitter col-3">twitter.com/</button>
                <div class="input-group-text" id="btnGroupAddon">@</div>
                <input type="text" class="form-control col-4" placeholder="redes" aria-label="Input group example" aria-describedby="btnGroupAddon">
            </div>
        </div>
        <div>
            <div class="btn-group col-12 ceroPadding " id="redes" role="group" aria-label="Basic example">
                <button type="button" onclick="ModalInstagram()" data-toggle="modal" data-target="#InstagramModal" class="btn btn-instagram col-3">instagram.com/</button>
                <div class="input-group-text" id="btnGroupAddon">@</div>
                <input type="text" class="form-control col-4" placeholder="redes" aria-label="Input group example" aria-describedby="btnGroupAddon">
            </div>
        </div>
    `));
}
function verMSJButtonEmpresa(j){
    textEmpresa(j);
    $("#colInfo").append($(`
        <div id="generarContenido">
            <div id="messegerQuintex">
                <div class="row" id="messegerQuintexRow">
                    <div class="col-4" id="usuariosMessegerButton">
                    </div>
                    <div class="col-8" style="padding-left: 0px; padding-right: 0px;">
                        <div class="col-12" id="colorContenido">
                        </div>
                        <div style="padding-left: 1px;padding-right: 1px;padding-bottom: 1px;" class="btn-group col-12" role="group" aria-label="Basic example" id="div-consola">
                            <input type="text" id="cajaTextoEnviarMSS" class="col-10" placeholder="...">
                            <input type="button" id="buttonEnviarMSS" style="border-radius: 7px;" class="btn-primarys col-2" value="Enviar">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `));
for(var i=0;i<Conversaciones.length;i++){
    $("#usuariosMessegerButton").append($(`
    <input class="col-12 empresaMessegerButton" onclick="VerCoversacion(${i})" type="button" value="${Conversaciones[i].NombreUsuarioEmpresa}">
`));
};
}
function BorrarButtonEmpresa(j){
    textEmpresa(j);
    $("#colInfo").append($(`
        <div class="col-12 row">
            <!--Material textarea-->
            <div class="col-6 md-form amber-textarea active-amber-textarea">
                <textarea id="form19" class="md-textarea form-control" rows="3"></textarea>
                <label for="form19" style="font-size: 15px">Enviar un msj de Advertancia</label>
            </div>
            <div class="col-6">
                <input type="button" class="buttonClientes btn-primarys" value="Enviar">
                <input type="button" class="buttonClientes btn-danger" value="Borrar Usuario">
            </div>
        </div>
    `));
}
function ProductosButton(j){
    textEmpresa(j);
    $("#colInfo").append($(`
    <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3 col-12 " id="div-class-product">
    <div class="movimiento">
        <a data-toggle="modal" data-target="#exampleModal" onclick="Ver_Producto_Modal()">
            <div class="tamaños_visualizacion" style="background-image: url(../data/Crentromatic/productos/prueba.jpg);background-repeat: no-repeat; background-position: center center;background-size: cover;border-radius: 10px">
                <span class="fondo-span" id="modal-precios-oferta">Oferta</span>
            </div>
            <h5 id="modal-producto">Producto</h5>
            <h5 id="modal-secundario">Lugar <span></span></h5>
        </a>
    </div>
</div>
    `));
}
/*empresa*/
var Conversaciones=[];
Conversaciones=[
    {NombreUsuarioEmpresa:"Centromatic",
        convesacion:[
            {valor:"hola Centromatic",orden:"enviado"},
            {valor:"Hola Que podria Ayudarla",orden:"resividos"},
            {valor:"tienen disponible la apple",orden:"enviado"},
            {valor:"si, tenemos 8 todavia",orden:"resividos"},
            {valor:"Precio",orden:"enviado"},
            {valor:"L. 12599.00 ",orden:"resividos"}
        ],
    Correo:"Centromatic@gmail.com",LongirudyLatitud:"Tegucugalpa,Honduras"},
    {NombreUsuarioEmpresa:"Ricoh",
        convesacion:[
            {valor:"Buen dia",orden:"enviado"},
            {valor:"beun dia,",orden:"resividos"},
            {valor:"Que le podemos ayudar",orden:"resividos"},
            {valor:"Precio de la impresora",orden:"enviado"},
            {valor:"L. 15600.00 ",orden:"resividos"},
            {valor:"la entrega es inmediaba",orden:"enviado"},
            {valor:"Si inmediata",orden:"resividos"}
        ],
    Correo:"Ricoh@gmail.com",LongirudyLatitud:"San Pedro,Honduras"},
    {NombreUsuarioEmpresa:"Diunsa",
        convesacion:[
            {valor:"Buen dia",orden:"enviado"},
            {valor:"buen dia",orden:"resividos"}
        ],
    Correo:"Diunsa@gmail.com",LongirudyLatitud:"Tegucugalpa,Honduras"}    
];
function VerCoversacion(indice){
    for(var i=0;i<Conversaciones.length;i++){
        if(Conversaciones[i].NombreUsuarioEmpresa==Conversaciones[indice].NombreUsuarioEmpresa){
            console.log(Conversaciones[i].NombreUsuarioEmpresa);
            $("#colorContenido").html($(`
            `));
            for(var j=0;j<Conversaciones[i].convesacion.length;j++){
                if(Conversaciones[i].convesacion[j].orden=="enviado"){
                    $("#colorContenido").append($(`
                        <h1 class="col-12 textMSS2">${Conversaciones[i].convesacion[j].valor}</h1>
                    `));
                }else{
                    $("#colorContenido").append($(`
                        <h1 class="col-12 textMSS1">${Conversaciones[i].convesacion[j].valor}</h1>
                    `));
                };
            };
            
        };
    };
}

function textUsuario(j){
    $("#colInfo").html($(`
        <div class="col-12" id="div-class-content">
            <form class="form-inline my-2 my-lg-0" id="barra-busqueda">
                <input class="form-control mr-sm-1" id="TextUsuaarioEncotrado" type="text" value="${usuario[j].NombreUsuario}" disabled>
            </form>
        </div>
    `));
}
function textEmpresa(j){
    $("#colInfo").html($(`
        <div class="col-12" id="div-class-content">
            <form class="form-inline my-2 my-lg-0" id="barra-busqueda">
                <input class="form-control mr-sm-1" id="TextUsuaarioEncotrado" type="text" value="${empresas[j].NombreUsuarioEmpresa}" disabled>
            </form>
        </div>
    `));
}


function BuscarUsuario(){
    var indiceparaEncontrado=0;
    var int=0
    var comparar=$("#Text-Busqueda-Producto").val();
    for(var i=0, j=0; i<usuario.length;i++){
        if(usuario[i].NombreUsuario==comparar||usuario[i].CodigoUsuario==comparar||usuario[i].Correo==comparar){
            if(indiceparaEncontrado==0){
                generarTablainformacion();
                indiceparaEncontrado=1;
            };
            generarUsuarioBuscar(i);
        }else{
            j++;
            if(j==usuario.length){
            console.log("no encontrado");
            datosBusquedaNoEncontrado(int);
            };
        };
    };
}
function BuscarEmpresa(){
    var indiceparaEncontrado=0;
    var int=1
    var comparar=$("#Text-Busqueda-Producto").val();
    for(var i=0, j=0; i<empresas.length;i++){
        if(empresas[i].NombreUsuarioEmpresa==comparar||empresas[i].CodigoUsuarioEmpresa==comparar||empresas[i].Correo==comparar){
            if(indiceparaEncontrado==0){
                generarTablainformacion();
                indiceparaEncontrado=1;
            };
            generarEmpresaBuscar(i);
        }else{
            j++;
            if(j==usuario.length){
            console.log("no encontrado");
            datosBusquedaNoEncontrado(int);
            };
        };
    };
}
function comprobarTamañoDiv(){
    if($("#colInfo").css("height")>=$("#colInfo").css("height","800px")){
        $("#colinfo").css("height", "800px");
    }
}
function Ver_Producto_Modal(){
    $("#modalProductos").html($(`
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document" >
            <div class="modal-content">
                <div class="modal-body">
                    <div class="container-fluid" >
                        <div class="row" id="contenido">
                            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12 " >
                                <img class="tamaños_visualizacion-modal" src="../data/Crentromatic/productos/prueba.jpg">
                                </img>
                            </div>
                            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12 ">
                                <ul class="ul_conf" id="ul-config">
                                    <li><span id="modal-producto">Producto</span></li>
                                    <li><span id="modal-secundario">Lugar</span></li>
                                    <li><span id="modal-secundario" >descripcion del producto</span></li>
                                    <li><span id="modal-precios-oferta">Oferta</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `));
};
var UsuarioImport;
$(document).ready(function(){
    UsuarioImport = localStorage.getItem("NombreEmpresa");
    console.log(UsuarioImport);
    if(UsuarioImport==null){
        alert("Inicie Seccion Primero");
        window.location.assign("../../index.html");
    };
    $("#nombreUsuario").html($(`
    <a class="nav-button-option-navbar" href="#${UsuarioImport}">${UsuarioImport}</a>
    `));
});
function cerrarSesion(){
    UsuarioImport="";
    localStorage.clear();
    window.location.assign("../../index.html");
}