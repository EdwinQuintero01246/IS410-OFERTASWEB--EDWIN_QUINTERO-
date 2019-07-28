function VerContraseña() {
    var x = document.getElementById('contrasenia');
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
}