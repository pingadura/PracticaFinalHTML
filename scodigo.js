function tipoDeDocumentos() {

 const selector = document.getElementById('selector');
    const mensaje = document.getElementById('mensaje');

    selector.addEventListener('change', function () {
      const valor = selector.value;

      if (valor === 'dni') {
        alert('Has elegido: documento nacional de la identidad.')
      } else if (valor === 'visa') {
       alert('has elegido: pasaporte con visa.')
      } else if (valor === 'novisa') {
        alert('Has elegido: pasaporte sin visa.')
      } else {
        mensaje.textContent = '';
      }
    });
}
function registrar(){
  window.location.href = "./sitioweb2.html";
}

function enviarDatos(){
  document.getElementById("nomsospechoso").value = "";

  document.getElementById("resultado").textContent = "REPORTE ENVIADO";


}