/* ==========================================================
   PokéVault - js/catalogo.js
   Filtros, ordenamiento y acciones del catálogo.
   ========================================================== */

document.addEventListener("DOMContentLoaded", iniciarCatalogo);

function iniciarCatalogo() {
  var cuadricula = document.getElementById("product-grid");
  if (!cuadricula) return;

  var chips = document.querySelectorAll("#chip-filters .chip");
  var contador = document.getElementById("item-counter");
  var selectOrden = document.getElementById("sort-select");
  var aviso = document.getElementById("vault-toast");
  var avisoTexto = document.getElementById("toast-message");
  var temporizador = null;
  var filtroActual = "all";
  var comparadorNombres = new Intl.Collator("es", { sensitivity: "base" });
  var productos = Array.prototype.slice.call(cuadricula.querySelectorAll(".product"));

  function aplicarFiltro() {
    var visibles = 0;

    productos.forEach(function (producto) {
      var coincide = filtroActual === "all" || producto.dataset.category === filtroActual;
      producto.hidden = !coincide;
      if (coincide) visibles++;
    });

    contador.textContent = visibles;
  }

  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      chips.forEach(function (otro) {
        otro.classList.remove("is-active");
        otro.setAttribute("aria-pressed", "false");
      });
      chip.classList.add("is-active");
      chip.setAttribute("aria-pressed", "true");
      filtroActual = chip.dataset.filter;
      aplicarFiltro();
    });
  });

  selectOrden.addEventListener("change", function () {
    var ordenados = productos.slice().sort(function (a, b) {
      if (selectOrden.value === "price-desc") {
        return Number(b.dataset.price) - Number(a.dataset.price);
      }
      if (selectOrden.value === "price-asc") {
        return Number(a.dataset.price) - Number(b.dataset.price);
      }
      if (selectOrden.value === "name-asc") {
        return comparadorNombres.compare(a.dataset.name, b.dataset.name);
      }
      return Number(a.dataset.order) - Number(b.dataset.order);
    });

    ordenados.forEach(function (producto) {
      cuadricula.appendChild(producto);
    });
  });

  function mostrarAviso(mensaje) {
    avisoTexto.textContent = mensaje;
    aviso.classList.add("is-visible");

    clearTimeout(temporizador);
    temporizador = setTimeout(function () {
      aviso.classList.remove("is-visible");
    }, 3000);
  }

  cuadricula.addEventListener("click", function (evento) {
    var boton = evento.target.closest(".js-add-to-cart");
    if (!boton) return;

    mostrarAviso(boton.dataset.name + " añadido al carrito");

    if (window.sumarAlCarrito) {
      window.sumarAlCarrito(1);
    }
  });

  aplicarFiltro();
}
