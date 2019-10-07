function VerProductoModal(){
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
                                    <li><span id="modal-producto">Producto</span></li>
                                    <li><span id="modal-secundario">Lugar</span></li>
                                    <li><span id="modal-secundario" >descripcion del producto</span></li>
                                    <li><span id="modal-precios-oferta">Oferta</span></li>
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
                                        <div class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-2 numero-reacciones">90.5%</div>
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
                                <input type="text" class="form-control" id="NuevoProductoNombre">
                            </div>
                            <div class="form-group">
                                <label for="recipient-name" class="col-form-labelOriginal">Precio:</label>
                                <input type="number" class="form-control" id="NuevoProductoPrecio">
                            </div>
                            <div class="form-group">
                                <label for="recipient-name" class="col-form-labelOriginal">Oferta:</label>
                                <input type="number" class="form-control" id="NuevoProductoOferta">
                            </div>
                            <div class="form-group">
                                <label for="message-text" class="col-form-labelOriginal">Descripción Del Producto:</label>
                                <textarea class="form-control" id="NuevoProductoDescripcion"></textarea>
                            </div>
                            
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
 var data=
 'NombreProducto='+$("#NuevoProductoNombre").val()+"&"+
 'PrecioProducto='+$("#NuevoProductoPrecio").val()+"&"+
 'OfertaProducto='+$("#NuevoProductoOferta").val()+"&"+
 'DescripcionProducto='+$("#NuevoProductoDescripcion").val()+"&"
  'Url='+"../../data/user/Empresa/";
 console.log(data);
 $.ajax({
    url:"ajax/Producto.php?accion=GuardarProducto",
    method:"POST",
    dataType:"json",
    success:function(respuesta){},
    error:function(respuesta){
        console.log("Error");
    }
});
}