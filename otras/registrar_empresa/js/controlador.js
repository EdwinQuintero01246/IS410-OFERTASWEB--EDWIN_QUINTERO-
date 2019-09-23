function activarSiguiente(){
    $("#información").html($(`
        <div class="row" style="margin-left: 0px;margin-right: 0px;">
            <img class="col-4" src="../registrar_usuario/img/icon/puntosFom2.png" alt="" id="PointsPoint">
        </div>
  `));
    textPlano();
    $("#información").append($(`
        <h2 class="tittle-registrarse-seccion col-12" id="h2-registrarse-seccion">ubicacion</h2>
        <li class="li-form-registrarse-seccion col-sm-12 col-md-6 col-lg-6 col-xl-6 col-12" ><input class="input-option " type="text"   placeholder="Dirrección"></li>
        <li class="li-form-registrarse-seccion col-sm-12 col-md-6 col-lg-6 col-xl-6 col-12"><input class="input-option " type="text"   placeholder="país"></li>
        <li class="li-form-registrarse-seccion col-sm-12 col-md-6 col-lg-6 col-xl-6 col-12"><input class="input-option " type="text"   placeholder="cuidad"></li>
        <li class="li-form-registrarse-seccion col-sm-12 col-md-6 col-lg-6 col-xl-6 col-12"><input class="input-option " type="text"   placeholder="Estado/Provincia/Región"></li>
        <li class="li-form-registrarse-seccion col-sm-12 col-md-6 col-lg-6 col-xl-6 col-12"><input class="input-option " type="text"   placeholder="Codigo Postal"></li>
        <li class="li-form-registrarse-seccion row col-12">
        <li class="li-form-registrarse-seccion  col-6 "><input type="button" class="btn btn-danger buttonForm3" value="Anterior" onclick="activarAnteriorForm1()"></li>
        <li class="li-form-registrarse-seccion  col-6 "><input type="button" class="btn btn-danger buttonForm3" value="Siguiente" onclick="activarSiguienteForm2()"></li>
  `));
}
function activarSiguienteForm2(){
        $("#información").html($(`
            <div class="row" style="margin-left: 0px;margin-right: 0px;">
                <img class="col-4" src="../registrar_usuario/img/icon/puntosFom3.png" alt="" id="PointsPoint">
            </div>
        `));
        textPlano();
        $("#información").append($(`
        <h2 class="tittle-registrarse-seccion col-12" id="h2-registrarse-seccion">Redes Sociales</h2>
        <li class="li-form-registrarse-seccion col-sm-4 col-md-4 col-lg-4 col-xl-4 col-7"><label id="label-redes-facebook" for="facebookUsername" >facebook.com/</label></li>
        <li class="li-form-registrarse-seccion col-sm-8 col-md-8 col-lg-8 col-xl-8 col-12"><input class="input-option " type="text"></li>
        <li class="li-form-registrarse-seccion col-sm-4 col-md-4 col-lg-4 col-xl-4 col-7"><label id="label-redes-twitter" for="facebookUsername">twitter.com/</label></li>
        <li class="li-form-registrarse-seccion col-sm-8 col-md-8 col-lg-8 col-xl-8 col-12"><input class="input-option " type="text"></li>
        <li class="li-form-registrarse-seccion col-sm-4 col-md-4 col-lg-4 col-xl-4 col-7"><label id="label-redes-instagram" for="facebookUsername">instagram.com/</label></li>
        <li class="li-form-registrarse-seccion col-sm-8 col-md-8 col-lg-8 col-xl-8 col-12"><input class="input-option " type="text"></li>
        <li class="li-form-registrarse-seccion  col-6 "><input type="button" class="btn btn-danger buttonForm3" value="Anterior" onclick="activarAnteriorForm2()"></li>
        <li class="li-form-registrarse-seccion  col-6 "><input type="button" class="btn btn-danger buttonForm3" id="button-registrar" value="Registrar"></li>
    `));
  }
  function activarAnteriorForm1(){
    $("#información").html($(`
        <div class="row" style="margin-left: 0px;margin-right: 0px;">
            <img class="col-4" src="../registrar_usuario/img/icon/puntosFom1.png" alt="" id="PointsPoint">
        </div>
    `));
    textPlano();
    $("#información").append($(`
        <h2 class="tittle-registrarse-seccion col-12" id="h2-registrarse-seccion">Información de la empresa</h2>
        <li class="li-form-registrarse-seccion col-sm-12 col-md-6 col-lg-6 col-xl-6 col-12"><input class="input-option " type="text"   placeholder="Nombre De La Empresa"></li>
        <li class="li-form-registrarse-seccion col-sm-12 col-md-6 col-lg-6 col-xl-6 col-12"><input class="input-option " type="email"   placeholder="email"></li>
        <li class="li-form-registrarse-seccion col-sm-12 col-md-6 col-lg-6 col-xl-6 col-12"><input class="input-option " type="password"   placeholder="password"></li>
        <li class="li-form-registrarse-seccion col-sm-12 col-md-6 col-lg-6 col-xl-6 col-12"><input class="input-option " type="password"   placeholder="confirmar password"></li>
        <li class="li-form-registrarse-seccion col-sm-12 col-md-6 col-lg-6 col-xl-6 col-12"><input class="input-option " type="text"   placeholder="dirección"></li>
        <li class="li-form-registrarse-seccion col-sm-12 col-md-6 col-lg-6 col-xl-6 col-12"><input class="input-option " type="tel"   placeholder="telefono"></li>
        <li class="li-form-registrarse-seccion col-12">
            <select class="select-css" id="select-css" onchange="preguntaSeguridad()">
                <option value="0">Pregunta de seguridad</option>
                <option value="1">Primer Auto</option>
                <option value="2">Tía Favorita</option>
                <option value="3">Pregunta(Usuario)</option>
            </select>
            <div id="preguntaSeguridad">
            </div>
        </li>
        <li class="li-form-registrarse-seccion col-12"><textarea name=""  rows="4" placeholder="Descripcion en el muro de tu perfil (Opcional)" id="textarea-descripcion"></textarea></li>
        <input type="button" class="btn btn-danger buttonForm3 col-6" id="confiButtonSiguiente" value="Siguiente" onclick="activarSiguiente()">
    `));
  }
  function activarAnteriorForm2(){
    $("#información").html($(`
        <div class="row" style="margin-left: 0px;margin-right: 0px;">
            <img class="col-4" src="../registrar_usuario/img/icon/puntosFom2.png" alt="" id="PointsPoint">
        </div>
    `));
    textPlano();
    $("#información").append($(`
        <h2 class="tittle-registrarse-seccion col-12" id="h2-registrarse-seccion">ubicacion</h2>
        <li class="li-form-registrarse-seccion col-sm-12 col-md-6 col-lg-6 col-xl-6 col-12" ><input class="input-option " type="text"   placeholder="Dirrección"></li>
        <li class="li-form-registrarse-seccion col-sm-12 col-md-6 col-lg-6 col-xl-6 col-12"><input class="input-option " type="text"   placeholder="país"></li>
        <li class="li-form-registrarse-seccion col-sm-12 col-md-6 col-lg-6 col-xl-6 col-12"><input class="input-option " type="text"   placeholder="cuidad"></li>
        <li class="li-form-registrarse-seccion col-sm-12 col-md-6 col-lg-6 col-xl-6 col-12"><input class="input-option " type="text"   placeholder="Estado/Provincia/Región"></li>
        <li class="li-form-registrarse-seccion col-sm-12 col-md-6 col-lg-6 col-xl-6 col-12"><input class="input-option " type="text"   placeholder="Codigo Postal"></li>
        <li class="li-form-registrarse-seccion row col-12">
        <li class="li-form-registrarse-seccion  col-6 "><input type="button" class="btn btn-danger buttonForm3" value="Anterior" onclick="activarAnteriorForm1()"></li>
        <li class="li-form-registrarse-seccion  col-6 "><input type="button" class="btn btn-danger buttonForm3" value="Siguiente" onclick="activarSiguienteForm2()"></li>
    `));
  }
  function textPlano(){
    $("#información").append($(`
        <h2 class="tittle-registrarse-seccion col-12 ">Registra Tu Empresa</h2><br>
        <li class="li-form-registrarse-seccion col-12" >
            <div class="line">
            </div>
        </li>
    `));
  }
  function preguntaSeguridad(){
      console.log($("#select-css").val());
      if($("#select-css").val()==1||$("#select-css").val()==2){
        $("#preguntaSeguridad").html($(`
            <input type="text" placeholder="Respuesta" class="input-option" style="margin-top: 12px;" name="" id="respuestaSeguridadText">
        `));
      }if($("#select-css").val()==3){
        $("#preguntaSeguridad").html($(`
            <input type="text"  placeholder="Pregunta" class="input-option" style="margin-top: 12px;" name="" id="preguntaSeguridadText">
            <input type="text"  placeholder="Respuesta" class="input-option" style="margin-top: 12px;" name="" id="respuestaSeguridadText">
        `));
      }
  }