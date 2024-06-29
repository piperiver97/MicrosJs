//Dado que accedo a la página
//Cuando relleno el formulario y lo valido
//Veo el texto con el nombre de usuario dado en el formulario
// Obtener los elementos del DOM (Document Object Model) por su ID
const text = document.getElementById("text");
const divtextoa = document.getElementById("mostrarTextoa");
const divtextoe = document.getElementById("mostrarTextoe");
const divtextoi = document.getElementById("mostrarTextoi");
const divtextoo = document.getElementById("mostrarTextoo");
const divtextou = document.getElementById("mostrarTextou");
const divboton = document.getElementById("validar");
const divbotonreset = document.getElementById("resetear");

// Declarar las variables que contarán cada vocal
let conta = 0;
let conte = 0;
let conti = 0;
let conto = 0;
let contu = 0;

// Agregar un evento al botón de validar, que ejecuta la función comprobacion cuando se hace clic
divboton.addEventListener("click", () => {
  comprobacion();
});

// Agregar un evento al botón de resetear, que ejecuta la función resetear cuando se hace clic
divbotonreset.addEventListener("click", () => {
  resetear();
});

// Función que verifica si el campo de texto está vacío o no
function comprobacion() {
  const length = text.value.length;

  if (length === 0) {
    // Mostrar una alerta si el campo está vacío
    window.alert("El campo esta vacio");
  } else {
    // Llamar a la función showText si el campo no está vacío
    showText();
  }
}

// Función que muestra el texto ingresado y cuenta las vocales
function showText() {
  var mostrar = text.value;

  // Llamar a la función que cuenta las vocales en el texto ingresado
  contarvocales(mostrar);
}

// Función que cuenta las vocales en el texto y actualiza el HTML para mostrar los conteos
function contarvocales(infotexto) {
  // Recorrer cada carácter del texto ingresado
  for (let i = 0; i < infotexto.length; i++) {
    const letra = infotexto[i].toLowerCase(); // Convertir la letra a minúscula

    // Contar cada tipo de vocal y actualizar el HTML correspondiente
    if (letra === "a") {
      conta++;
      divtextoa.innerHTML = "Este texto contiene " + conta + " A";
    } else if (letra === "e") {
      conte++;
      divtextoe.innerHTML = "Este texto contiene " + conte + " E";
    } else if (letra === "i") {
      conti++;
      divtextoi.innerHTML = "Este texto contiene " + conti + " I";
    } else if (letra === "o") {
      conto++;
      divtextoo.innerHTML = "Este texto contiene " + conto + " O";
    } else if (letra === "u") {
      contu++;
      divtextou.innerHTML = "Este texto contiene " + contu + " U";
    } else if (conta === 0 && conte === 0 && conti === 0 && conto === 0 && contu === 0) {
      divtextoa.innerHTML = "Este texto no contiene vocales";
    }
  }

  // Reiniciar los contadores de vocales
  conta = 0;
  conte = 0;
  conti = 0;
  conto = 0;
  contu = 0;
}

// Función que recarga la página para restablecer el formulario
function resetear() {
  window.location.reload();
}
