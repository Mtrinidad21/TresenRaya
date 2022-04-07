$(document).ready(function () {
  $("#boton-guardar").click(function () {
    /*Captura de datos escrito en los inputs*/
    var nom = document.getElementById("nombretxt").value;
    /*Guardando los datos en el LocalStorage*/
    localStorage.setItem("Nombre", nom);
    /*Limpiando los campos o inputs*/
    document.getElementById("nombretxt").value = "";
  });
});
