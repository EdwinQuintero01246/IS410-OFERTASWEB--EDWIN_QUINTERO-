var usuario=[];
usuario=[
    {CodigoUsuario:"US12254",NombreUsuario:"Juan",Correo:"Juan1@gmail.com",LongirudyLatitud:"Tegucugalpa,Honduras",Contraseña:"soyOtronivel"},
    {CodigoUsuario:"US12255",NombreUsuario:"Juan",Correo:"Juan2@gmail.com",LongirudyLatitud:"San Pedro,Honduras",Contraseña:"Fuerajoh"},
    {CodigoUsuario:"US12922",NombreUsuario:"Pedro Garza",Correo:"Pedro_Garza@gmail.com",LongirudyLatitud:"Tegucugalpa,Honduras",Contraseña:"Mrs.Garza"},
    {CodigoUsuario:"US12922",NombreUsuario:"Pedro Garza",Correo:"Pedro_Garza@gmail.com",LongirudyLatitud:"Tegucugalpa,Honduras",Contraseña:"Mrs.Garza"}    
]
var empresas=[];
empresas=[
    {CodigoUsuarioEmpresa:"EM12254",NombreUsuarioEmpresa:"Centromatic",Correo:"Centromatic@gmail.com",LongirudyLatitud:"Tegucugalpa,Honduras",Contraseña:"MejorContra"},
    {CodigoUsuarioEmpresa:"EM12868",NombreUsuarioEmpresa:"Ricoh",Correo:"Ricoh@gmail.com",LongirudyLatitud:"San Pedro,Honduras",Contraseña:"Ricohh"},
    {CodigoUsuarioEmpresa:"EM12884",NombreUsuarioEmpresa:"Diunsa",Correo:"Diunsa@gmail.com",LongirudyLatitud:"Tegucugalpa,Honduras",Contraseña:"1234"}    
]
var indice=0;
function buttonUsuario(){
    generarTablainformacion();
    generarUsuario();
}
function buttonEmpresa(){
    generarTablainformacionEmpresa();
    generarEmpresa();
}
function verButonesUsuario(j){
    indice=j;
    console.log( "Usuario Encontrado: " + usuario[j].NombreUsuario+"la indice es: "+indice);
    $("#contenidoButtoonUsuario").html($(`
        <input type="button" class="col-12 buttonConfInfo" value="Informacion">
        <input type="button" class="col-12 buttonConfInfo" value="Compras">
        <input type="button" class="col-12 buttonConfInfo" value="Empresas a Seguir">
        <input type="button" class="col-12 buttonConfInfo" value="Borrar o Advertir">
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
function verButonesUsuarioEmpresa(j){
    indice=j;
    console.log( "Usuario Encontrado: " + empresas[j].NombreUsuarioEmpresa+"la indice es: "+indice);
    $("#contenidoButtoonEmpresa").html($(`
        <input type="button" class="col-12 buttonConfInfo" value="Informacion">
        <input type="button" class="col-12 buttonConfInfo" value="Compras">
        <input type="button" class="col-12 buttonConfInfo" value="Empresas a Seguir">
        <input type="button" class="col-12 buttonConfInfo" value="Borrar o Advertir">
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
function BuscarUsuario(){
    var indiceparaEncontrado=0;
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
            };
        };
    };
}
function BuscarEmpresa(){
    console.log("buscar");
}
function generarUsuario(){
    for(var i=0 ,j=-1; i<usuario.length;i++){
        j++;
        if(i%2==0){
            $("#colInfo").append($(`
            <li class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12 liConfInfo2a liConfInfo2Comun">
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
    };
}
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
function generarTablainformacion(){
    $("#colInfo").html($(`
        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12 " id="div-class-content">
            <form class="form-inline my-2 my-lg-0" id="barra-busqueda">
                <input class="form-control mr-sm-1" onchange="BuscarUsuario()" id="Text-Busqueda-Producto" type="search" placeholder="Usuario" aria-label="Search">
                <input type="button" value="Buscar" onclick="BuscarUsuario()" class=" btn-primarys buttonBusqueda">
            </form>
        </div>
        <ul class="ul_conf">
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
function generarTablainformacionEmpresa(){
    $("#colInfo").html($(`
        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12 " id="div-class-content">
            <form class="form-inline my-2 my-lg-0" id="barra-busqueda">
                <input class="form-control mr-sm-1" onchange="BuscarEmpresa()" id="Text-Busqueda-Producto" type="search" placeholder="Usuario" aria-label="Search">
                <input type="button" value="Buscar" onclick="BuscarEmpresa()" class=" btn-primarys buttonBusqueda">
            </form>
        </div>
        <ul class="ul_conf">
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
    for(var i=0 ,j=-1; i<usuario.length;i++){
        j++;
        if(i%2==0){
            $("#colInfo").append($(`
            <li class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12 liConfInfo2a liConfInfo2Comun">
                <div class="col-sm-12 col-md-3 col-lg-1 col-xl-1 col-6">
                    <h2 class="textInfo">${empresas[i].CodigoUsuarioEmpresa}</h2>
                </div>
                <div class="col-sm-5 col-md-3 col-lg-2 col-xl-2 col-6">
                    <a href="#${empresas[i].NombreUsuarioEmpresa}" onclick="verButonesUsuarioEmpresa(${j})" class="textInfo textA">${empresas[i].NombreUsuarioEmpresa}</a>
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
            `));
        }else{
        $("#colInfo").append($(`
            <li class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12 liConfInfo2b liConfInfo2Comun">
            <div class="col-sm-12 col-md-3 col-lg-1 col-xl-1 col-6">
                <h2 class="textInfo">${empresas[i].CodigoUsuarioEmpresa}</h2>
                </div>
                <div class="col-sm-5 col-md-3 col-lg-2 col-xl-2 col-6">
                    <a href="#${empresas[i].NombreUsuarioEmpresa}" onclick="verButonesUsuarioEmpresa(${j})" class="textInfo textA">${empresas[i].NombreUsuarioEmpresa}</a>
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
    };
}