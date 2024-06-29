// Creación de constantes para recoger elementos Id del HTML
const mostrarResultado = document.getElementById("mostrarResultado");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const calcular = document.getElementById("calcular");
const resetear = document.getElementById("resetear");

// Función para encontrar los divisores de un número dado
function encontrarDivisores(num) {
    let divisores = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            divisores.push(i);
        }
    }
    return divisores;
}

// Función para encontrar y mostrar los divisores comunes de dos números dados
function mostrarDivisoresComunes(num1, num2) {
    const divisoresNum1 = encontrarDivisores(num1);
    const divisoresNum2 = encontrarDivisores(num2);
    const divisoresComunes = divisoresNum1.filter(divisor => divisoresNum2.includes(divisor));
    mostrarResultado.innerHTML = `Los divisores comunes de ${num1} y ${num2} son: ${divisoresComunes.join(', ')}`;
}

// Manejo del evento de clic para calcular los divisores comunes
calcular.addEventListener("click", () => {
    const numValue1 = parseInt(num1.value);
    const numValue2 = parseInt(num2.value);
    if (!isNaN(numValue1) && numValue1 > 0 && !isNaN(numValue2) && numValue2 > 0) {
        mostrarDivisoresComunes(numValue1, numValue2);
    } else {
        mostrarResultado.innerHTML = "Por favor, ingrese dos números válidos y positivos.";
    }
});

// Función para resetear los campos y el resultado
resetear.addEventListener("click", () => {
    num1.value = "";
    num2.value = "";
    mostrarResultado.innerHTML = "";
});
