//2. Definir una funcion que muestre informaci n sobre una cadena de texto que se 
//le pasa como argumento. A partir de la cadena que se le pasa, la funcion 
//determina si esa cadena esta formada  por mayusculas, o por minusculas o 
//por una mezcla de ambas.

function informacionCadena(cadena) {
    if (cadena === cadena.toUpperCase()) {
        document.write("La cadena está formada solo por mayúsculas.<br>");
    } else if (cadena === cadena.toLowerCase()) {
        document.write("La cadena está formada solo por minúsculas.<br>");
    } else {
        document.write("La cadena está formada por una mezcla de mayúsculas y minúsculas.<br>");
    }
}
Ejemplo de uso:
let cadena1 = "HOLA MUNDO";
let cadena2 = "hola mundo";
let cadena3 = "Hola Mundo";

document.write("Cadena 1: " + cadena1 + "<br>");
informacionCadena(cadena1);

document.write("Cadena 2: " + cadena2 + "<br>");
informacionCadena(cadena2);

document.write("Cadena 3: " + cadena3 + "<br>");
informacionCadena(cadena3);
