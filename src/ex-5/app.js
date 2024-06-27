const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const resultado = document.getElementById("resultado");
const btn = document.getElementById("recoger");
btn.addEventListener("click", () => {
    const valueOne = Number(num1.value);
    const valueTwo = Number(num2.value);
    resultado.innerHTML = Math.max(valueOne, valueTwo);
    console.log(valueOne);
})

