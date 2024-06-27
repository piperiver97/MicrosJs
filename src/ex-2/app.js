let num1 = 3 
let num2 = 5
let suma = document.getElementById("suma");

function Suma(number1, number2){
    let resultado = number1 + number2;
    suma.innerHTML= "La suma de "+ num1 + " y " + num2 +" es igual a "+ resultado;
}
Suma(3 , 5);