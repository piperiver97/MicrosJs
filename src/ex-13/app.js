// Creación de constantes para recoger elementos Id del HTML
const mostrarResultado = document.getElementById("mostrarResultado");
const num1 = document.getElementById("num1");
const divisible = document.getElementById("divisible");
const resetear = document.getElementById("resetear");

// Función para encontrar y mostrar los divisores de un número dado
function mostrarDivisores(num) {
    let divisores = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            divisores.push(i);
        }
    }
    mostrarResultado.innerHTML = `Los divisores de ${num} son: ${divisores.join(', ')}`;
}

// Manejo del evento de clic para calcular los divisores
divisible.addEventListener("click", () => {
    const numValue = parseInt(num1.value);
    if (!isNaN(numValue) && numValue > 0) {
        mostrarDivisores(numValue);
    } else {
        mostrarResultado.innerHTML = "Por favor, ingrese un número válido y positivo.";
    }
});

// Función para resetear los campos y el resultado
resetear.addEventListener("click", () => {
    num1.value = "";
    mostrarResultado.innerHTML = "";
});
