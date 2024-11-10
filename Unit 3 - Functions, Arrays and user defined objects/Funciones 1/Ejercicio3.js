/**
 * @name getBiggestNumber
 * @description Devuelve el número más grande de un array
 * 
 * @param {number[]} numbers - Un array de números
 * @returns {Number} El número más grande del arrray {numbers}
 *
 * @example
 *  getBiggestNumber([3, 8, 2, 1, 10]) // returns 10
 */
function getMayor(numeros){
    if(numeros.length ===0){
        return null; //Por si no se introduce nada en el array
    }
    return Math.max(...numeros); //Funcion para devolver el mas grande
}
//Ejemplo de uso
let arrayDeNumeros = [3, 8, 2, 1, 10];
let maxNumero = getMayor(arrayDeNumeros);
document.write("El numero mas grande del array es : " + maxNumero);