// 6.-Crea una función para calcular potencias de un modo recursivo.

// Función recursiva para calcular potencias
function potencia(base, exponente) {
    // Caso base: cualquier número elevado a 0 es 1
    if (exponente === 0) {
        return 1;
    }
    // Caso base: cualquier número elevado a 1 es el mismo número
    else if (exponente === 1) {
        return base;
    }
    // Llamada recursiva
    else {
        return base * potencia(base, exponente - 1); // Multiplicamos la base por el resultado de la potencia
    }
}

// Ejemplo de uso
const base = 2;
const exponente = 3;
const resultado = potencia(base, exponente);
document.write(base + " elevado a " + exponente + " es: " + resultado); // Muestra el resultado