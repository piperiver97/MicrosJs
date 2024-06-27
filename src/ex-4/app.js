const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const resultado = document.getElementById("resultado");
num2.addEventListener("input", () => {
    calcular()
})
const calcular = () => {
    let result = `${num1.value} + ${num2.value}`;
    result = eval(result);
    resultado.innerHTML = `la suma de ${num1.value} + ${num2.value} es igual a ${result}`;
}
