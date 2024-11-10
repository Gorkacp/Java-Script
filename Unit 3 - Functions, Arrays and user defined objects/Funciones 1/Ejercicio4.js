/**
 * @name getPercentage
 * @description Devuelve el porcentaje correspondiente de un número
 * 
 * @param {number} number - Número a obtener el porcentage
 * @param {number} percentage - Porcentaje a obtener
 * @returns {Number}
 *
 * @example
 *  getPercentage(200, 10) // returns 20
 */
function getPercentage(number, percentage) {
    return (number * percentage) / 100; // Calcula el porcentaje
}

// Ejemplo de uso
let num = 200;
let percent = 10;
let resultado = getPercentage(num, percent);
document.write("El porcentaje  de " +num + " es: " + resultado);