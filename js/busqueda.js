document.addEventListener("DOMContentLoaded", function () {
  iniciarBusqueda();
});

function iniciarBusqueda() {
  var formulario = document.getElementById("search-form");
  if (!formulario) return;

  var campo = document.getElementById("search-input");
  var mensajeError = document.getElementById("search-error");
  var titulo = document.getElementById("results-title");
  var conteo = document.getElementById("results-count");
  var lista = document.getElementById("results-list");
  var botonesPopulares = document.querySelectorAll(".popular__btn");
  var botonesAgregar = document.querySelectorAll(".js-add-result");

  function buscar(texto) {
    var termino = texto.trim();

    if (termino === "") {
      mensajeError.hidden = false;
      lista.hidden = true;
      titulo.textContent = "Resultados de la búsqueda";
      conteo.textContent = "Escribe el nombre de una carta y presiona Buscar.";
      campo.focus();
      return;
    }

    mensajeError.hidden = true;

    titulo.textContent = "Resultados para la búsqueda de ";
    var destacado = document.createElement("span");
    destacado.className = "results__query";
    destacado.textContent = termino;
    titulo.appendChild(destacado);

    conteo.textContent = lista.children.length + " productos de ejemplo";
    lista.hidden = false;
  }

  formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    buscar(campo.value);
  });

  campo.addEventListener("input", function () {
    mensajeError.hidden = true;
  });

  botonesPopulares.forEach(function (boton) {
    boton.addEventListener("click", function () {
      campo.value = boton.dataset.term;
      buscar(campo.value);
    });
  });

  botonesAgregar.forEach(function (boton) {
    boton.addEventListener("click", function () {
      if (window.sumarAlCarrito) {
        window.sumarAlCarrito(1);
      }

      var etiqueta = boton.querySelector(".js-add-label");
      etiqueta.textContent = "¡Agregado!";
      setTimeout(function () {
        etiqueta.textContent = "Agregar";
      }, 1500);
    });
  });
}