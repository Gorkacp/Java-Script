//5.-Crea un script que pregunte al usuario por su nombre, y conteste, "Bienvenido" o 
// "Bienvenida " según si el nombre introducido es de hombre o mujer
//Solo realizarlo para los nombres Pablo, Ana, Eduardo y Clara.

// Solicitar el nombre al usuario
let nombre = prompt("Introduce tu nombre: ");

//Convertir el nombre a minusculas para evitar problemas de mayusculas/minusculas
nombre = nombre;

//Determinar el género según el nombre e imprimir el mensaje correspondiente
if ( nombre === "Pablo" || nombre === "Eduardo"){
    alert("Bienvenido " + nombre);
}else if (nombre === "Ana" || nombre === "Clara"){
    alert("Bienvenida " + nombre);
}else{
    alert("Nombre no reconocido");
}