// Variables para manejar el temporizador
let startTime = 0; // Momento en que comienza el temporizador
let elapsedTime = 0; // Tiempo transcurrido desde el inicio o el último reinicio
let timerInterval = null; // Referencia al intervalo del temporizador

// Función para formatear el tiempo en formato HH:MM:SS
function formatTime(time) {
    const hours = Math.floor(time / 3600000); // Calcula las horas
    const minutes = Math.floor((time % 3600000) / 60000); // Calcula los minutos restantes
    const seconds = Math.floor((time % 60000) / 1000); // Calcula los segundos restantes
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`; // Devuelve el tiempo formateado con ceros a la izquierda
}

// Función para actualizar el contenido del display en el DOM
function updateDisplay() {
    const display = document.getElementById("display"); // Selecciona el elemento del DOM con id 'display'
    display.textContent = formatTime(elapsedTime); // Actualiza el texto del display con el tiempo formateado
}

// Evento para el botón de iniciar el temporizador
document.getElementById("start").addEventListener("click", () => {
    if (!timerInterval) { // Solo inicia si no hay un intervalo en ejecución
        startTime = Date.now() - elapsedTime; // Ajusta el inicio para continuar desde donde se pausó
        timerInterval = setInterval(() => { // Crea un intervalo que se ejecuta cada segundo
            elapsedTime = Date.now() - startTime; // Calcula el tiempo transcurrido
            updateDisplay(); // Actualiza el display con el nuevo tiempo
        }, 1000);
    }
});

// Evento para el botón de detener el temporizador
document.getElementById("stop").addEventListener("click", () => {
    clearInterval(timerInterval); // Detiene el intervalo
    timerInterval = null; // Limpia la referencia al intervalo
});

// Evento para el botón de reiniciar el temporizador
document.getElementById("reset").addEventListener("click", () => {
    clearInterval(timerInterval); // Detiene el intervalo
    timerInterval = null; // Limpia la referencia al intervalo
    elapsedTime = 0; // Reinicia el tiempo transcurrido a 0
    updateDisplay(); // Actualiza el display con el tiempo reiniciado
});

// Inicializa el display con el tiempo inicial (0)
updateDisplay();

