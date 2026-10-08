

document.addEventListener("DOMContentLoaded", function () {
  iniciarRegistro();
});

function iniciarRegistro() {
  var form = document.getElementById("trainer-register-form");
  if (!form) return;

  var inputNombre = document.getElementById("reg-name");
  var inputCorreo = document.getElementById("reg-email");
  var inputClave = document.getElementById("reg-password");
  var inputFecha = document.getElementById("reg-birthdate");
  var inputTelefono = document.getElementById("reg-phone");
  var checkTerminos = document.getElementById("reg-terms");
  var botonEnviar = document.getElementById("reg-submit-btn");
  var botonVerClave = document.getElementById("toggle-pwd-btn");
  var mensajeError = document.getElementById("form-error");
  var mensajeExito = document.getElementById("form-success");

  /* Cada validador devuelve "" si el campo está bien,
     o el texto del error si no. El patrón de correo y teléfono
     vive en el atributo pattern del HTML (API de validación HTML5). */
  var campos = [
    {
      input: inputNombre,
      validar: function () {
        var v = inputNombre.value.trim();
        if (v === "") return "Completa este campo";
        if (v.length < 3) return "El nombre debe tener al menos 3 caracteres";
        return "";
      }
    },
    {
      input: inputCorreo,
      validar: function () {
        if (inputCorreo.value.trim() === "") return "Completa este campo";
        if (inputCorreo.validity.patternMismatch || inputCorreo.validity.typeMismatch) {
          return "Ingresa un correo electrónico válido";
        }
        return "";
      }
    },
    {
      input: inputClave,
      validar: function () {
        if (inputClave.value === "") return "Completa este campo";
        if (inputClave.value.length < 8) return "La contraseña debe incluir mínimo 8 caracteres";
        return "";
      }
    },
    {
      input: inputFecha,
      validar: function () {
        if (inputFecha.value === "") return "Completa este campo";
        var nacimiento = new Date(inputFecha.value + "T00:00:00");
        var hoy = new Date();
        var edad = hoy.getFullYear() - nacimiento.getFullYear();
        var yaCumplio =
          hoy.getMonth() > nacimiento.getMonth() ||
          (hoy.getMonth() === nacimiento.getMonth() && hoy.getDate() >= nacimiento.getDate());
        if (!yaCumplio) edad--;
        if (isNaN(edad) || edad < 14) return "Debes ser mayor de 14 años para registrarte";
        return "";
      }
    },
    {
      input: inputTelefono,
      validar: function () {
        if (inputTelefono.value.trim() === "") return "Completa este campo";
        if (inputTelefono.validity.patternMismatch) return "Ingresa un teléfono de 10 dígitos";
        return "";
      }
    }
  ];

  /* Muestra u oculta el error de un campo */
  function mostrarEstado(campo, mensaje) {
    var grupo = campo.input.closest(".field");
    var texto = grupo.querySelector(".field__error-text");
    if (mensaje) {
      texto.textContent = mensaje;
      grupo.classList.add("has-error");
    } else {
      grupo.classList.remove("has-error");
    }
  }

  /* Quita el error de un campo mientras el usuario corrige */
  campos.forEach(function (campo) {
    campo.input.addEventListener("input", function () {
      campo.input.closest(".field").classList.remove("has-error");
      mensajeError.hidden = true;
    });
  });

  /* Botón de enviar deshabilitado hasta marcar el checkbox */
  botonEnviar.disabled = !checkTerminos.checked;
  checkTerminos.addEventListener("change", function () {
    botonEnviar.disabled = !checkTerminos.checked;
  });

  /* Mostrar / ocultar contraseña */
  botonVerClave.addEventListener("click", function () {
    var esClave = inputClave.type === "password";
    inputClave.type = esClave ? "text" : "password";
    botonVerClave.querySelector(".material-symbols-outlined").textContent =
      esClave ? "visibility_off" : "visibility";
    botonVerClave.setAttribute("aria-label", esClave ? "Ocultar contraseña" : "Mostrar contraseña");
  });

  /* Envío: verifica que todo esté completo y correcto */
  form.addEventListener("submit", function (evento) {
    evento.preventDefault();
    mensajeExito.hidden = true;

    var primerInvalido = null;

    campos.forEach(function (campo) {
      var mensaje = campo.validar();
      mostrarEstado(campo, mensaje);
      if (mensaje && !primerInvalido) primerInvalido = campo.input;
    });

    if (primerInvalido) {
      mensajeError.hidden = false;
      primerInvalido.focus();
      return;
    }

    mensajeError.hidden = true;
    mensajeExito.hidden = false;
    form.reset();
    botonEnviar.disabled = true;
  });
}