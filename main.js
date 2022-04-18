let windowObjectReference;
const windowFeatures = "popup";

function OpenPopUp() {
  windowObjectReference = window.open("cartao_circuito.php", "Imprimir cartões", windowFeatures);
}

const button = document.querySelector("button")
button.addEventListener("click", OpenPopUp);