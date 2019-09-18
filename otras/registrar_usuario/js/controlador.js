var meses = ["Mes","Ene","Feb","Mar","Abril","Mayo","Jun","Jul","Agos","Sept","Octu","Nov","Dic"];
for(var i=0; i<meses.length;i++){
    document.getElementById('Cumple_mes').innerHTML+=`<option value="${i}">${meses[i]}</option>`;
};
for(var i=1900; i<=2019;i++){
    document.getElementById('Cumple_anio').innerHTML+=`<option value="${i}">${i}</option>`;
};
for(var i=1; i<=31;i++){
    document.getElementById('Cumple_dia').innerHTML+=`<option value="${i}">${i}</option>`;
};
function myFunctioncontaseña() {
    var x = document.getElementById('contrasenia');
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
}
function myFunctioncontaseñaConfirmar() {
    var x = document.getElementById('contraseniaConfirmar');
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
}
var parametro=[];
function activarSiguiente(){
  if($("#Nombre").val()==""){
    $("#ValidadNombre").html($(`
      <div class="row" style="margin-left: 0px;margin-right: 0px;">
        <span style="color: rgb(255, 255, 255);">Campo Vacio</span>
        <img class="col-1" src="img/icon/error.png" alt="" id="AlertCamposVaciosImag">
      </div>
    `));
  }else{
    $("#ValidadNombre").html($(`
    `));
  };
  if($("#Apellido").val()==""){
    $("#ValidadApellido").html($(`
      <div class="row" style="margin-left: 0px;margin-right: 0px;">
        <span style="color: rgb(255, 255, 255);">Campo Vacio</span>
        <img class="col-1" src="img/icon/error.png" alt="" id="AlertCamposVaciosImag">
      </div>
    `));
  }else{
    $("#ValidadApellido").html($(`
    `));
  };
  if($("#Apodo").val()==""){
    $("#ValidadApodo").html($(`
      <div class="row" style="margin-left: 0px;margin-right: 0px;">
        <span style="color: rgb(255, 255, 255);">Campo Vacio</span>
        <img class="col-1" src="img/icon/error.png" alt="" id="AlertCamposVaciosImag">
      </div>
    `));
  }else{
    $("#ValidadApodo").html($(`
    `));
  };
  if($("#Email").val()==""){
    $("#Validademail").html($(`
      <div class="row" style="margin-left: 0px;margin-right: 0px;">
        <span style="color: rgb(255, 255, 255);">Campo Vacio</span>
        <img class="col-1" src="img/icon/error.png" alt="" id="AlertCamposVaciosImag">
      </div>
    `));
  }else{
    $("#Validademail").html($(`
    `));
  };
  if($("#contrasenia").val()==""){
    $("#ValidarContrasenia").html($(`
      <div class="row" style="margin-left: 0px;margin-right: 0px;">
        <span style="color: rgb(255, 255, 255);">Campo Vacio</span>
        <img class="col-1" src="img/icon/error.png" alt="" id="AlertCamposVaciosImag">
      </div>
    `));
  }else{
    $("#ValidarContrasenia").html($(`
    `));
  };
  if($("#contraseniaConfirmar").val()==""){
    $("#ValidadContraseniaConfirmar").html($(`
      <div class="row" style="margin-left: 0px;margin-right: 0px;">
        <span style="color: rgb(255, 255, 255);">Campo Vacio</span>
        <img class="col-1" src="img/icon/error.png" alt="" id="AlertCamposVaciosImag">
      </div>
    `));
  }else{
    $("#ValidadContraseniaConfirmar").html($(`
    `));
  };
  if($("#Telefono").val()==""){
    $("#ValidadTelefono").html($(`
      <div class="row" style="margin-left: 0px;margin-right: 0px;">
        <span style="color: rgb(255, 255, 255);">Campo Vacio</span>
        <img class="col-1" src="img/icon/error.png" alt="" id="AlertCamposVaciosImag">
      </div>
    `));
  }else{
    $("#ValidadTelefono").html($(`
    `));
  };

  if($("#contrasenia").val()!=$("#contraseniaConfirmar").val()){
    $("#contraseñaComparando").html($(`
      <div class="row" style="margin-left: 0px;margin-right: 0px;">
        <span style="color: rgb(255, 255, 255);">Contraseñas no coinciden</span>
      </div>
    `));
  }else{
    $("#contraseñaComparando").html($(`
    `));
  };
  if($("#Cumple_dia").val()==0&&$("#Cumple_mes").val()==0&&$("#Cumple_anio").val()==0){
    $("#FechaNoIngresa").html($(`
      <div class="row" style="margin-left: 0px;margin-right: 0px;">
        <span style="color: rgb(255, 255, 255);">Fecha Mal Ingresada ó no ingresada</span>
      </div>
    `));
  }else{
    $("#FechaNoIngresa").html($(`
    `));
  };
  parametro={
Nombre: $("#Nombre").val(),
Apellido: $("#Apellido").val(),
Apodo: $("#Apodo").val(),
Email: $("#Email").val(),
contrasenia: $("#contrasenia").val(),
contraseniaConfirmar: $("#contraseniaConfirmar").val(),
Telefono: $("#Telefono").val(),
contrasenia: $("#contrasenia").val(),
Cumple_dia: $("#Cumple_dia").val(),
Cumple_mes: $("#Cumple_mes").val(),
Cumple_anio: $("#Cumple_anio").val(),
RadioMale: $("#RadioMale").val(),
RadioFemale: $("#RadioFemale").val(),
PreguntaSegurida: $("#PreguntaSegurida").val()
  }
console.log(parametro);
  if(
    $("#Nombre").val()!=""&&
    $("#Apellido").val()!=""&&
    $("#Apodo").val()!=""&&
    $("#Email").val()!=""&&
    $("#contrasenia").val()!=""&&
    $("#contraseniaConfirmar").val()!=""&&
    $("#Telefono").val()!=""&&
    $("#contrasenia").val()==$("#contraseniaConfirmar").val()&&
    $("#Cumple_dia").val()!=0&&
    $("#Cumple_mes").val()!=0&&
    $("#Cumple_anio").val()!=0){
      console.log($("#Nombre").val())
      $("#información").html($(`
        <div class="row" style="margin-left: 0px;margin-right: 0px;">
          <img class="col-4" src="img/icon/puntosFom2.png" alt="" id="PointsPoint">
      </div>
        <h2 class="tittle-registrarse-seccion  col-12" id="h2-registrarse-seccion">ubicacion</h2>
        <li class="li-form-registrarse-seccion col-sm-12 col-md-6 col-lg-6 col-xl-6 col-12" ><input class="input-option " type="text"   placeholder="Dirrección"></li>
        <li class="li-form-registrarse-seccion col-sm-12 col-md-6 col-lg-6 col-xl-6 col-12"><input class="input-option " type="text"   placeholder="país"></li>
        <li class="li-form-registrarse-seccion col-sm-12 col-md-6 col-lg-6 col-xl-6 col-12"><input class="input-option " type="text"   placeholder="cuidad"></li>
        <li class="li-form-registrarse-seccion col-sm-12 col-md-6 col-lg-6 col-xl-6 col-12"><input class="input-option " type="text"   placeholder="Estado/Provincia/Región"></li>
        <li class="li-form-registrarse-seccion col-sm-12 col-md-6 col-lg-6 col-xl-6 col-12"><input class="input-option " type="text"   placeholder="Codigo Postal"></li>
        <li class="li-form-registrarse-seccion  col-12">
            <div class="line">
            </div>
        </li>
        <input type="button" class="btn btn-danger" value="Anterior" onclick="activarAnteriorForm1()">
        <input type="button" class="btn btn-danger" value="Siguiente" onclick="activarSiguienteForm2()">
      `));
  }else{

  };
}
function activarAnteriorForm1(){
  $("#información").html($(`
      <div class="row" style="margin-left: 0px;margin-right: 0px;">
        <img class="col-4" src="img/icon/puntosFom1.png" alt="" id="PointsPoint">
      </div>
      <h2 class="tittle-registrarse-seccion  col-12 ">Registra Un Usuario</h2><br>
      <li class="li-form-registrarse-seccion  col-12" >
          <div class="line">
          </div>
      </li>
      <h2 class="tittle-registrarse-seccion  col-12" id="h2-registrarse-seccion">Información de la empresa</h2>
      <li class="li-form-registrarse-seccion col-sm-12 col-md-6 col-lg-6 col-xl-6 col-12"><input class="input-option " type="text" id="Nombre"  placeholder="Nombre" value="${parametro.Nombre}">
          <div id="ValidadNombre">
          </div>
      </li>
      <li class="li-form-registrarse-seccion col-sm-12 col-md-6 col-lg-6 col-xl-6 col-12"><input class="input-option " type="text"  id="Apellido" placeholder="Apellido" value="${parametro.Apellido}">
          <div id="ValidadApellido">
          </div>
      </li>
      <li class="li-form-registrarse-seccion col-sm-12 col-md-6 col-lg-6 col-xl-6 col-12"><input class="input-option " type="text"  id="Apodo" placeholder="@Nickname ó Apodo" value="${parametro.Apodo}">
          <div id="ValidadApodo">
          </div>
      </li>
      <li class="li-form-registrarse-seccion col-sm-12 col-md-6 col-lg-6 col-xl-6 col-12"><input class="input-option " type="email"  id="Email" placeholder="email" value="${parametro.Email}">
          <div id="Validademail">
          </div>
      </li>
      <li class="text-activar-contrasenia li-form-registrarse-seccion col-sm-12 col-md-6 col-lg-6 col-xl-6 col-12">
          <input class="input-option " type="password"  id="contrasenia" placeholder="password" value="${parametro.contrasenia}">
          <div class="col-12">
              <div class="funkyradio">
                  <div class="funkyradio-primary">
                      <input type="checkbox" name="checkbox" id="checkbox1" checked onclick="myFunctioncontaseña()"/>
                      <label for="checkbox1" style="margin-top: 5px;color: #fff;" class="label-ver-contrasenia">Ver Contraseña</label>
                  </div>
              </div>
          </div>
          <div id="ValidarContrasenia">
          </div>
      </li>
      <li class="text-activar-contrasenia li-form-registrarse-seccion col-sm-12 col-md-6 col-lg-6 col-xl-6 col-12">
          <input class="input-option " type="password" id="contraseniaConfirmar"  placeholder="confirmar password" value="${parametro.contraseniaConfirmar}">
          <div class="col-12">
              <div class="funkyradio">
                  <div class="funkyradio-primary">
                      <input type="checkbox" name="checkbox" id="checkbox2" checked onclick="myFunctioncontaseñaConfirmar()"/>
                      <label for="checkbox2" style="margin-top: 5px;color: #fff;" class="label-ver-contrasenia">Ver Contraseña</label>
                  </div>
              </div>
          </div>
          <div id="ValidadContraseniaConfirmar">
          </div>
      </li>
      <li id="contraseñaComparando" class="col-12"></li>
      <li class="li-form-registrarse-seccion col-sm-12 col-md-6 col-lg-6 col-xl-6 col-12">
          <input class="input-option " type="tel" id="Telefono"   placeholder="telefono" value="${parametro.Telefono}">
          <div id="ValidadTelefono">
          </div>
      </li>
      <li class="li-form-registrarse-seccion  col-12">
          <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-12" id="div_cumple">
              <label for="" class="label-file  col-12">fecha de nacimiento</label>
              <select class="Select_Compu col-sm-4 col-md-4 col-lg-4 col-xl-4 col-4 " name="cumpleanio_dia"  id="Cumple_dia" >
                  <option value="${parametro.Cumple_dia}">${parametro.Cumple_dia}</option>
              </select>
              <select class="Select_Compu col-sm-4 col-md-4 col-lg-4 col-xl-4 col-4 " name="cumpleanio_mes"  id="Cumple_mes" >
              <option value="${parametro.Cumple_mes}">${meses[parametro.Cumple_mes]} </option>
              </select>
              <select class="Select_Compu col-sm-4 col-md-4 col-lg-4 col-xl-4 col-4 " name="cumpleanio_anio"  id="Cumple_anio" >
              <option value="${parametro.Cumple_anio}">${parametro.Cumple_anio}</option>
              </select>
          </div>
      </li>
      <li id="FechaNoIngresa"></li>
      <li class="li-form-registrarse-seccion  col-12">
          <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-12" id="div_cumple">
              <label for="" class="label-file  col-12">Sexo</label>
              <div class="radio">
                  <label class="radion_sex col-sm-4 col-md-4 col-lg-4 col-xl-4 col-4 "><input type="radio" name="optradio" checked>Male</label>
                  <label class="radion_sex col-sm-4 col-md-4 col-lg-4 col-xl-4 col-4 "><input type="radio" name="optradio">Female</label>
                  <label class="radion_sex col-sm-4 col-md-4 col-lg-4 col-xl-4 col-4 "><input type="radio" name="optradio" disabled> There is no other</label>
              
          </div>
      </li>
      <li class="li-form-registrarse-seccion col-sm-12 col-md-6 col-lg-6 col-xl-6 col-12"><label for="" class="label-file">Pregunta de seguridad</label><input class="input-option " type="text"   placeholder="Tia(o) Favotita(o)" value="${parametro.PreguntaSegurida}"></li>
      <!--li class="li-form-registrarse-seccion col-sm-12 col-md-6 col-lg-6 col-xl-6 col-12"><label for="input-file-banner" class="label-file">Foto de perfil</label> <input class="btn btn-danger" id="input-file-banner" type="file"></li-->
      <li class="li-form-registrarse-seccion  col-12">
          <div class="line">
          </div>
      </li>
      <input type="button" class="btn btn-danger" value="Siguiente" id="confiButtonSiguiente" onclick="activarSiguiente()">
  `));
}
function activarSiguienteForm2(){
  $("#información").html($(`
    <div class="row" style="margin-left: 0px;margin-right: 0px;">
      <img class="col-4" src="img/icon/puntosFom3.png" alt="" id="PointsPoint">
    </div>
    <h2 class="tittle-registrarse-seccion  col-12" id="h2-registrarse-seccion">Redes Sociales</h2>
    <li class="li-form-registrarse-seccion col-sm-4 col-md-4 col-lg-4 col-xl-4 col-7"><label id="label-redes-facebook" for="facebookUsername" >facebook.com/</label></li>
    <li class="li-form-registrarse-seccion col-sm-8 col-md-8 col-lg-8 col-xl-8 col-12"><input class="input-option " type="text"></li>
    <li class="li-form-registrarse-seccion col-sm-4 col-md-4 col-lg-4 col-xl-4 col-7"><label id="label-redes-twitter" for="facebookUsername">twitter.com/</label></li>
    <li class="li-form-registrarse-seccion col-sm-8 col-md-8 col-lg-8 col-xl-8 col-12"><input class="input-option " type="text"></li>
    <li class="li-form-registrarse-seccion col-sm-4 col-md-4 col-lg-4 col-xl-4 col-7"><label id="label-redes-instagram" for="facebookUsername">instagram.com/</label></li>
    <li class="li-form-registrarse-seccion col-sm-8 col-md-8 col-lg-8 col-xl-8 col-12"><input class="input-option " type="text"></li>
    <li class="li-form-registrarse-seccion  col-6 " ><input type="button" class="btn btn-danger buttonForm3" value="Anterior" onclick="activarAnteriorForm2()"></li>
    <li class="li-form-registrarse-seccion  col-6 " ><input type="button" class="btn btn-danger buttonForm3" id="button-registrar" value="Registrar"></li>
  `));
}
function activarAnteriorForm2(){
  $("#información").html($(`
    <div class="row" style="margin-left: 0px;margin-right: 0px;">
      <img class="col-4" src="img/icon/puntosFom2.png" alt="" id="PointsPoint">
    </div>
    <h2 class="tittle-registrarse-seccion  col-12" id="h2-registrarse-seccion">ubicacion</h2>
    <li class="li-form-registrarse-seccion col-sm-12 col-md-6 col-lg-6 col-xl-6 col-12" ><input class="input-option " type="text"   placeholder="Dirrección"></li>
    <li class="li-form-registrarse-seccion col-sm-12 col-md-6 col-lg-6 col-xl-6 col-12"><input class="input-option " type="text"   placeholder="país"></li>
    <li class="li-form-registrarse-seccion col-sm-12 col-md-6 col-lg-6 col-xl-6 col-12"><input class="input-option " type="text"   placeholder="cuidad"></li>
    <li class="li-form-registrarse-seccion col-sm-12 col-md-6 col-lg-6 col-xl-6 col-12"><input class="input-option " type="text"   placeholder="Estado/Provincia/Región"></li>
    <li class="li-form-registrarse-seccion col-sm-12 col-md-6 col-lg-6 col-xl-6 col-12"><input class="input-option " type="text"   placeholder="Codigo Postal"></li>
    <li class="li-form-registrarse-seccion  col-12">
        <div class="line">
        </div>
    </li>
    <input type="button" class="btn btn-danger" value="Anterior" onclick="activarAnteriorForm1()">
    <input type="button" class="btn btn-danger" value="Siguiente" onclick="activarSiguienteForm2()">
  `));
}