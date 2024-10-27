// 2.- Crea una web desde la que se simule el lanzamiento de un dado de 6 caras.Para ello
// define una función “lanzamiento” que devuelva un nº aleatorio entre 1 y 6. 

// Función que simula el lanzamiento de un dado de 6 caras
function lanzamiento() {
    return Math.floor(Math.random() * 6) + 1; //  genera un número aleatorio entre 1 y 6, 
    //simulando el lanzamiento de un dado de 6 caras.
}

// Llamar a la función lanzamiento y mostrar el resultado con document.write
function lanzarDado() {
    const resultado = lanzamiento();
    document.write("El resultado del lanzamiento es: " + resultado);
}

// Llamar a la función para ver el resultado en la consola
lanzarDado();