/**
 * @name removeWords
 * @description Dado un string y un array de palabras a remover, devuelve el string sin las palabras removidas
 *
 * @param {string} str - Texto a recortar 
 * @param {string[]} words - Palabras a remover
 * @returns {string} - Texto resultante con las palabras removidas
 * 
 * @example
 *   removeWords("This is a really bad test", ["really", "bad"]) // returns "This is a test"
 */

function removeWords(str, words) {
    // Convierte el string en un array de palabras
    const wordArray = str.split(" ");
    
    // Filtra las palabras que no están en el array de palabras a remover
    const filteredArray = wordArray.filter(word => !words.includes(word));
    
    // Une el array filtrado de nuevo en un string y lo devuelve
    return filteredArray.join(" ");
}

//Ejemplo de uso
console.log(removeWords("Hola mundo", ["Hola", "mundo"])); 
