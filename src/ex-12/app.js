// Creación de constantes para recoger elementos Id del HTML
const mostrarResultado = document.getElementById("mostrarResultado");
const num1 = document.getElementById("num1");
const divisible = document.getElementById("divisible");
const divbotonreset = document.getElementById("resetear");

// Función que pinta en HTML si el número dado es divisible por 2, 3, 5 o 7
function numerodivisible(num) {
    let esDivisible = false;
    let resultados = "";

    if (num % 2 === 0) {
        resultados += "El número es divisible por 2<br>";
        esDivisible = true;
    }
    if (num % 3 === 0) {
        resultados += "El número es divisible por 3<br>";
        esDivisible = true;
    }
    if (num % 5 === 0) {
        resultados += "El número es divisible por 5<br>";
        esDivisible = true;
    }
    if (num % 7 === 0) {
        resultados += "El número es divisible por 7<br>";
        esDivisible = true;
    }

    if (!esDivisible) {
        resultados = "El número no es divisible por 2, 3, 5 o 7";
    }

    mostrarResultado.innerHTML = resultados;
}

// Manejo del evento de clic para verificar si el número es divisible
divisible.addEventListener("click", () => {
    const numValue = parseInt(num1.value);
    if (!isNaN(numValue)) {
        numerodivisible(numValue);
    } else {
        mostrarResultado.innerHTML = "Por favor, ingrese un número válido.";
    }
});

// Función para resetear los campos
function resetear() {
    num1.value = "";
    mostrarResultado.innerHTML = "";
}

// Manejo del evento de clic para resetear la web
divbotonreset.addEventListener("click", resetear);
