/**
 * @name getRandomColorSequence
 * @description Devuelve una secuencia aleatoria de ciertos colores con cierta longitud
 * 
 * @param {string[]} colors - Array de colores a ser utilizados en la secuencia
 * @param {number} length - Longitud de la secuencia
 * @returns {String[]} - Secuencia aleatoria de colores disponibles en {colors}, con longitud {length}
 *
 * @example
 *  getRandomColorSequence(["red", "blue", "green"], 4) // returns ['blue', 'red', 'red', 'green']
 */
function getRandomColorSequence(colors, length) {
    const colorSequence = []; // Array para almacenar la secuencia de colores

    for (let i = 0; i < length; i++) {
        // Selecciona un color aleatorio del array de colores
        const randomIndex = Math.floor(Math.random() * colors.length);
        colorSequence.push(colors[randomIndex]); // Añade el color seleccionado a la secuencia
    }

    return colorSequence; // Devuelve la secuencia de colores aleatorios
}

// Ejemplo de uso
const colors = ["red", "blue", "green", "yellow", "purple"];
const length = 4;
const randomColors = getRandomColorSequence(colors, length);
document.write("Secuencia de colores aleatorios:"+ randomColors);