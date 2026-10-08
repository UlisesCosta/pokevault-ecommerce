

document.addEventListener("DOMContentLoaded", function () {
  iniciarContadorCarrito();
});

/*  Contador ficticio del carrito (menú)  */
function iniciarContadorCarrito() {
  var contador = document.getElementById("cart-count");

  window.sumarAlCarrito = function (cantidad) {
    if (!contador) return;
    var actual = parseInt(contador.textContent, 10) || 0;
    contador.textContent = actual + (cantidad || 1);
  };
}