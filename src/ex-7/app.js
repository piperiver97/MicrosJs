
document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("contarButton").addEventListener("click", contarLetraA);
});

function contarLetraA() {

    let frase = document.getElementById("frase").value;
    let contadorA = 0;

    for (let i = 0; i < frase.length; i++) {
        if (frase[i].toLowerCase() === 'a') {
            contadorA++;
        }
    }
    document.getElementById("resultado").innerText =
        "La letra 'a' aparece " + contadorA + " veces en la frase.";
}
