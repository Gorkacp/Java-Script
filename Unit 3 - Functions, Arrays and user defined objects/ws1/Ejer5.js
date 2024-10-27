// 5.-Mejora el ejercicio anterior permitiendo calcular también el área de un circulo.

// Función que calcula el volumen de una esfera dado su radio
function calcularVolumenEsfera(radio) {
    const volumen = (4 / 3) * Math.PI * Math.pow(radio, 3); // Fórmula del volumen
    return volumen; // Retorna el volumen calculado
}

// Función que calcula el área de un círculo dado su radio
function calcularAreaCirculo(radio) {
    const area = Math.PI * Math.pow(radio, 2); // Fórmula del área
    return area; // Retorna el área calculada
}

// Función para pedir al usuario el radio y mostrar el volumen y el área
function obtenerVolumenYArea() {
    const radioInput = prompt("Introduce el radio de la esfera y el círculo:"); // Pedir el radio al usuario
    const radio = parseFloat(radioInput); // Convertir el valor a número

    // Validar la entrada
    if (isNaN(radio) || radio <= 0) {
        document.write("Por favor, introduce un radio válido mayor que 0.<br>"); // Muestra un mensaje si la entrada no es válida
        return; // Termina la función si la entrada no es válida
    }

    const volumen = calcularVolumenEsfera(radio); // Calcular el volumen de la esfera
    const area = calcularAreaCirculo(radio); // Calcular el área del círculo

    // Mostrar los resultados usando document.write
    document.write("El volumen de la esfera con radio " + radio + " es: " + volumen.toFixed(2) + " unidades cúbicas.<br>");
    document.write("El área del círculo con radio " + radio + " es: " + area.toFixed(2) + " unidades cuadradas.<br>");
}

// Llamar a la función para obtener el volumen y el área
obtenerVolumenYArea(); // Ejecuta la función
