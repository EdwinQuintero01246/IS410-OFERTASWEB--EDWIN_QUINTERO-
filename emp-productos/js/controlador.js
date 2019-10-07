function VerProductoModal(i){
    $("#generarModal").html($(`
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document" >
            <div class="modal-content">
                <div class="modal-body">
                    
                    <div class="container-fluid" >
                        <div class="row" id="contenido">
                            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12 " >
                                <img class="tamaños_visualizacion-modal" src="img/prueba.jpg">
                                </img>
                            </div>
                            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12 ">
                                <ul class="ul_conf" id="ul-config">
                                    <li><span id="modal-producto">${productos[i].Nombre}Producto</span></li>
                                    <li><span id="modal-secundario">Lugar</span></li>
                                    <li><span id="modal-secundario" >${productos[i].Descripcion}</span></li>
                                    <li><span id="modal-precios-oferta">${productos[i].Oferta}</span></li>
                                    <li><span id="modal-precios">${productos[i].Precio}</span></li>
                                    <li><div class="line"></div></li>
                                    <li>
                                        <div class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-4 "><h1 class="numero-reacciones col-xl-8">Numero<h1 class="Palabras-reaccione col-xl-4">Me Gusta</h1></h1></div>
                                        <div class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-2 "><img src="img/like.png" alt=""></div>
                                        <div class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-2 "><img src="img/dislike.png" alt=""></div>
                                        <div class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-4 "><h1 class="numero-reacciones">Numero<h1 class="Palabras-reaccione">No Gusta</h1></h1></div>
                                    </li>
                                    <li>
                                        <h1>Puntaciones</h1>
                                        <hr>
                                        <div class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-2 numero-reacciones" id="generarEstrellas">4.5</div>
                                        <div class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-2 "> <img src="img/estrella llena.png" alt=""></div>
                                        <div class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-2 "> <img src="img/estrella llena.png" alt=""></div>
                                        <div class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-2 "> <img src="img/estrella llena.png" alt=""></div>
                                        <div class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-2 "> <img src="img/estrella llena.png" alt=""></div>
                                        <div class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-2 "> <img src="img/estrella vacia.png" alt=""></div>
                                    </li>
                                    <li>
                                        <h1>Comentarios</h1>
                                        <hr>
                                        <div id="cometarios">
                                            <h3 class="numero-reacciones">usuario</h3>
                                            <textarea class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12 " style="font-size: 15px;" id="textareasComentarios" name="comentarios"  cols="10" rows="3"></textarea>
                                            <hr>
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
};
function NuevoProducto(){
    $("#generarModal").html($(`
        <div class="modal fade bd-example-modal-lg" id="NuevoProducto" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="myLargeModalLabel">Agrega Tu Nuevo Producto</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <label for="recipient-name" class="col-form-labelOriginal">Producto:</label>
                                <input type="text" class="sizeTextProductNuevo form-control" id="NuevoProductoNombre">
                            </div>
                            <div class="form-group">
                                <label for="recipient-name" class="col-form-labelOriginal">Precio:</label>
                                <input type="text" class="sizeTextProductNuevo form-control" id="NuevoProductoPrecio">
                            </div>
                            <div class="form-group">
                                <label for="recipient-name" class="col-form-labelOriginal">Oferta:</label>
                                <input type="text" class="sizeTextProductNuevo form-control" id="NuevoProductoOferta">
                            </div>
                            <div class="form-group">
                                <label for="message-text" class="col-form-labelOriginal">Descripción Del Producto:</label>
                                <textarea class="sizeTextProductNuevo form-control" id="NuevoProductoDescripcion"></textarea>
                            </div>
                            <select class="select-css" id="select-css">
                                <option value="Todas las Categorias">Todas las Categorias</option>
                                <option value="Vehículos">Vehículos</option>
                                <option value="Electronica">Electronica</option>
                                <option value="Linea">Linea Blanca</option>
                                <option value="Ropa">Ropa</option>
                                <option value="Alquileres">Alquileres</option>
                                <option value="Inmueble">Inmueble</option>
                                <option value="Entretenimiento">Entretenimiento</option>
                            </select>
                            Informacion Del Vendedor
                            Empresa O Nombre De Vendedor
                            
                            <div class="input-group">
                            <div class="input-group-prepend">
                              <span class="input-group-text" id="inputGroupFileAddon01">Sube tu archivo</span>
                            </div>
                            <div class="custom-file">
                              <input type="file" class="custom-file-input" id="inputGroupFile01"
                                aria-describedby="inputGroupFileAddon01">
                              <label class="custom-file-label" for="inputGroupFile01">Elija el archivo</label>
                            </div>
                          </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="col-2 btn btn-secondary" style="height: 34.479166px;font-size: 15px;" data-dismiss="modal">Close</button>
                        <input type="button" class="col-3 btn btn-primary" style="height: 34.479166px;font-size: 15px;" onclick="EnviarProducto()" value="Enviar">
                    </div>
                </div>
            </div>
        </div>
    `));
}
function EnviarProducto(){
 var parametros=
 'NombreProducto='+$("#NuevoProductoNombre").val()+"&"+
 'PrecioProducto='+$("#NuevoProductoPrecio").val()+"&"+
 'OfertaProducto='+$("#NuevoProductoOferta").val()+"&"+
 'DescripcionProducto='+$("#NuevoProductoDescripcion").val()+"&"+
 'Url='+"../../data/user/Empresa/"+"&"+
 'Categorias='+$("#select-css").val()+"&"+
 'InformacionVendedor='+"&"+
 'NombreEmpresa=';

 console.log(parametros);
 $.ajax({
    url:"ajax/Producto.php?accion=GuardarProducto",
    method:"POST",
    data: parametros,
    dataType:"json",
    success:function(respuesta){
        console.log(respuesta);
        alert("Producto Guardado con exito");
        window.location.reload();
    },
    error:function(respuesta){
        console.log("Error");
    }
});
}
var productos=[];
$(document).ready(function(){
    $.ajax({
        url:"ajax/Producto.php?accion=VerProducto",
        method:"POST",
        dataType:"json",
        success:function(respuesta){
            productos=respuesta;
            console.log(productos);
            for(var i=0; i<productos.length;i++){
                $("#contenido-Productos").append($(`
                    <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3 col-12 " id="div-class-product">
                        <div class="movimiento">
                            <a  data-toggle="modal" data-target="#exampleModal" onclick="VerProductoModal(${i})" >
                                <div class="tamaños_visualizacion" style="background-image: url(img/prueba.jpg);background-repeat: no-repeat; background-position: center center;background-size: cover;border-radius: 10px">
                                    <span class="fondo-span" id="modal-precios-oferta">${productos[i].Oferta}</span>
                                </div>
                                <h5 id="modal-producto">${productos[i].Nombre}Producto</h5>
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
})