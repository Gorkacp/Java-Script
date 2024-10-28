//1.-Crea una página en la que se muestre
// * Un número aleatorio entre 0 y 1
// * Igual pero entre 100 y 200
// * Pide dos valores al usuario y genera un nª aleatorio entre esos dos 
// valores

let numeroAleatorio = Math.random();// te generá entre 0 y 1
console.log(numeroAleatorio);
document.write("Numero aleatorio entre 0 y 1: " +numeroAleatorio)


let numeroAleatorioGrande = Math.random() * (200 - 100) + 100;
console.log(numeroAleatorio);
document.write("<br>Numero aleatorio entre 100 y 200: " + numeroAleatorioGrande + "</br>");



// Pedimos dos valores al usuario
let valor1 = parseFloat(prompt("Introduce el primer valor:"));
let valor2 = parseFloat(prompt("Introduce el segundo valor:"));
if (isNaN(valor1) || isNaN(valor2)) {  // Para validar que no sean inválidos
    alert("Por favor, introduce el número correcto");
} else {
    
    let numeroAleatoriox = Math.random() * (Math.max(valor1, valor2) - Math.min(valor1, valor2)) + Math.min(valor1, valor2);
    document.write("<br>Número aleatorio entre " + valor1 + " y " + valor2 + ": " + numeroAleatoriox + "</br>");
}