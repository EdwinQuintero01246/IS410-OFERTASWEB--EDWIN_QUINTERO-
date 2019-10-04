var ventassarreglo=[];
ventassarreglo=[
    {codigodecompras:"CP-0052", NombreUsuarioUsuario: "Juan Perez", Producto:"iPad Air",Precio: 32999.00,moneda:"L."},
    {codigodecompras:"CP-1541", NombreUsuarioUsuario: "Maria Padilla", Producto:"iPad mini",Precio: 24999,moneda:"L."},
    {codigodecompras:"CP-5210", NombreUsuarioUsuario: "Fuera Joh", Producto:"apple watch series 3 precio",Precio: 399,moneda:"$"}
];
var moneda;
moneda={dolar:"$", Lempiras:"L.",Euros:"€"};

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
    <div class="col-8 row " id="EstadisticasGraficasButton" style="overflow: auto">
        <canvas id="myChart" class="col-12" width="400" height="150"></canvas>
        <input type="button" id="buttonEstadistica" class=" col-4 btn btn-warning" value="Comentarios">
        <input type="button" id="buttonEstadistica" class=" col-4 btn btn-light" value="Me Gusta">
        <input type="button" id="buttonEstadistica" class=" col-4 btn btn-dark" value="No Me Gusta">
    </div>
    
    <script src="js/controlador.js"></script>
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
    var sumatoria=0;
    var monedaSumatoria="";
    $("#GenerarProductosYVentas").html($(`
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
    for(var i=0; i<ventassarreglo.length;i++){
        

            $("#GenerarProductosYVentas").append($(`
                <li class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12 liConfInfo2a liConfInfo2Comun">
                    <div class="col-sm-12 col-md-3 col-lg-3 col-xl-2 col-12">
                        <h2 class="textInfo">${ventassarreglo[i].codigodecompras}</h2>
                    </div>
                    <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-12">
                        <a href="#${ventassarreglo[i].NombreUsuarioUsuario}" class="textInfo textA"><span class="textInfoSpan"> · </span>${ventassarreglo[i].NombreUsuarioUsuario}</a>
                    </div>
                    <div class="col-sm-12 col-md-3 col-lg-4 col-xl-5 col-12">
                        <h2 class="textInfo">${ventassarreglo[i].Producto}</h2>
                    </div>
                    <div class="col-sm-12 col-md-2 col-lg-2 col-xl-2 col-12">
                        <h2 class="textInfo">${ventassarreglo[i].moneda} ${ventassarreglo[i].Precio}</h2>
                    </div>
                </li>
            `));
    };
    for(var i=0; i<ventassarreglo.length;i++){
        var  valor=0;
        if(ventassarreglo[i].moneda=="L."){
            valor=ventassarreglo[i].Precio;
        }if(ventassarreglo[i].moneda=="$"){
            valor=ventassarreglo[i].Precio*24.45;
        }if(ventassarreglo[i].moneda=="€"){
            valor=ventassarreglo[i].Precio*27.14;
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
    $("#GenerarProductosYVentas").append($(`
        <hr>
        <li class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12 liConfInfo2a liConfInfo2Comun" style="background-color: rgb(137, 192, 219);">
            <div class="col-sm-10 col-md-9 col-lg-10 col-xl-10 col-10">
                <h2 class="textInfo" style="color: rgb(255, 255, 255)">total</h2>
            </div>
            <div class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-2">
                <h2 class="textInfo" id="SumatoriaTotal"style="color: rgb(255, 255, 255)">${monedaSumatoria} ${sumatoria}</h2>
            </div>
        </li>
        <div class="col-8 row " id="EstadisticasGraficasButton" style="overflow: auto">
        <div id="cambioMoneda" class="col-12"><input type="text" name="" class="col-3" value="" style="font-size: 15px;border-radius: 5px;"></div>
            <select name="" id="selectMoneda" onclick="cambiarMoneda()" class="select-css col-6 row" style="margin-left: 0px; margin-right: 0px;">
                <option value="0">Lempiras</option>
            </select>
            <select name="" id="selectMonedaCambiar" onclick="cambiarMoneda()" class="select-css col-6 row" style="margin-left: 0px; margin-right: 0px;">
                <option value="0">Lempiras</option>
                <option value="1">Dolar</option>
                <option value="2">Euro</option>
            </select>
        </div>
    `));
}
/* estadistica */
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Comentarios', 'Me Gusta', 'No me gusta'],
        datasets: [{
            label: '# of Votes',
            data: [3, 2, 3,],
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

function cambiarMoneda(){
    var JsonMoneda = JSON.parse(localStorage.getItem("MONEDA"));
    var Moneda1=0;
    var moneda2=0;
        Moneda1 = $('#selectMoneda').val();
        Moneda2 = $('#selectMonedaCambiar').val();
      if( Moneda1==moneda2){
      $("#cambioMoneda").html($(`
        <input type="text" name="" class="col-3" value="${moneda.Lempiras} ${JsonMoneda.sumatoria}" style="font-size: 15px;border-radius: 5px;">
      `));
      }
      if(Moneda1==0&&Moneda2==1){
        var valorMoneda =0;
        valorMoneda=JsonMoneda.sumatoria/24.45
        $("#cambioMoneda").html($(`
        <input type="text" name="" class="col-3" value="${moneda.dolar} ${valorMoneda}" style="font-size: 15px;border-radius: 5px;">
      `));
      }
      if(Moneda1==0&&Moneda2==2){
        var valorMoneda =0;
        valorMoneda=JsonMoneda.sumatoria/27.14
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