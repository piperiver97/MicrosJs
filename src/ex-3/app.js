const usuario = document.getElementById("usuario");
const recoger = document.getElementById("recoger");
const fraseVuelta = document.getElementById("fraseVuelta");
recoger.addEventListener("click",() =>{
    addText();
})
const addText = () =>{
    fraseVuelta.innerHTML = " Hola " + usuario.value; 
}
