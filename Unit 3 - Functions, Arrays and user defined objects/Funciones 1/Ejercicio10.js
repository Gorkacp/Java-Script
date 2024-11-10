/**
 * @name toHackerSpeak
 * @description Convierte un string a "Hacker Speak". Para hacerlo, tiene que transformar las "a" en 4, las "e" en 3, las "i"
 * en 1, las "o" en 0 y las "s" en 5
 *
 * @param {string} text 
 * @returns {String} - El texto convertido a "Hacker Speak"
 * 
 * @example
 *  toHackerSpeak("I'm a hacker now") // returns "1'm 4 h4ack3r n0w"
 */

function toHackerSpeak(text) {
    // Crear un objeto de mapeo para los caracteres y sus conversiones en "Hacker Speak"
    const hackerMapping = {
        'a': '4',
        'e': '3',
        'i': '1',
        'o': '0',
        's': '5'
    };

    // Convertir cada carácter del texto según el mapeo
    return text.replace(/[aeios]/gi, char => hackerMapping[char.toLowerCase()] || char);
}

console.log(toHackerSpeak("I'm a hacker now")); // Ejemplo de uso
