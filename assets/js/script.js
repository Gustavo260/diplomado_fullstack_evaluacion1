// 1. Contador de clics
const btnClick = document.getElementById("btn-click");
const counterSpan = document.getElementById("contador");

// Numero de clics
let contador = 0;

btnClick.addEventListener("click", () => {
  contador++;
  counterSpan.textContent = contador;
  console.log("Hiciste clic. Contador:", contador);
});

// 2. Cambiar mensaje de texto
const btnMessage = document.getElementById("btn-message");
const messageParagraph = document.getElementById("mensaje");

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
    // Otiene la imagen dentro de la  tarjeta 
    const card = boton.closest('.card');
    const imagen = card.querySelector('.card-img-top');
    
    // rotacion en 90 grados
    rotacion += 90;
    
    // Aplica transformación
    imagen.style.transition = 'transform 0.5s ';
    imagen.style.transform = `rotate(${rotacion}deg)`;
}

