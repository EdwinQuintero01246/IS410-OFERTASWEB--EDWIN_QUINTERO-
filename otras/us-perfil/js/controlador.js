var empresas=[];
empresas=[
    {NombreUsuarioEmpresa:"Centromatic",Correo:"Centromatic@gmail.com",LongirudyLatitud:"Tegucugalpa,Honduras"},
    {NombreUsuarioEmpresa:"Ricoh",Correo:"Ricoh@gmail.com",LongirudyLatitud:"San Pedro,Honduras"},
    {NombreUsuarioEmpresa:"Diunsa",Correo:"Diunsa@gmail.com",LongirudyLatitud:"Tegucugalpa,Honduras"}    
]
var empresasContactas=[];
empresasContactas=[
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
var comprasarreglo=[];
comprasarreglo=[
    {codigodecompras:"CP-1245", NombreUsuarioEmpresa: "Centromatic", Producto:"Laptop Dell Inspiron serie 7000",Precio: 24599},
    {codigodecompras:"CP-2510", NombreUsuarioEmpresa: "jetstereo", Producto:"samsumg j7 prime",Precio: 3200},
    {codigodecompras:"CP-2568", NombreUsuarioEmpresa: "Diunsa", Producto:"Lavadora ",Precio: 17599}
];
function EmpresasSeguidas(){
    $("#generarContenido").html($(`
        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12 " id="div-class-content">
            <form class="form-inline my-2 my-lg-0" id="barra-busqueda">
                <input class="form-control mr-sm-1" onchange="BuscarEmpresa()" id="Text-Busqueda-Empresa" type="search" placeholder="Usuario" aria-label="Search">
                <input type="button" value="Buscar" onclick="BuscarEmpresa()" class=" btn-primarys buttonBusqueda">
            </form>
        </div>
        <ul class="ul_confEmpresasSeguidas">
            <li class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12 liConfInfo1">
                <div class="col-sm-6 col-md-3 col-lg-3 col-xl-3 col-6">
                    <h2 class="textInfo">Nombre empresa</h2>
                </div>
                <div class="col-sm-6 col-md-3 col-lg-4 col-xl-4 col-6">
                    <h2 class="textInfo">Correo</h2>
                </div>
                <div class="col-sm-6 col-md-6 col-lg-5 col-xl-5 col-6">
                    <h2 class="textInfo">Longirud y Latitud</h2>
                </div>
            </li>
    `));
    for(var i=0 ,j=-1; i<empresas.length;i++){
        j++;
        if(i%2==0){
            $("#generarContenido").append($(`
            <li class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12 liConfInfo2a liConfInfo2Comun">
                <div class="col-sm-6 col-md-3 col-lg-3 col-xl-3 col-6">
                    <a href="#${empresas[i].NombreUsuarioEmpresa}" onclick="verButonesUsuarioEmpresa(${j})" class="textInfo textA"><span class="textInfoSpan"> · </span>${empresas[i].NombreUsuarioEmpresa}</a>
                </div>
                <div class="col-sm-6 col-md-3 col-lg-4 col-xl-4 col-6">
                    <h2 class="textInfo">${empresas[i].Correo}</h2>
                </div>
                <div class="col-sm-6 col-md-6 col-lg-5 col-xl-5 col-6">
                    <h2 class="textInfo">${empresas[i].LongirudyLatitud}</h2>
                </div>
            </li>
            `));
        }else{
        $("#generarContenido").append($(`
            <li class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12 liConfInfo2b liConfInfo2Comun">
                <div class="col-sm-6 col-md-3 col-lg-3 col-xl-3 col-6">
                    <a href="#${empresas[i].NombreUsuarioEmpresa}" onclick="verButonesUsuarioEmpresa(${j})" class="textInfo textA"><span class="textInfoSpan"> · </span>${empresas[i].NombreUsuarioEmpresa}</a>
                </div>
                <div class="col-sm-6 col-md-3 col-lg-4 col-xl-4 col-6">
                    <h2 class="textInfo">${empresas[i].Correo}</h2>
                </div>
                <div class="col-sm-6 col-md-6 col-lg-5 col-xl-5 col-6">
                    <h2 class="textInfo">${empresas[i].LongirudyLatitud}</h2>
                </div>
            </li>
        </ul>
    `));
        };
    };
}
function Compras(){
    var sumatoria=0;
    $("#generarContenido").html($(`
        <ul class="ul_confEmpresasSeguidas">
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
    for(var i=0; i<comprasarreglo.length;i++){
        sumatoria=comprasarreglo[i].Precio+ sumatoria;
        if(i%2==0){
            $("#generarContenido").append($(`
                <li class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12 liConfInfo2a liConfInfo2Comun">
                    <div class="col-sm-12 col-md-3 col-lg-3 col-xl-2 col-12">
                        <h2 class="textInfo">${comprasarreglo[i].codigodecompras}</h2>
                    </div>
                    <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-12">
                        <a href="#${comprasarreglo[i].NombreUsuarioEmpresa}" class="textInfo textA"><span class="textInfoSpan"> · </span>${comprasarreglo[i].NombreUsuarioEmpresa}</a>
                    </div>
                    <div class="col-sm-12 col-md-3 col-lg-4 col-xl-5 col-12">
                        <h2 class="textInfo">${comprasarreglo[i].Producto}</h2>
                    </div>
                    <div class="col-sm-12 col-md-2 col-lg-2 col-xl-2 col-12">
                        <h2 class="textInfo">${comprasarreglo[i].Precio}</h2>
                    </div>
                </li>
            `));
        }else{
            $("#generarContenido").append($(`
                <li class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12 liConfInfo2a liConfInfo2Comun">
                    <div class="col-sm-12 col-md-3 col-lg-3 col-xl-2 col-12">
                        <h2 class="textInfo">${comprasarreglo[i].codigodecompras}</h2>
                    </div>
                    <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-12">
                        <a href="#${comprasarreglo[i].NombreUsuarioEmpresa}" class="textInfo textA"><span class="textInfoSpan"> · </span>${comprasarreglo[i].NombreUsuarioEmpresa}</a>
                    </div>
                    <div class="col-sm-12 col-md-3 col-lg-4 col-xl-5 col-12">
                        <h2 class="textInfo">${comprasarreglo[i].Producto}</h2>
                    </div>
                    <div class="col-sm-12 col-md-2 col-lg-2 col-xl-2 col-12">
                        <h2 class="textInfo">${comprasarreglo[i].Precio}</h2>
                    </div>
                </li>
                
                
            `));
        };
    };
    $("#generarContenido").append($(`
        <hr>
        <li class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12 liConfInfo2a liConfInfo2Comun" style="background-color: rgb(137, 192, 219);">
            <div class="col-sm-10 col-md-9 col-lg-10 col-xl-10 col-10">
                <h2 class="textInfo" style="color: rgb(255, 255, 255)">total</h2>
            </div>
            <div class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-2">
                <h2 class="textInfo" style="color: rgb(255, 255, 255)">L. -${sumatoria}</h2>
            </div>
        </li>
    `));
}
function MessengerQuintex(){
    $("#generarContenido").html($(`
        <div id="messegerQuintex">
            <div class="row" id="messegerQuintexRow">
                <div class="col-4" id="usuariosMessegerButton">
                </div>
                <div class="col-8" style="padding-left: 0px; padding-right: 0px;">
                    <div class="col-12" id="colorContenido">
                    </div>
                    <div style="padding-left: 1px;padding-right: 1px;padding-bottom: 1px;" class="btn-group col-12" role="group" aria-label="Basic example" id="div-consola">
                        <input type="text" id="cajaTextoEnviarMSS" class="col-10" placeholder="...">
                        <input type="button" id="buttonEnviarMSS" class=" btn btn-primary col-2" value="Enviar">
                    </div>
                </div>
            </div>
        </div>
    `));
for(var i=0;i<empresasContactas.length;i++){
    $("#usuariosMessegerButton").append($(`
    <input class="col-12 empresaMessegerButton" onclick="VerCoversacion(${i})" type="button" value="${empresasContactas[i].NombreUsuarioEmpresa}">
`));
};
}


function VerCoversacion(indice){
    for(var i=0;i<empresasContactas.length;i++){
        if(empresasContactas[i].NombreUsuarioEmpresa==empresasContactas[indice].NombreUsuarioEmpresa){
            console.log(empresasContactas[i].NombreUsuarioEmpresa);
            $("#colorContenido").html($(`
            `));
            for(var j=0;j<empresasContactas[i].convesacion.length;j++){
                if(empresasContactas[i].convesacion[j].orden=="enviado"){
                    $("#colorContenido").append($(`
                        <h1 class="col-12 textMSS2">${empresasContactas[i].convesacion[j].valor}</h1>
                    `));
                }else{
                    $("#colorContenido").append($(`
                        <h1 class="col-12 textMSS1">${empresasContactas[i].convesacion[j].valor}</h1>
                    `));
                };
            };
            
        };
    };
}