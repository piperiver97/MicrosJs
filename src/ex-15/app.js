// Creación de constantes para recoger elementos Id del HTML
const mostrarResultado = document.getElementById("mostrarResultado");
const num1 = document.getElementById("num1");
const verificar = document.getElementById("verificar");
const resetear = document.getElementById("resetear");

// Función para verificar si un número es primo
function esPrimo(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Manejo del evento de clic para verificar si el número es primo
verificar.addEventListener("click", () => {
    const numValue = parseInt(num1.value);
    if (!isNaN(numValue) && numValue > 0) {
        if (esPrimo(numValue)) {
            mostrarResultado.innerHTML = `El número ${numValue} es primo.`;
        } else {
            mostrarResultado.innerHTML = `El número ${numValue} no es primo.`;
        }
    } else {
        mostrarResultado.innerHTML = "Por favor, ingrese un número válido y positivo.";
    }
});

// Función para resetear los campos y el resultado
resetear.addEventListener("click", () => {
    num1.value = "";
    mostrarResultado.innerHTML = "";
});
