// Obtener los elementos del DOM por su ID
const text = document.getElementById("text");
const divtexto = document.getElementById("mostrarTexto");
const divboton = document.getElementById("validar");

// Declarar una cadena que contiene todas las vocales y un contador
const vocales = "aeiouáéíóúü";
let cont = 0;

// Agregar un evento al botón de validar, que ejecuta la función comprobacion cuando se hace clic
divboton.addEventListener('click', () => {
    comprobacion();
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

// Función que cuenta las vocales en el texto y actualiza el HTML para mostrar el conteo
function contarvocales(infotexto) {
    // Recorrer cada carácter del texto ingresado
    for (let i = 0; i < infotexto.length; i++) {
        const letra = infotexto[i].toLowerCase(); // Convertir la letra a minúscula
        if (vocales.includes(letra)) { // Verificar si la letra es una vocal
            cont++;
        }
    }

    // Actualizar el HTML para mostrar el número de vocales
    divtexto.innerHTML = "Este texto contiene " + cont + " vocales";

    // Reiniciar el contador de vocales
    cont = 0;
}
