let estrella=[{lugar:"estrella llena.png"},{lugar:"estrella vacia.png"}]
function buttonEstrella(j){
    $("#ContenidoEstrellas").html($(`
    `)); 
    for(var i=0; i<5;i++){
        if(i<j){
            $("#ContenidoEstrellas").append($(`
                <div class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-2 "> <button onclick="buttonEstrella(${i+1})" class="button-estrella" type="button" id="estrella-1" ><img src="../emp-productos/img/${estrella[0].lugar}" alt=""></button></div>
            `)); 
        } else{
            $("#ContenidoEstrellas").append($(`
                <div class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-2 "> <button onclick="buttonEstrella(${i+1})" class="button-estrella" type="button" id="estrella-2" ><img src="../emp-productos/img/${estrella[1].lugar}" alt=""></button></div>
            `)); 
        }
    }
}
var parametrosCometariosEnviar=[];
$("#buttonComentariosEnviar").click(function(){
    parametrosCometariosEnviar = {
        publicacion: $('#textareasComentarios').val()
    };
    console.log(parametrosCometariosEnviar);
});
var productos=[];
$(document).ready(function(){
    UsuarioImport = localStorage.getItem("NombreEmpresa");
    console.log(UsuarioImport);
    if(UsuarioImport==null){
        alert("Inicie Seccion Primero");
        window.location.assign("../../index.html");
    };
    UsuarioImport=UsuarioImport+" "+localStorage.getItem("Apellido");
    $("#nombreUsuario").html($(`
    <a class="nav-button-option-navbar" href="#${UsuarioImport}">${UsuarioImport}</a>
    `));
    $.ajax({
        url:"ajax/Producto.php?accion=VerProducto",
        method:"POST",
        dataType:"json",
        success:function(respuesta){
            productos=respuesta;
            console.log(productos);
            for(var i=0; i<productos.length;i++){
                $("#contenido").append($(`
                    <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3 col-12 " id="div-class-product">
                        <div class="movimiento">
                            <a data-toggle="modal" data-target="#exampleModal" onclick="Ver_Producto_Modal(${i})">
                                <div class="tamaños_visualizacion" style="background-image: url(../data/user/Empresa/${productos[i].NombreEmpresa}/producto/${productos[i].Nombre}/producto.png);background-repeat: no-repeat; background-position: center center;background-size: cover;border-radius: 10px">
                                    <span class="fondo-span" id="modal-precios-oferta">${productos[i].Oferta}</span>
                                </div>
                                <h5 id="modal-producto">${productos[i].Nombre}</h5>
                                <h5 id="modal-secundario">${productos[i].NombreEmpresa}<span></span></h5>
                                <h5 id="modal-secundario">${productos[i].Descripcion}<span></span></h5>
                            </a>
                        </div>
                    </div>
                `));
            }
        },
        error:function(respuesta){
            console.log("Error");
        }
    });
});
function Ver_Producto_Modal(i){
    $("#generarModal").html($(`
        <div class="modal fade bd-example-modal-lg" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document" >
                <div class="modal-content">
                    
                    <div class="modal-body">
                        <div class="container-fluid" >
                            <div class="row" id="contenido">
                                <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12 " >
                                    <img class="tamaños_visualizacion-modal" src="../data/user/Empresa/${productos[i].NombreEmpresa}/producto/${productos[i].Nombre}/producto.png">
                                    </img>
                                </div>
                                <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12 ">
                                    <ul class="ul_conf" id="ul-config">
                                        <li><span id="modal-producto">${productos[i].Nombre}</span></li>
                                        <li><span id="modal-secundario">Lugar</span></li>
                                        <li><span id="modal-secundario" >${productos[i].Descripcion}</span></li>
                                        <li><span id="modal-precios">${productos[i].Precio}</span></li>
                                        <li><span id="modal-precios-oferta">${productos[i].Oferta}</span></li>
                                        <li><div class="line"></div></li>
                                        <li><span id="modal-producto">${productos[i].NombreEmpresa}</span></li>
                                        <li><span id="modal-secundario">${productos[i].InformacionVendedor}</span></li>
                                        <li><div class="line"></div></li>
                                        <li><button class="btn-danger" onclick="DirrecionarPagComprar(${i})" id="button-vender">Comprar Ya!</button></li>
                                        <li><div class="line"></div></li>
                                        <li>
                                            <div class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-4 "><h1 class="numero-reacciones col-xl-8">Numero<h1 class="Palabras-reaccione col-xl-4">Me Gusta</h1></h1></div>
                                            <div class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-2 "><button type="button" class="button-estrella" id="buttonLike"><img src="../emp-productos/img/like.png" alt=""></button></div>
                                            <div class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-2 "><button type="button" class="button-estrella" id="buttonDislike"><img src="../emp-productos/img/dislike.png" alt=""></button></div>
                                            <div class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-4 "><h1 class="numero-reacciones">Numero<h1 class="Palabras-reaccione">No Gusta</h1></h1></div>
                                        </li>
                                        <li class="col-12 row">
                                            <h1 class="col-12">Puntaciones</h1>
                                            <hr >
                                            <div id="ContenidoEstrellas" class="col-8" style="display: block; margin-left: auto; margin-right: auto;">
                                                <div class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-2 "> <button onclick="buttonEstrella(1)" class="button-estrella" type="button" id="estrella-1" ><img src="../emp-productos/img/estrella llena.png" alt=""></button></div>
                                                <div class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-2 "> <button onclick="buttonEstrella(2)" class="button-estrella" type="button" id="estrella-2" ><img src="../emp-productos/img/estrella llena.png" alt=""></button></div>
                                                <div class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-2 "> <button onclick="buttonEstrella(3)" class="button-estrella" type="button" id="estrella-3" ><img src="../emp-productos/img/estrella llena.png" alt=""></button></div>
                                                <div class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-2 "> <button onclick="buttonEstrella(4)" class="button-estrella" type="button" id="estrella-4" ><img src="../emp-productos/img/estrella llena.png" alt=""></button></div>
                                                <div class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-2 "> <button onclick="buttonEstrella(5)" class="button-estrella" type="button" id="estrella-5" ><img src="../emp-productos/img/estrella llena.png" alt=""></button></div>
                                            </div>
                                        </li>
                                        <li>
                                            <h1>Comentar</h1>
                                            <hr>
                                            <div id="cometarios">
                                                <h3 class="numero-reacciones">usuario</h3>
                                                <textarea class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12 " style="font-size: 15px;" id="textareasComentarios" name="comentarios"  cols="10" rows="3"></textarea>
                                                <hr>
                                            </div>
                                            <div class="btn-group" role="group" aria-label="Basic example">
                                                    <button type="button" id="buttonComentariosEnviar" class="btn btn-secondary">Enviar</button>
                                                </div>
                                        </li>
                                        <li>
                                            <h1>Comentarios</h1>
                                            <hr>
                                            <div id="div-comentarios">
                                                <div><span class="span-text-usu">Usuario:<span class="span-text-com"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, eveniet.
                                                </span></span></div>
                                                <div>
                                            <div class="btn-group" id="btn-group " role="group" aria-label="Basic example">
                                                <button type="button" class="btn btn-primary">Editar</button>
                                                <button type="button" class="btn btn-danger">borrar</button>
                                            </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `));
}

var UsuarioImport;

function cerrarSesion(){
    UsuarioImport="";
    localStorage.clear();
    window.location.assign("../../index.html");
}
function DirrecionarPagComprar(j){
    var precio;
    if(productos[j].Oferta==""){
        precio=productos[j].Precio;
    }else
    if(productos[j].Oferta<=productos[j].Precio){
        precio=productos[j].Oferta;
    }else if(productos[j].Oferta>productos[j].Precio){
        precio=productos[j].Precio;
    }
    $("#section-config").html($(`
    <div class="container-fluid" id="container">
        <div class="row">
            <div class="col-12 " id="div-class-content">
                <div id="generarContenido">
                    <ul class="ul_confEmpresasSeguidas">
                        <li class="col-sm-2 col-md-12 col-lg-12 col-xl-12 col-12 liConfInfo1">
                            <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-12">
                                <h2 class="textInfo">Nombre Producto</h2>
                            </div>
                            <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-12">
                                <h2 class="textInfo">Nombre empresa</h2>
                            </div>
                            <div class="col-sm-12 col-md-2 col-lg-2 col-xl-2 col-12">
                                <h2 class="textInfo">Precio</h2>
                            </div>
                            <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-12">
                                <h2 class="textInfo">Descripcion Producto</h2>
                            </div>
                        </li>
                    </ul>
                <li class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12 liConfInfo2a liConfInfo2Comun">
                    <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-12">
                        <h2 class="textInfo">${productos[j].Nombre}</h2>
                    </div>
                    <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-12">
                        <a href="#${productos[j].NombreEmpresa}" onclick="verButonesUsuarioEmpresa(0)" class="textInfo textA"><span class="textInfoSpan"> · </span>${productos[j].NombreEmpresa}</a>
                    </div>
                    <div class="col-sm-12 col-md-2 col-lg-2 col-xl-2 col-12">
                        <h2 class="textInfo">${precio}</h2>
                    </div>
                    <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-12">
                        <h2 class="textInfo">${productos[j].Descripcion}</h2>
                    </div>
                </li>
                <div>
                    <a href="../us-productos/index.html"><input type="button" class="col-3 btn btn-danger" style="font-size:  17px;" value="Cerrar"></a>
                    <input type="button" class="col-3 btn btn-primary" onclick="GuardarCompra(${j},${precio})" style="font-size: 17px;" value="Guardar">
                </div>
            </div>
        </div>
    </div>
    `));
}
function GuardarCompra(j,precio){
    var llaveImport = localStorage.getItem("llave");
    var parametros=
        'Nombre='+ productos[j].Nombre +"&"+
        'NombreEmpresa='+ productos[j].NombreEmpresa +"&"+
        'Descripcion='+ productos[j].Descripcion +"&"+
        'Precio=' + precio+"&"+
        'llave='+ llaveImport;
        $.ajax({
            url:"ajax/Producto.php?accion=GuardarCompra",
            method:"POST",
            data: parametros,
            dataType:"json",
            success:function(respuesta){
                console.log(respuesta);
                var parametrosVentas=
                    'NombreProducto='+ productos[j].Nombre +"&"+
                    'NombreEmpresa='+ productos[j].NombreEmpresa +"&"+
                    'Descripcion='+ productos[j].Descripcion +"&"+
                    'Precio=' + precio+"&"+
                    'NombreComprador='+ localStorage.getItem("NombreEmpresa")+"&"+
                    'ApellidoComprador='+ localStorage.getItem("Apellido");
                $.ajax({
                    url:"ajax/Producto.php?accion=GuardarVenta",
                    method:"POST",
                    data: parametrosVentas,
                    dataType:"json",
                    success:function(respuestaVentas){
                        console.log(respuestaVentas);
                    },
                    error:function(respuestaVentas){
                    }
                });
            },
            error:function(respuesta){
                console.log("Error");
            }
        });
}
function Todaslascategorias(){
    $("#contenido").html($(``));
    for(var i=0;i<productos.length;i++){
        if(productos[i].Categorias!=""){
            $("#contenido").append($(`
                <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3 col-12 " id="div-class-product">
                    <div class="movimiento">
                        <a data-toggle="modal" data-target="#exampleModal" onclick="Ver_Producto_Modal(${i})">
                            <div class="tamaños_visualizacion" style="background-image: url(../data/user/Empresa/${productos[i].NombreEmpresa}/producto/${productos[i].Nombre}/producto.png);background-repeat: no-repeat; background-position: center center;background-size: cover;border-radius: 10px">
                                <span class="fondo-span" id="modal-precios-oferta">${productos[i].Oferta}</span>
                            </div>
                            <h5 id="modal-producto">${productos[i].Nombre}</h5>
                            <h5 id="modal-secundario">${productos[i].NombreEmpresa}<span></span></h5>
                            <h5 id="modal-secundario">${productos[i].Descripcion}<span></span></h5>
                        </a>
                    </div>
                </div>
            `));
        }
    }
}
function Vehículos(){
    $("#contenido").html($(``));
    for(var i=0;i<productos.length;i++){
        if(productos[i].Categorias=="Vehículos"){
            $("#contenido").append($(`
                <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3 col-12 " id="div-class-product">
                    <div class="movimiento">
                        <a data-toggle="modal" data-target="#exampleModal" onclick="Ver_Producto_Modal(${i})">
                            <div class="tamaños_visualizacion" style="background-image: url(../data/user/Empresa/${productos[i].NombreEmpresa}/producto/${productos[i].Nombre}/producto.png);background-repeat: no-repeat; background-position: center center;background-size: cover;border-radius: 10px">
                                <span class="fondo-span" id="modal-precios-oferta">${productos[i].Oferta}</span>
                            </div>
                            <h5 id="modal-producto">${productos[i].Nombre}</h5>
                            <h5 id="modal-secundario">${productos[i].NombreEmpresa}<span></span></h5>
                            <h5 id="modal-secundario">${productos[i].Descripcion}<span></span></h5>
                        </a>
                    </div>
                </div>
            `));
        }
    }
}
function Electrónica(){
    $("#contenido").html($(``));
    for(var i=0;i<productos.length;i++){
        if(productos[i].Categorias=="Electronica"){
            $("#contenido").append($(`
                <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3 col-12 " id="div-class-product">
                    <div class="movimiento">
                        <a data-toggle="modal" data-target="#exampleModal" onclick="Ver_Producto_Modal(${i})">
                            <div class="tamaños_visualizacion" style="background-image: url(../data/user/Empresa/${productos[i].NombreEmpresa}/producto/${productos[i].Nombre}/producto.png);background-repeat: no-repeat; background-position: center center;background-size: cover;border-radius: 10px">
                                <span class="fondo-span" id="modal-precios-oferta">${productos[i].Oferta}</span>
                            </div>
                            <h5 id="modal-producto">${productos[i].Nombre}</h5>
                            <h5 id="modal-secundario">${productos[i].NombreEmpresa}<span></span></h5>
                            <h5 id="modal-secundario">${productos[i].Descripcion}<span></span></h5>
                        </a>
                    </div>
                </div>
            `));
        }
    }
}
function Ropa(){
    $("#contenido").html($(``));
    for(var i=0;i<productos.length;i++){
        if(productos[i].Categorias=="Linea"){
            $("#contenido").append($(`
                <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3 col-12 " id="div-class-product">
                    <div class="movimiento">
                        <a data-toggle="modal" data-target="#exampleModal" onclick="Ver_Producto_Modal(${i})">
                            <div class="tamaños_visualizacion" style="background-image: url(../data/user/Empresa/${productos[i].NombreEmpresa}/producto/${productos[i].Nombre}/producto.png);background-repeat: no-repeat; background-position: center center;background-size: cover;border-radius: 10px">
                                <span class="fondo-span" id="modal-precios-oferta">${productos[i].Oferta}</span>
                            </div>
                            <h5 id="modal-producto">${productos[i].Nombre}</h5>
                            <h5 id="modal-secundario">${productos[i].NombreEmpresa}<span></span></h5>
                            <h5 id="modal-secundario">${productos[i].Descripcion}<span></span></h5>
                        </a>
                    </div>
                </div>
            `));
        }
    }
}
function Casa(){
    $("#contenido").html($(``));
    for(var i=0;i<productos.length;i++){
        if(productos[i].Categorias=="Ropa"){
            $("#contenido").append($(`
                <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3 col-12 " id="div-class-product">
                    <div class="movimiento">
                        <a data-toggle="modal" data-target="#exampleModal" onclick="Ver_Producto_Modal(${i})">
                            <div class="tamaños_visualizacion" style="background-image: url(../data/user/Empresa/${productos[i].NombreEmpresa}/producto/${productos[i].Nombre}/producto.png);background-repeat: no-repeat; background-position: center center;background-size: cover;border-radius: 10px">
                                <span class="fondo-span" id="modal-precios-oferta">${productos[i].Oferta}</span>
                            </div>
                            <h5 id="modal-producto">${productos[i].Nombre}</h5>
                            <h5 id="modal-secundario">${productos[i].NombreEmpresa}<span></span></h5>
                            <h5 id="modal-secundario">${productos[i].Descripcion}<span></span></h5>
                        </a>
                    </div>
                </div>
            `));
        }
    }
}
function Inmuebles(){
    $("#contenido").html($(``));
    for(var i=0;i<productos.length;i++){
        if(productos[i].Categorias=="Alquileres"){
            $("#contenido").append($(`
                <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3 col-12 " id="div-class-product">
                    <div class="movimiento">
                        <a data-toggle="modal" data-target="#exampleModal" onclick="Ver_Producto_Modal(${i})">
                            <div class="tamaños_visualizacion" style="background-image: url(../data/user/Empresa/${productos[i].NombreEmpresa}/producto/${productos[i].Nombre}/producto.png);background-repeat: no-repeat; background-position: center center;background-size: cover;border-radius: 10px">
                                <span class="fondo-span" id="modal-precios-oferta">${productos[i].Oferta}</span>
                            </div>
                            <h5 id="modal-producto">${productos[i].Nombre}</h5>
                            <h5 id="modal-secundario">${productos[i].NombreEmpresa}<span></span></h5>
                            <h5 id="modal-secundario">${productos[i].Descripcion}<span></span></h5>
                        </a>
                    </div>
                </div>
            `));
        }
    }
}
function Entretenimientos(){
    $("#contenido").html($(``));
    for(var i=0;i<productos.length;i++){
        if(productos[i].Categorias=="Inmueble"){
            $("#contenido").append($(`
                <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3 col-12 " id="div-class-product">
                    <div class="movimiento">
                        <a data-toggle="modal" data-target="#exampleModal" onclick="Ver_Producto_Modal(${i})">
                            <div class="tamaños_visualizacion" style="background-image: url(../data/user/Empresa/${productos[i].NombreEmpresa}/producto/${productos[i].Nombre}/producto.png);background-repeat: no-repeat; background-position: center center;background-size: cover;border-radius: 10px">
                                <span class="fondo-span" id="modal-precios-oferta">${productos[i].Oferta}</span>
                            </div>
                            <h5 id="modal-producto">${productos[i].Nombre}</h5>
                            <h5 id="modal-secundario">${productos[i].NombreEmpresa}<span></span></h5>
                            <h5 id="modal-secundario">${productos[i].Descripcion}<span></span></h5>
                        </a>
                    </div>
                </div>
            `));
        }
    }
}
function Alquileres(){
    $("#contenido").html($(``));
    for(var i=0;i<productos.length;i++){
        if(productos[i].Categorias=="Entretenimiento"){
            $("#contenido").append($(`
                <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3 col-12 " id="div-class-product">
                    <div class="movimiento">
                        <a data-toggle="modal" data-target="#exampleModal" onclick="Ver_Producto_Modal(${i})">
                            <div class="tamaños_visualizacion" style="background-image: url(../data/user/Empresa/${productos[i].NombreEmpresa}/producto/${productos[i].Nombre}/producto.png);background-repeat: no-repeat; background-position: center center;background-size: cover;border-radius: 10px">
                                <span class="fondo-span" id="modal-precios-oferta">${productos[i].Oferta}</span>
                            </div>
                            <h5 id="modal-producto">${productos[i].Nombre}</h5>
                            <h5 id="modal-secundario">${productos[i].NombreEmpresa}<span></span></h5>
                            <h5 id="modal-secundario">${productos[i].Descripcion}<span></span></h5>
                        </a>
                    </div>
                </div>
            `));
        }
    }
}