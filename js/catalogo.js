/* ==========================================================
   PokéVault - js/catalogo.js
   Lógica solo de catalogo.html: filtros por categoría,
   orden por precio y botón "Agregar al carrito".
   Se carga después de script.js (global).
   ========================================================== */

document.addEventListener("DOMContentLoaded", function () {
  iniciarCatalogo();
});

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

  var productos = Array.prototype.slice.call(cuadricula.querySelectorAll(".product"));

  // Guardamos el orden original para el criterio "Destacados"
  productos.forEach(function (producto, i) {
    producto.dataset.order = i;
  });

  /* ---------- Filtro por categoría ---------- */
  function aplicarFiltro() {
    var visibles = 0;

    productos.forEach(function (producto) {
      var categorias = producto.dataset.category.split(" ");
      var coincide = filtroActual === "all" || categorias.indexOf(filtroActual) !== -1;
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

  /* ---------- Orden por precio ---------- */
  selectOrden.addEventListener("change", function () {
    var criterio = selectOrden.value;

    var ordenados = productos.slice().sort(function (a, b) {
      if (criterio === "price-desc") return Number(b.dataset.price) - Number(a.dataset.price);
      if (criterio === "price-asc") return Number(a.dataset.price) - Number(b.dataset.price);
      return Number(a.dataset.order) - Number(b.dataset.order);
    });

    ordenados.forEach(function (producto) {
      cuadricula.appendChild(producto);
    });
  });

  /* ---------- Agregar al carrito (demostración) ---------- */
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

    // Sube el contador ficticio del menú (definido en script.js)
    if (window.sumarAlCarrito) {
      window.sumarAlCarrito(1);
    }
  });
}