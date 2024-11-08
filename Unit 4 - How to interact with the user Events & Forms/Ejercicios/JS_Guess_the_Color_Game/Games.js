//Codificar un juego de adivinanzas de colores con JavaScript es bastante simple:

// 1. Creas un juego en el que el jugador verá un único valor RGB para un color.
// 2. El jugador debe hacer clic en un color que crea que coincide con el valor RGB mostrado.
// 3. Puedes agregar fácilmente más funciones al juego para hacerlo más difícil.
// Por ejemplo, podrías limitar el número de conjeturas o darle al jugador tres “vidas”. 
// Con cada suposición equivocada, perderían una y el juego terminaría cuando se quedaran sin vidas.


// Genera un color RGB aleatorio
function generarColorAleatorio() {
    // Crea tres valores aleatorios entre 0 y 255 para R, G y B
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    // Devuelve el color en formato RGB
    return `rgb(${r}, ${g}, ${b})`;
}




// Variables del juego
var colorCorrecto = generarColorAleatorio(); // Color objetivo que el jugador debe adivinar
var vidas = 3; // Número de intentos permitidos
var colores = [colorCorrecto, generarColorAleatorio(), generarColorAleatorio(), generarColorAleatorio()];
// Mezcla los colores aleatoriamente para que el color correcto esté en una posición aleatoria
colores.sort(function() { return Math.random() - 0.5; });




// Función para actualizar el juego en la página
function actualizarJuego() {
    // Muestra el valor RGB del color correcto para que el jugador adivine
    document.getElementById("color-rgb").innerText = "Color RGB: " + colorCorrecto;
    const botonesColores = document.getElementById("botones-colores");
    botonesColores.innerHTML = ''; // Limpia cualquier botón de colores previo




    // Crea un botón para cada color en la lista
    colores.forEach(function(color) {
        const boton = document.createElement("button");
        // Configura el color de fondo y estilo del botón
        boton.style.backgroundColor = color;
        boton.style.width = "50px";
        boton.style.height = "50px";
        boton.style.margin = "5px";
        // Define la acción que ocurre al hacer clic en el botón
        boton.onclick = function() { verificarColor(color); };
        botonesColores.appendChild(boton); // Agrega el botón a la página
    });
}





// Función para verificar la suposición del jugador
function verificarColor(colorElegido) {
    const mensaje = document.getElementById("mensaje"); // Mensaje para mostrar el resultado
    if (colorElegido === colorCorrecto) {
        // Si el jugador acierta, muestra mensaje de éxito y reinicia el juego
        mensaje.innerText = "¡Correcto! Adivinaste el color.";
        reiniciarJuego();
    } else {
        // Si no acierta, reduce las vidas y muestra mensaje de error
        vidas--;
        if (vidas > 0) {
            mensaje.innerText = "Incorrecto. Te quedan " + vidas + " vidas.";
        } else {
            // Si se quedan sin vidas, muestra mensaje de fin de juego y reinicia
            mensaje.innerText = "Te quedaste sin vidas. ¡Juego terminado!";
            reiniciarJuego();
        }
    }
}




// Reinicia el juego con un nuevo color y resetea vidas y opciones
function reiniciarJuego() {
    colorCorrecto = generarColorAleatorio(); // Nuevo color correcto
    colores = [colorCorrecto, generarColorAleatorio(), generarColorAleatorio(), generarColorAleatorio()];
    colores.sort(function() { return Math.random() - 0.5; }); // Vuelve a mezclar los colores
    vidas = 3; // Restablece las vidas
    actualizarJuego(); // Actualiza la interfaz para una nueva ronda
}

// Inicializa el juego al cargar la página
actualizarJuego();




// Para la implementación del CSS
function verificarColor(colorElegido) {
    const mensaje = document.getElementById("mensaje"); // Mensaje para mostrar el resultado DESDE CSS "getElementById"
    mensaje.classList.remove("correcto", "incorrecto"); // Quita clases previas

    if (colorElegido === colorCorrecto) {
        mensaje.innerText = "¡Correcto! Adivinaste el color.";
        mensaje.classList.add("correcto"); // Clase del CSS
        reiniciarJuego();
    } else {
        vidas--;
        if (vidas > 0) {
            mensaje.innerText = "Incorrecto. Te quedan " + vidas + " vidas.";
            mensaje.classList.add("incorrecto"); // Clase del Css
        } else {
            mensaje.innerText = "Te quedaste sin vidas. ¡Juego terminado!";
            mensaje.classList.add("incorrecto"); // Clase del Css
            reiniciarJuego();
        }
    }
}

