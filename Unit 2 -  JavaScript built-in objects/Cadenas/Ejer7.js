//7. Desarrolla una funcion que tomando como entrada una cadena de texto nos 
//devuelva si es o no un palindromo. 

function esPalindromo(cadena) {
    // Convertimos la cadena a minúsculas 
    let cadenaMin = cadena.toLowerCase();

    // Invertimos
    let cadenaInvertida = cadenaMin.split('').reverse().join('');

    // Comparamos la cadena original con la invertida
    if (cadenaMin === cadenaInvertida) {
       document.write("La cadena \"" + cadena + "\" es un palíndromo.<br>");
    } else {
        document.write("La cadena \"" + cadena + "\" no es un palíndromo.<br>");
    }
}

// Ejemplo de uso:
let cadena1 = "Anita lava la tina";
let cadena2 = "parabarap";
let cadena3 = "Messi is the goat";

document.write("Cadena 1: " + cadena1 + "<br>");
esPalindromo(cadena1);

document.write("Cadena 2: " + cadena2 + "<br>");
esPalindromo(cadena2);

document.write("Cadena 3: " + cadena3 + "<br>");
esPalindromo(cadena3);