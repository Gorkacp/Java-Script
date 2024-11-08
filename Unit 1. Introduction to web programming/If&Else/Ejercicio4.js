//4.-Crea un script que pida un número al usuario, y si ese número es superior
// a 100 le aplique un descuento del 15% mostrando eñ nuevo número en pantalla


// Solicitar un número al usuario
let numero = prompt("Introduce un número:");

// Convertir la entrada a un número flotante
numero = parseFloat(numero);

// Verificar si el número es superior a 100
if (numero > 100) {
    // Calcular el descuento del 15%
    let descuento = numero * 0.15;
    let nuevoNumero = numero - descuento;
    
    // Mostrar el nuevo número con el descuento aplicado
    alert("El número con el 15% de descuento es: " + nuevoNumero);
} else {
    // Si el número no es superior a 100, se muestra el mismo número
    alert("El número es: " + numero);
}