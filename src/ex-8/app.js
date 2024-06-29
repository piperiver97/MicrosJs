
const text = document.getElementById("text");
const divtexto = document.getElementById("mostrarTexto");
const divboton = document.getElementById("validar");
const vocales = "aeiouáéíóúü";

divboton.addEventListener('click', () => {

    comprobacion()

})
function comprobacion() {
    const length = text.value.length;

    if (length === 0) {
        window.alert("El campo esta vacio");
    } else {
        showText();

    }
}

function showText() {
    var mostrar = text.value;

    escribirvocales(mostrar);

}

function escribirvocales(infotexto) {

    let showVocales = [];
    for (let i = 0; i < infotexto.length; i++) {
        const letra = infotexto[i].toLowerCase();
        if (vocales.includes(letra)) {
            showVocales.push(infotexto[i]);

        }
    }

    divtexto.innerHTML = showVocales;

}
