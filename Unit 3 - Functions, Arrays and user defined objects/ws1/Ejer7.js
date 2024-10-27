// 7.-Crea una función que calcule el factorial de un número dado. Para comprobarlo,
// diseña una web que muestre en forma de tabla el factorial para los valores de 1 a 10.

// Función recursiva para calcular el factorial
function factorial(n) {
    // Caso base: el factorial de 0 es 1
    if (n === 0) {
        return 1;
    }
    // Llamada recursiva
    return n * factorial(n - 1);
}

// Función para mostrar la tabla de factoriales en la consola
function mostrarTablaFactoriales() {
    console.log("Número | Factorial");
    console.log("-------------------");
    
    // Calcular los factoriales del 1 al 10 y mostrarlos
    for (let i = 1; i <= 10; i++) {
        const resultado = factorial(i);
        console.log(i + "      | " + resultado);
    }
}

// Llamar a la función para mostrar la tabla
mostrarTablaFactoriales();