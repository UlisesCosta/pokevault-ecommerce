

document.addEventListener("DOMContentLoaded", function () {
  iniciarQuienesSomos();
});

function iniciarQuienesSomos() {
  var boton = document.getElementById("btn-toggle-vault");
  var panel = document.getElementById("vault-accordion-panel");
  var flecha = document.getElementById("btn-toggle-arrow");
  var etiqueta = document.getElementById("btn-toggle-label");
  if (!boton || !panel || !flecha || !etiqueta) return;

  boton.addEventListener("click", function () {
    var abierto = boton.getAttribute("aria-expanded") === "true";

    panel.hidden = abierto;
    boton.setAttribute("aria-expanded", abierto ? "false" : "true");
    flecha.textContent = abierto ? "arrow_drop_down" : "arrow_drop_up";
    etiqueta.textContent = abierto
      ? "Ver más detalles de la Bóveda"
      : "Ocultar detalles de la Bóveda";
  });
}