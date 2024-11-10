/**
 * @name countLetter
 * @description Devuelve la cantidad de veces que una letra aparece en un string 
 *
 * @param {string} letter - Letra a contar
 * @param {string} text - Texto sobre el que realizar la cuenta de {letter}
 * @returns {Number} - Número de veces que aparece {letter} en {text}
 * 
 * @example
 *  countLetter("a", "javascript") // returns 2
 */

function countLetter(letter, text) {
    // Convierte el texto en un array de caracteres, filtra las coincidencias con letter y cuenta el total
    return [...text].filter(char => char === letter).length;
}
//Ejemplo de uso
console.log(countLetter("a", "javascript")); // 2
console.log(countLetter("i", "initialization")); // 3
