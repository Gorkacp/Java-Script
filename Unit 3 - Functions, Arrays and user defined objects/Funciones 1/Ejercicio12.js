/**
 * @name flatArray
 * @description Dado un array 2D, devuelve un array 1D que contiene todos los ítems 
 *
 * @param {[][]} arr - Array 2D a "aplanar" 
 * @returns {[]} - El array "aplanado"
 * 
 * @example
 *  flatArray([[1, 5, 4], [3, 10], [2, 5]]) // returns [1, 5, 6, 3, 10, 2, 5]
 */

function flatArray(arr) {
    // Utiliza el método flat con profundidad 1 para "aplanar" el array en un solo nivel
    return arr.flat(1);
}

//Ejemplo de uso
console.log(flatArray([[1, 5, 4], [3, 10], [2, 5]])); 
