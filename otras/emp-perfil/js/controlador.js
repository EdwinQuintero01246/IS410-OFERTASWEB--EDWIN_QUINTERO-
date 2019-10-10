var ventassarreglo=[];
ventassarreglo=[
    {codigodecompras:"CP-0052", NombreUsuarioUsuario: "Juan Perez", Producto:"iPad Air",Precio: 32999.00,moneda:"L."},
    {codigodecompras:"CP-1541", NombreUsuarioUsuario: "Maria Padilla", Producto:"iPad mini",Precio: 24999,moneda:"L."},
    {codigodecompras:"CP-5210", NombreUsuarioUsuario: "Fuera Joh", Producto:"apple watch series 3 precio",Precio: 399,moneda:"$"}
];
var moneda;
moneda={dolar:"$", Lempiras:"L.",Euros:"€"};
var Grafica;
Grafica = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Compras', 'Producto', 'Seguidores'],
        datasets: [{
            label: '# of Votes',
            data: [4, 2, 3,],
            backgroundColor: [
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 255, 255, 0.2)',
                'rgba(100, 100, 100, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 206, 86, 1)',
                'rgba(100, 100, 100, 1)',
                'rgba(0, 0, 0, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
function EventoEstadisticas(){
    
    
    $("#GenerarEstadistica").html($(`
        <li id="buttonControl">
            <div class="btn-group" role="group" aria-label="Basic example" id="div-consola">
                <input type="button" class="tamanio-consola-button btn btn-light" value="Estadisticas" onclick="EventoEstadisticas()">
                <input type="button" class="tamanio-consola-button btn btn-light" value="Productos" onclick="EventoProductos()">
                <input type="button" class="tamanio-consola-button btn btn-light" value="Ventas" onclick="EventoVentas()">
                <input type="button" class="tamanio-consola-button btn btn-light" value="Seguidores" onclick="EventoSeguidores()">
            </div>
        </li>
    `));
    $("#GenerarProductosYVentas").html($(`
    <div class="col-8 row " id="EstadisticasGraficasButton" style="overflow: auto">
        <canvas id="myChart" class="col-12" width="400" height="150"></canvas>
        <input type="button" id="buttonEstadistica" class=" col-4 btn btn-warning" value="Comentarios">
        <input type="button" id="buttonEstadistica" class=" col-4 btn btn-light" value="Me Gusta">
        <input type="button" id="buttonEstadistica" class=" col-4 btn btn-dark" value="No Me Gusta">
    </div>
    `));
}
function EventoProductos(){
    var parametro =
    'LLave='+ llave;
    $.ajax({
        url:"ajax/Ventas.php?accion=VerProducto",
        method:"POST",
        data:parametro,
        dataType: "json",
        success:function(respuesta){
            console.log(respuesta);
            $("#GenerarProductosYVentas").html($(`
            `));
            for(var i=0; i<respuesta.length;i++){
                $("#GenerarProductosYVentas").append($(`
                    <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3 col-12 ventasProductos" id="div-class-product">
                        <div >
                            <a>
                                <div class="tamaños_visualizacion" style="background-image: url(../data/user/Empresa/${respuesta[i].NombreEmpresa}/producto/${respuesta[i].Nombre}/producto.png);background-repeat: no-repeat; background-position: center center;background-size: cover;border-radius: 10px">
                                    <span class="fondo-span" id="modal-precios-oferta">${respuesta[i].Oferta}</span>
                                </div>
                                <h5 class="modal-producto">Producto: ${respuesta[i].Nombre}</h5>
                                <h5 class="modal-producto">${respuesta[i].Descripcion}</h5>
                                <h5 class="modal-producto">${respuesta[i].Categorias}</h5>
                                <h5 class="modal-producto">Precio: ${respuesta[i].Precio}</h5>
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
    $("#GenerarEstadistica").html($(`
        <li id="buttonControl">
            <div class="btn-group" role="group" aria-label="Basic example" id="div-consola">
                <input type="button" class="tamanio-consola-button btn btn-light" value="Estadisticas" onclick="EventoEstadisticas()">
                <input type="button" class="tamanio-consola-button btn btn-light" value="Productos" onclick="EventoProductos()">
                <input type="button" class="tamanio-consola-button btn btn-light" value="Ventas" onclick="EventoVentas()">
                <input type="button" class="tamanio-consola-button btn btn-light" value="Seguidores" onclick="EventoSeguidores()">
            </div>
        </li>
    `));
}
function EventoVentas(){
    var monedaSumatoria="";
    $("#GenerarProductosYVentas").html($(`
    <ul class="ul_confEmpresasSeguidas">
        <li class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12 liConfInfo1">
            <div class="col-sm-12 col-md-3 col-lg-3 col-xl-2 col-12">
                <h2 class="textInfo">Producto</h2>
            </div>
            <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-12">
                <h2 class="textInfo">Nombre Comprador</h2>
            </div>
            <div class="col-sm-12 col-md-3 col-lg-4 col-xl-5 col-12">
                <h2 class="textInfo">Descripcion:</h2>
            </div>
            <div class="col-sm-12 col-md-2 col-lg-2 col-xl-2 col-12">
                <h2 class="textInfo">precio</h2>
            </div>
        </li>
    </ul>
    `));
    var parametro =
    'Llave='+ llave;
    $.ajax({
        url:"ajax/Ventas.php?accion=ObtenerVentas",
        method:"POST",
        data:parametro,
        dataType: "json",
        success:function(respuesta){
            //console.log(respuesta);
            var sumatoria=0;
            for(var i=0; i<respuesta.length;i++){
                sumatoria = sumatoria + JSON.parse(respuesta[i].Precio)
                $("#GenerarProductosYVentas").append($(`
                    <li class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12 liConfInfo2a liConfInfo2Comun">
                        <div class="col-sm-12 col-md-3 col-lg-3 col-xl-2 col-12">
                            <h2 class="textInfo">${respuesta[i].NombreProducto}</h2>
                        </div>
                        <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-12">
                            <a href="#${respuesta[i].NombreComprador}" class="textInfo textA"><span class="textInfoSpan"> · </span>${respuesta[i].NombreComprador}</a>
                        </div>
                        <div class="col-sm-12 col-md-3 col-lg-4 col-xl-5 col-12">
                            <h2 class="textInfo">${respuesta[i].Descripcion}</h2>
                        </div>
                        <div class="col-sm-12 col-md-2 col-lg-2 col-xl-2 col-12">
                            <h2 class="textInfo">L. ${respuesta[i].Precio}</h2>
                        </div>
                    </li>
                `));
            };
            $("#GenerarProductosYVentas").append($(`
            <hr>
            <li class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12 liConfInfo2a liConfInfo2Comun" style="background-color: rgb(137, 192, 219);">
                <div class="col-sm-10 col-md-9 col-lg-10 col-xl-10 col-10">
                    <h2 class="textInfo" style="color: rgb(255, 255, 255)">total</h2>
                </div>
                <div class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-2">
                    <h2 class="textInfo" id="SumatoriaTotal"style="color: rgb(255, 255, 255)">${sumatoria}</h2>
                </div>
            </li>
            <div class="col-8 row " id="EstadisticasGraficasButton" style="overflow: auto">
            <div id="cambioMoneda" class="col-12">
            <input type="text" name="" class="col-3" value="" style="font-size: 15px;border-radius: 5px;"></div>
                <select name="" id="selectMoneda" onclick="cambiarMoneda(${sumatoria})" class="select-css col-6 row" style="margin-left: 0px; margin-right: 0px;">
                    <option value="0">Lempiras</option>
                </select>
                <select name="" id="selectMonedaCambiar" onclick="cambiarMoneda(${sumatoria})" class="select-css col-6 row" style="margin-left: 0px; margin-right: 0px;">
                    <option value="0">Lempiras</option>
                    <option value="1">Dolar</option>
                    <option value="2">Euro</option>
                </select>
            </div>
        `));
        },
        error:function(respuesta){
            console.log("Error");
        }
    });
}
/* estadistica */
function EventoSeguidores(){
    var parametro =
    'LLave='+ llave;
    $.ajax({
        url:"ajax/Ventas.php?accion=Seguidores",
        method:"POST",
        data:parametro,
        dataType: "json",
        success:function(respuesta){
            $("#GenerarEstadistica").html($(`
                <li id="buttonControl">
                    <div class="btn-group" role="group" aria-label="Basic example" id="div-consola">
                        <input type="button" class="tamanio-consola-button btn btn-light" value="Estadisticas" onclick="EventoEstadisticas()">
                        <input type="button" class="tamanio-consola-button btn btn-light" value="Productos" onclick="EventoProductos()">
                        <input type="button" class="tamanio-consola-button btn btn-light" value="Ventas" onclick="EventoVentas()">
                        <input type="button" class="tamanio-consola-button btn btn-light" value="Seguidores" onclick="EventoSeguidores()">
                    </div>
                </li>
            `));
            $("#GenerarProductosYVentas").html($(`
                <li class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12 liConfInfo1">
                    <div class="col-sm-6 col-md-3 col-lg-3 col-xl-3 col-6">
                        <h2 class="textInfo">Nombre empresa</h2>
                    </div>
                </li>
            `));
            for(var i=0 ,j=-1; i<respuesta.length;i++){
                j++;
                if(i%2==0){
                    $("#GenerarProductosYVentas").append($(`
                    <li class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12 liConfInfo2a liConfInfo2Comun">
                        <div class="col-sm-6 col-md-3 col-lg-3 col-xl-3 col-6">
                            <a href="#${respuesta[i].NombreUsuario}" onclick="verButonesUsuarioEmpresa(${j})" class="textInfo textA"><span class="textInfoSpan"> · </span>${respuesta[i].NombreUsuario}</a>
                        </div>
                    </li>
                    `));
                }else{
                $("#GenerarProductosYVentas").append($(`
                    <li class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12 liConfInfo2b liConfInfo2Comun">
                        <div class="col-sm-6 col-md-3 col-lg-3 col-xl-3 col-6">
                            <a href="#${respuesta[i].NombreUsuario}" onclick="verButonesUsuarioEmpresa(${j})" class="textInfo textA"><span class="textInfoSpan"> · </span>${respuesta[i].NombreUsuario}</a>
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

function cambiarMoneda(sumatoria){
    var JsonMoneda = sumatoria;
    var Moneda1=0;
    var moneda2=0;
        Moneda1 = $('#selectMoneda').val();
        Moneda2 = $('#selectMonedaCambiar').val();
      if( Moneda1==moneda2){
      $("#cambioMoneda").html($(`
        <input type="text" name="" class="col-3" value="${moneda.Lempiras} ${JsonMoneda}" style="font-size: 15px;border-radius: 5px;">
      `));
      }
      if(Moneda1==0&&Moneda2==1){
        var valorMoneda =0;
        valorMoneda=JsonMoneda/24.45
        $("#cambioMoneda").html($(`
        <input type="text" name="" class="col-3" value="${moneda.dolar} ${valorMoneda}" style="font-size: 15px;border-radius: 5px;">
      `));
      }
      if(Moneda1==0&&Moneda2==2){
        var valorMoneda =0;
        valorMoneda=JsonMoneda/27.14
        $("#cambioMoneda").html($(`
        <input type="text" name="" class="col-3" value="${moneda.Euros} ${valorMoneda}" style="font-size: 15px;border-radius: 5px;">
      `));
      };
}
function codigoqr(){
    $("#GenerarProductosYVentas").html($(`
    <h1>
        Cuando se active la cámara, apunta tu teléfono hacia esta pantalla para escanear el código
    </h1>
    <div class="row">
        <div class="col-3 col-sm-4 col-md-5 col-lg-3 col-xl-3" id="divControlQr">
            <form class="form-horizontal" id="codeForm">
                <div class="form-group">
                    <label class="control-label">Información : </label>
                    <input class="form-control col-xs-1" id="content" value="text" type="text" required="required">
                </div>
                <div class="form-group">
                    <label class="control-label">Nivel del código (ECC) : </label>
                    <select class="form-control col-xs-10" id="ecc">
                        <option value="H">H - Mejor</option>
                        <option value="M">M</option>
                        <option value="Q">Q</option>
                        <option value="L">L - Peor</option>                         
                    </select>
                </div>
                <div class="form-group">
                    <label class="control-label">Tamaño : </label>
                    <input type="number" min="1" max="10" step="1" class="form-control col-xs-10" id="size" value="5">
                </div>
                <div class="form-group">
                    <input type="button" class="btn-primary" value="Generar codigoQR" id="buttonGenerarCodigoQR" onclick="GenerarCodigoQr()">
                </div>
            </form>
        </div>
        <div class="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 " id="divImgQr">
            <div id="MarginQR">
                <img src="../codigoQR/img/CodigoEjemplo.gif" alt="" id="ImgCodigoQr">
            </div>
        </div>
    </div>
    <a href="">¿Necesitas ayuda para comenzar?</a>
    `));
}
function GenerarCodigoQr(){
    $.ajax({
        url:"../codigoQr/ajax/Obtener.php",
        method:"POST",
        data:{formData:$("#content").val(), ecc:$("#ecc").val(), size:$("#size").val()},
        success:function(respuesta){
            console.log(respuesta);
            $("#MarginQR").html($(`
                <img src="../../otras/codigoQR/temp/${respuesta}" alt="" id="ImgCodigoQr">
            `));
        },
        error:function(respuesta){

        }
    });
}
var llave = localStorage.getItem("llave");
var NombreEmpresaLocal= localStorage.getItem("NombreEmpresa");
var correoLocal = localStorage.getItem("Correo");
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