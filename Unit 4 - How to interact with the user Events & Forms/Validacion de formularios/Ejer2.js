// Haciendo uso de expresiones regulares crea funciones para validar los campos que se indican 
// a continuación. La función recibirá un parámetro de tipo string con el valor a validar y debe devolver 
// true o false según cumpla los requisitos de validación:
// validarMayuscula: El parámetro debe contener al menos un carácter en mayúscula
// validarCaracteresEspeciales: El parámetro debe contener al menos uno de los siguientes caracteres: !@#$%^&
// validarCorreo: El parámetro debe tener el formato correcto de un email
// validarTarjetaCredito: El parámetro debe tener el formato correcto de una tarjeta de crédito
// validarLongitud: El parámetro debe tener al menos 8 caracteres.
// validarNumero: El parámetro debe contener al menos un dígito.

// Validar para que contenga al menos una letra mayúscula
function validarMayuscula(input) {
    return /[A-Z]/.test(input);
}

// Validar para qe contenga al menos uno de los caracteres especiales permitidos
function validarCaracteresEspeciales(input) {
    return /[!@#$%^&]/.test(input);
}

// Validar para que tenga el formato de un correo electrónico
function validarCorreo(input) {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(input);
}

// Validar que tenga el formato de una tarjeta de crédito
function validarTarjetaCredito(input) {
    return /^\d{4}-\d{4}-\d{4}-\d{4}$/.test(input);
}

// Validar que tenga al menos 8 caracteres
function validarLongitud(input) {
    return input.length >= 8;
}

// Validar que contenga al menos un dígito
function validarNumero(input) {
    return /\d/.test(input);
}

// Ejemplos de uso
console.log(validarMayuscula("HolaMundo")); // true
console.log(validarCaracteresEspeciales("Hola@Mundo")); // true
console.log(validarCorreo("Ejemplo@ejemplo.com")); // true
console.log(validarTarjetaCredito("1234-5678-9876-5432")); // true
console.log(validarLongitud("contraseña123")); // true
console.log(validarNumero("contraseña123")); // true