document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("formulario").addEventListener('submit', validarFormulario); 
});

function validarFormulario(evento) {
  evento.preventDefault();

  var user = document.getElementById('inputUser').value;
  var expresion = /@/ 
  if (!expresion.test(user) ) {
    alert('Usuario no válido');
    return;
  }
  this.submit();
  alert("¡Gracias!")
}