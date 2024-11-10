/**
 * @name getFactorial
 * @description Devuelve el factorial de un número
 *
 * @param {number} x - Número del cuál obtener factorial
 * @returns {Number} - Factorial de {x}
 *
 * @example
 *  getFactorial(4) // returns 24
 */


function getFactorial(x) {
    if (x < 0) return undefined; // Factorial no está definido para números negativos
    if (x === 0 || x === 1) return 1; // Factorial de 0 o 1 es 1
    let result = 1;
    for (let i = 2; i <= x; i++) {
        result *= i;
    }
    return result;
}
document.write(getFactorial(4)); // returns 24
