/* ==========================================================
   PokéVault - js/busqueda.js
   Lógica solo de busqueda.html: muestra el texto buscado
   en el área de resultados junto con productos ficticios.
   Se carga después de script.js (global).
   ========================================================== */

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

  /* Ejemplo: "camisas" -> "Resultados para la búsqueda de camisas" */
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

    // textContent / createElement evitan insertar HTML escrito por el usuario
    titulo.textContent = "Resultados para la búsqueda de ";
    var destacado = document.createElement("span");
    destacado.className = "results__query";
    destacado.textContent = termino;
    titulo.appendChild(destacado);

    conteo.textContent = lista.children.length + " productos de ejemplo en la bóveda verificada";
    lista.hidden = false;
  }

  formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    buscar(campo.value);
  });

  campo.addEventListener("input", function () {
    mensajeError.hidden = true;
  });

  /* Búsquedas populares: llenan el campo y buscan */
  botonesPopulares.forEach(function (boton) {
    boton.addEventListener("click", function () {
      campo.value = boton.dataset.term;
      buscar(campo.value);
    });
  });

  /* Botón "Agregar": sube el contador del menú (definido en script.js) */
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