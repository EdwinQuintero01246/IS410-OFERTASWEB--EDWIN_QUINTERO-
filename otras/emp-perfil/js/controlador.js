function EventoEstadisticas(){
    $("#GenerarEstadistica").html($(`
        <li id="buttonControl">
            <div class="btn-group" role="group" aria-label="Basic example" id="div-consola">
                <input type="button" class="tamanio-consola-button btn btn-light" value="Estadisticas" onclick="EventoEstadisticas()">
                <input type="button" class="tamanio-consola-button btn btn-light" value="Productos" onclick="EventoProductos()">
                <input type="button" class="tamanio-consola-button btn btn-light" value="Ventas" onclick="EventoVentas()">
            </div>
        </li>
    `));
    $("#GenerarEstadistica").append($(`
        <li class="li-estadisticas">
            <img class="col-sm-2 col-md-2 col-lg-2 col-xl-1 col-2" id="img-estadisticas" src="../../img/icon/comentar.png"  alt="">
            <span class="col-sm-6 col-md-6 col-lg-6 col-xl-6 col-6 text-estadistica" id="color-comentario">Comentarios: </span>
            <span class="col-sm-4 col-md-4 col-lg-4 col-xl-5 col-4 numero-estadistica">numeros</span>
        </li>
        <li class="li-estadisticas">
            <img class="col-sm-2 col-md-2 col-lg-2 col-xl-1 col-2" id="img-estadisticas" src="../../img/icon/like.png"  alt="">
            <span class="col-sm-6 col-md-6 col-lg-6 col-xl-6 col-6 text-estadistica" id="color-like">me gustas: </span>
            <span class="col-sm-4 col-md-4 col-lg-4 col-xl-5 col-4 numero-estadistica">numeros</span>
        </li>
        <li class="li-estadisticas">
            <img class="col-sm-2 col-md-2 col-lg-2 col-xl-1 col-2" id="img-estadisticas" src="../../img/icon/not-like.png"  alt="">
            <span class="col-sm-6 col-md-6 col-lg-6 col-xl-6 col-6 text-estadistica" id="color-not-like">me molesta: </span>
            <span class="col-sm-4 col-md-4 col-lg-4 col-xl-5 col-4 numero-estadistica">numeros</span>
        </li>>
    `));
    $("#GenerarProductosYVentas").html($(`
    `));
}
function EventoProductos(){
    $("#GenerarEstadistica").html($(`
        <li id="buttonControl">
            <div class="btn-group" role="group" aria-label="Basic example" id="div-consola">
                <input type="button" class="tamanio-consola-button btn btn-light" value="Estadisticas" onclick="EventoEstadisticas()">
                <input type="button" class="tamanio-consola-button btn btn-light" value="Productos" onclick="EventoProductos()">
                <input type="button" class="tamanio-consola-button btn btn-light" value="Ventas" onclick="EventoVentas()">
            </div>
        </li>
    `));
    $("#GenerarProductosYVentas").html($(`
        <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3 col-12 " id="div-class-product">
            <div >
                <a data-toggle="modal" data-target="#exampleModal" >
                    <div class="tamaños_visualizacion" style="background-image: url(../us-productos/img/prueba.jpg);background-repeat: no-repeat; background-position: center center;background-size: cover;border-radius: 10px">
                        <span class="fondo-span" id="modal-precios-oferta">Oferta</span>
                    </div>
                    <h5 id="modal-producto">Producto</h5>
                    <h5 id="modal-secundario">Lugar <span></span></h5>
                </a>
            </div>
        </div>
    `));
}
function EventoVentas(){
    $("#GenerarEstadistica").html($(`
        <li>
            <div class="btn-group" role="group" aria-label="Basic example" id="div-consola">
                <input type="button" class="tamanio-consola-button btn btn-light" value="Estadisticas" onclick="EventoEstadisticas()">
                <input type="button" class="tamanio-consola-button btn btn-light" value="Productos" onclick="EventoProductos()">
                <input type="button" class="tamanio-consola-button btn btn-light" value="Ventas" onclick="EventoVentas()">
            </div>
        </li>
    `));
    $("#GenerarProductosYVentas").html($(`
        <div id="tabla-ventas">
            <table style="width: 100%">
                <thead class="config-tabla">
                    <th><span class="text-plano">Producto</span></th>
                    <th><span class="text-plano">Descripcion del producto</span></th>
                    <th><span class="text-plano">Oferta</span></th>
                    <th><span class="text-plano">Informacion del vendedor</span></th>
                    <th><span class="text-plano">Empresa o nombre de vendedor</span></th>
                </thead>
                <tbody class="config-tabla">
                    <tr>
                        <td><span class="text-tabla">Producto</span></td>
                        <td><span class="text-tabla">descripcion del producto</span></td>
                        <td><span class="text-tabla">Oferta</span></td>
                        <td><span class="text-tabla">Informacion del vendedor</span></td>
                        <td><span class="text-tabla">Empresa o nombre de vendedor</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    `));
}