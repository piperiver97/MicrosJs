//Dado que accedo a la página
//Cuando ingreso los tres números
//Veo que número es el mayor


// Obtener los elementos del DOM por su ID
let mostrarResultado = document.getElementById("mostrarResultado");
let num1 = document.getElementById("num1");
let divisible = document.getElementById("divisible");
const divbotonreset = document.getElementById("resetear");

// Función que verifica si un número es divisible por 2, 3, 5 o 7
function numerodivisible(num) {
  // Convertir el valor a un número entero
  num = parseInt(num);
  
  // Verificar si el número es divisible por 2, 3, 5 o 7
  if (num % 2 === 0 || num % 3 === 0 || num % 5 === 0 || num % 7 === 0) {
    mostrarResultado.innerHTML = "El número es divisible por 2, 3, 5 o 7";
  } else {
    mostrarResultado.innerHTML = "El número no es divisible por 2, 3, 5 o 7";
  }
}

// Agregar un evento al botón de verificar divisibilidad, que ejecuta la función numerodivisible cuando se hace clic
divisible.addEventListener("click", () => {
  numerodivisible(num1.value);
});

// Agregar un evento al botón de resetear, que ejecuta la función resetear cuando se hace clic
divbotonreset.addEventListener("click", () => {
  resetear();
});

// Función que recarga la página para restablecer el formulario
function resetear() {
  window.location.reload();
}
