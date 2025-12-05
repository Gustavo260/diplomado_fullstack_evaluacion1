// 1. Contador de clics
const btnClick = document.getElementById("btn-click");
const counterSpan = document.getElementById("counter");

// Numero de clics
let counter = 0;

btnClick.addEventListener("click", () => {
  counter++;
  counterSpan.textContent = counter;
  console.log("Hiciste clic. Contador:", counter);
});

// 2. Cambiar mensaje de texto
const btnMessage = document.getElementById("btn-message");
const messageParagraph = document.getElementById("message");

// Flag para alternar estado
let isOriginal = true;

btnMessage.addEventListener("click", () => {
  if (isOriginal) {
    messageParagraph.textContent = "Mensaje cambiado con JavaScript";
    messageParagraph.classList.add("cambiado");
  } else {
    messageParagraph.textContent =
      "Este texto se puede cambiar con JavaScript.";
    messageParagraph.classList.remove("cambiado");
  }

  isOriginal = !isOriginal;
});

// Rotar imagen
let rotacion = 0;

function rotarImagen(boton) {
    // Obtener la imagen dentro de la misma tarjeta que el boton
    const card = boton.closest('.card');
    const imagen = card.querySelector('.card-img-top');
    
    // Incrementar rotacion en 90 grados
    rotacion += 90;
    
    // Aplicar la transformacion
    imagen.style.transition = 'transform 0.5s ease';
    imagen.style.transform = `rotate(${rotacion}deg)`;
}