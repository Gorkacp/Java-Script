//2.-Crea un script que reciba la edad de un usuario y determine si es mayor de edad

// Solicitar la edad al usuario
let edad = prompt("Introduce un número");

// Convertir la entrada a un número entero
edad = parseInt(edad);

// Verificar si es mayor de edad
if (edad>=18){
    alert("Eres mayor de edad");
}else{
    alert("Eres menor de edad");
}