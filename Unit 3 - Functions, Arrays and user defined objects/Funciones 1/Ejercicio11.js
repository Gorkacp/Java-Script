/**
 * @name getFileExtension
 * @description Obtiene la extensión de un archivo
 *
 * @param {string} file - El nombre del archivo a obtener la extensión 
 * @returns {String} - La extensión del archivo
 * 
 * @example
 *  getFileExtension("imagen.jpg") // returns "jpg"
 */

function getFileExtension(file) {
    // Buscar el último punto en el nombre del archivo y devolver la parte posterior
    return file.slice(file.lastIndexOf(".") + 1);
}
//Ejemplo de uso
console.log(getFileExtension("imagen.jpg")); // "jpg"
console.log(getFileExtension("archivo.tar.gz")); // "gz"
