const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const resultado = document.getElementById("resultado");
const btn = document.getElementById("recoger");
btn.addEventListener("click", () => {
    const valueOne = Number(num1.value);
    const valueTwo = Number(num2.value);
    const valueTree = Number(num3.value);
    resultado.innerHTML = Math.max(valueOne, valueTwo, valueTree);
    console.log(valueOne);
})

