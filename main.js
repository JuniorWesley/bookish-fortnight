let windowObjectReference;
const windowFeatures = "popup";

function OpenPopUp() {
  windowObjectReference = window.open("http://localhost/sam/frontend/view/login/index.php", "Imprimir cartões", windowFeatures);
}

const button = document.querySelector("button")
button.addEventListener("click", OpenPopUp);