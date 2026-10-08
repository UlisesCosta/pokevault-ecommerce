

document.addEventListener("DOMContentLoaded", function () {
  iniciarContadorCarrito();
});

/*  Contador del carrito (menú)  */
function iniciarContadorCarrito() {
  var claveContador = "pokevault-cart-count";

  function actualizarContadores(cantidad) {
    document.querySelectorAll("#cart-count").forEach(function (contador) {
      contador.textContent = cantidad;
    });
    document.querySelectorAll(".cart-link").forEach(function (enlace) {
      var unidad = cantidad === 1 ? "producto" : "productos";
      enlace.setAttribute("aria-label", "Ver carrito, " + cantidad + " " + unidad);
    });
  }

  var cantidadActual = parseInt(localStorage.getItem(claveContador), 10);
  if (Number.isNaN(cantidadActual) || cantidadActual < 0) {
    cantidadActual = 0;
    localStorage.setItem(claveContador, "0");
  }
  actualizarContadores(cantidadActual);

  window.sumarAlCarrito = function (cantidad) {
    var incremento = parseInt(cantidad, 10);
    if (Number.isNaN(incremento) || incremento < 1) incremento = 1;

    cantidadActual += incremento;
    localStorage.setItem(claveContador, String(cantidadActual));
    actualizarContadores(cantidadActual);
  };
}