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