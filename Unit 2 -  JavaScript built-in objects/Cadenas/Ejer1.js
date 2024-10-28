// 1.- Crea las siguientes funciones y llamalasdesde una página XHTML
// para mostrar su funcionamiento
// a)invierteCadena(cad_arg): devuelve invertida una cadena dada por el usuario
// b)inviertePalabras(cad_arg): devuelve invertidas las palabras contenidas en la cadena
// c)encuentraPalabraMasLarga(cad_arg): para una cadena de caracteres dada devuelve la longitud
// de la palabra mas larga en ella contenida
//d) filtraPalabrasMasLargas(cad_arg,): para una cadena de caracteres y un
//valor numerico , devuelva el numero de palabras cuya longitud es mayor. 
//e) cadenaBienFormada(cad_arg): formatea correctamente la cadena pasada,
//de tal modo que si lo aparece en mayuscula la primera letra y el resto en 
//minúscula. 

let cadena = "Hola caracola";
let numero = 4;

document.write("Cadena original: " + cadena + "<br><br>");
// a) invierteCadena: invierte una cadena dada por el usuario
function invierteCadena(cad_arg) {
    return cad_arg.split('').reverse().join('');
}
document.write("Cadena invertida: " + invierteCadena(cadena) + "<br><br>");

// b) inviertePalabras: invierte las palabras contenidas en la cadena
function inviertePalabras(cad_arg) {
    return cad_arg.split(' ').map(palabra => palabra.split('').reverse().join('')).join(' ');
}
document.write("Palabras invertidas: " + inviertePalabras(cadena) + "<br><br>");

// c) encuentraPalabraMasLarga: devuelve la longitud de la palabra más larga
function encuentraPalabraMasLarga(cad_arg) {
    let palabras = cad_arg.split(' ');
    let palabraMasLarga = palabras.reduce((a, b) => a.length > b.length ? a : b);
    return palabraMasLarga.length;
}
document.write("Longitud de la palabra más larga: " + encuentraPalabraMasLarga(cadena) + "<br><br>");



// d) filtraPalabrasMasLargas: devuelve el número de palabras cuya longitud es mayor a i
function filtraPalabrasMasLargas(cad_arg, i) {
    let palabras = cad_arg.split(' ');
    let contador = 0;
     Recorremos el arreglo de palabras
    for (let j = 0; j < palabras.length; j++) {
        if (palabras[j].length > i) {
            contador++;
        }
    }
    return contador;
}
// Ejemplo de uso:
let cadena = "Este es un ejemplo de una cadena con palabras de diferentes longitudes";
let numero = 4;
document.write("Número de palabras más largas que " + numero + ": " + filtraPalabrasMasLargas(cadena, numero) + "<br><br>");

// e) cadenaBienFormada: formatea correctamente la cadena (primera letra en mayúscula)
function cadenaBienFormada(cad_arg) {
    let resultado = '';
    // Recorremos cada carácter de la cadena original
    for (let i = 0; i < cad_arg.length; i++) {
        // Si es el primer carácter, lo convertimos a mayúscula
        if (i === 0) {
            let letraMayus = cad_arg[i];
            if (letraMayus >= 'a' && letraMayus <= 'z') {
                resultado += String.letraMayus;
            } else {
                resultado += letraMayus;  
            }
        } else {
            let letraMinus = cad_arg[i];
            if (letraMinus >= 'A' && letraMinus <= 'Z') {
                resultado += String.letraMinus;
            } else 
                resultado += letraMinus;  
            }
        }
    }
    return resultado; 

let cadena = "eSTE es un Ejemplo";
document.write("Cadena bien formada: " + cadenaBienFormada(cadena) + "<br><br>");