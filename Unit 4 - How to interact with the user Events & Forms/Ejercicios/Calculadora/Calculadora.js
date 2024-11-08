// Función para agregar un valor a la pantalla de la calculadora
function appendToDisplay(value) {
    document.getElementById("display").value += value; // Agrega el valor al campo de entrada
}

// Función para limpiar la pantalla de la calculadora
function clearDisplay() {
    document.getElementById("display").value = ''; // Limpia el campo de entrada
}

// Función para calcular el resultado de la expresión en la pantalla
function calculateResult() { 
    const display = document.getElementById("display");
    try {
        // Evalúa la expresión en la pantalla y muestra el resultado
        display.value = eval(display.value);// Eval para calcular 
    } catch (error) {
        display.value = 'Error'; // Muestra 'Error' si hay un problema en la evaluación
    }
}
