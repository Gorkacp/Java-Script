function areArraysEqual(a, b) {
    // Verificar si los arrays tienen la misma longitud
    if (a.length !== b.length) return false;

    // Recorrer los elementos de ambos arrays y compararlos uno a uno
    for (let i = 0; i < a.length; i++) {
        // Si algún elemento es diferente en la misma posición, devuelve false
        if (a[i] !== b[i]) return false;
    }

    // Si todos los elementos son iguales, devuelve true
    return true;
}

//Ejemplo de uso
console.log(areArraysEqual([1, 4], [1, 4])); // true
console.log(areArraysEqual([1, 4], [4, 1])); // false
console.log(areArraysEqual([1, 4, 3], [1, 4])); // false
