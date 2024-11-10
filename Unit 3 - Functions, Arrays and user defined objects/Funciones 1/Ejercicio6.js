/**
 * @name getRockPaperScissor
 * @description Devuelve una jugada aleatoria de piedra, papel o tijera
 * 
 * @returns {String} - Devuelve "rock", "paper" o "scissor"
 *
 * @example
 *  getRockPaperScissor() // returns "paper"
 */
function getRockPaperScissor() {
    const options = ["rock", "paper", "scissor"]; // Array de opciones
    const randomIndex = Math.floor(Math.random() * options.length); // Genera un índice aleatorio
    return options[randomIndex]; // Devuelve la opción seleccionada aleatoriamente
}
// Ejemplo de uso
const jugada = getRockPaperScissor();
document.write("La jugada aleatoria es:"+ jugada);