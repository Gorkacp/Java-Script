//5.-Crea una web para resolver ecuaciones de segundo grado. Deberá
// pedir tanto los coeficientes y mostrar las soluciones posibles
// Coeficientes de la ecuación de segundo grado

// Pedir coeficientes al usuario
const a = parseFloat(prompt("Introduce el coeficiente a:"));
const b = parseFloat(prompt("Introduce el coeficiente b:"));
const c = parseFloat(prompt("Introduce el coeficiente c:"));

// Calcular el discriminante
const discriminante = b * b - 4 * a * c;

//Mostrar las soluciones en el documento
document.write("Resultados de la Ecuación de Segundo Grado");

if (discriminante > 0) {
    const x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
    const x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
    document.write(`<p>Dos soluciones: x1 = ${x1} y x2 = ${x2}</p>`);
} else if (discriminante === 0) {
    const x = -b / (2 * a);
    document.write(`<p>Una única solución: x = ${x}</p>`);
} else {
    document.write("<p>No hay soluciones reales.</p>");
}