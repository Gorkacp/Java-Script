//6.-Crea un script que pida al usuario donde vive, si vive en Madrid y tiene entre 18 y 30 años
// ,el script debe mostrar por pantalla que el usuario puede acceder al carnet de empresarios emprendedores

// Solicitar la localidad y la edad del usuario
let localidad = prompt("¿Donde vives?");
let edad = prompt("Introduce tu edad: ");

//Convertir la edad a un número entero
edad = parseInt(edad);

//Verificar si el usuario vive en Madrid y tiene entre 18 y 30 años
if (localidad === "madrid" && edad >= 18 && edad <= 30){
    alert("Puedes acceder al carnet de empresarios empredendedores.");   
}else{
    alert("No puedes acceder al carnet de empresarios emprendedores: ");
}