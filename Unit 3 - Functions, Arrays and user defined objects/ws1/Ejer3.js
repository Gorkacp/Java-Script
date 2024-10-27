// 3.-Para demostrar que todos deben tener similar probabilidad, mejora la web anterior de
// modo que se pueda generar una simulación de 6000 tiradas, mostrando al final el nº
// de ocurrencias de cada uno de los valores.

// Función que simula el lanzamiento de un dado de 6 caras
function lanzamiento() {
    return Math.floor(Math.random() * 6) + 1; // genera un número aleatorio entre 1 y 6
}

// Función para realizar 6000 lanzamientos y contar las ocurrencias
function simularTiradas() {
    const ocurrencias = [0, 0, 0, 0, 0, 0]; // Array para contar las ocurrencias de cada valor (1 a 6)

    // Realizar 6000 lanzamientos
    for (let i = 0; i < 6000; i++) {
        const resultado = lanzamiento();
        ocurrencias[resultado - 1]++; // Incrementa la cuenta del número obtenido
    }

    // Mostrar resultados en la página con document.write
    document.write("<h2>Resultados de 6000 lanzamientos:</h2>");
    for (let i = 0; i < ocurrencias.length; i++) {
        document.write("Número " + (i + 1) + ": " + ocurrencias[i] + " veces<br>");
    }
}

// Llamar a la función para simular 6000 tiradas
simularTiradas();