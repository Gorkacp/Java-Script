// 4.-Crea una web para calcular el volumen de una esfera. Para ello diseña una función
// que dado el radio de ésta devuelva el volumen

// Función que calcula el volumen de una esfera dado su radio
function calcularVolumenEsfera(radio) {
    // Se calcula el volumen de la esfera usando la fórmula V = (4/3) * π * r^3
    const volumen = (4 / 3) * Math.PI * Math.pow(radio, 3); // Fórmula del volumen
    return volumen; // Retorna el volumen calculado
}

// Función para pedir al usuario el radio y mostrar el volumen
function obtenerVolumen() {
    // Muestra un cuadro de entrada al usuario para que introduzca el radio de la esfera
    const radioInput = prompt("Introduce el radio de la esfera:"); // Pedir el radio al usuario

    // Convierte el valor ingresado (string) a un número de punto flotante
    const radio = parseFloat(radioInput); // Convertir el valor a número

    // Verifica si el valor ingresado es un número válido y mayor que 0
    if (isNaN(radio) || radio <= 0) {
        // Si no es válido, muestra un mensaje en la consola
        console.log("Por favor, introduce un radio válido mayor que 0."); 
        return; // Termina la función si la entrada no es válida
    }

    // Llama a la función calcularVolumenEsfera con el radio ingresado para calcular el volumen
    const volumen = calcularVolumenEsfera(radio); // Calcular el volumen

    // Muestra el resultado en la consola, formateando el volumen a dos decimales
    console.log("El volumen de la esfera con radio " + radio + " es: " + volumen.toFixed(2) + " unidades cúbicas.");
}

// Llamar a la función para obtener el volumen
obtenerVolumen(); // Ejecuta la función que pide el radio y calcula el volumen