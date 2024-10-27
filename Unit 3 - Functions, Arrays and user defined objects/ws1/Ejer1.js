// 1.-Define una función máximo que dados 4 valores devuelva el máximo de ellos.
// Llámala con un ejemplo pidiendo los 4 valores al usuario.

// Definir la función máximo
function maximo(a, b, c, d) {
    return Math.max(a, b, c, d);
}

// Pedir valores al usuario y convertirlos a números
let valor1 = parseFloat(prompt("Introduce el primer valor:"));
let valor2 = parseFloat(prompt("Introduce el segundo valor:"));
let valor3 = parseFloat(prompt("Introduce el tercer valor:"));
let valor4 = parseFloat(prompt("Introduce el cuarto valor:"));

// Llamar a la función máximo con los valores proporcionados
let maximoValor = maximo(valor1, valor2, valor3, valor4);

// Mostrar el resultado
document.write("El valor máximo es: " + maximoValor);