//3.-Crea un script que reciba la edad del usuario, y su localidad de nacimiento y muestre por pantalla
// "Enhorabuena" a los usuarios de mas de 25 años de Madrid

// Solicitar la edad y localidad de nacimiento al usuario
let edad = prompt("Introduce tu edad:");
let localidad = prompt("Introduce tu localidad de nacimiento:");

// Convertir la edad a un número entero
edad = parseInt(edad);

//Verificar si el usuario tiene mas de 25 años y es de Madrid
if (edad > 25 && localidad ===  "madrid"){
    alert("Enhorabuena");
}else{
    alert("Lo siento, no cumples los requisitos");
}