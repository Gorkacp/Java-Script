//1.-Crea un script que determine si un número introducido por el usuario es par

// Solicitar un número al usuario
let numero4 = prompt("Introduce un número");

//Convertir la entrada a un número entero
numero4 = parseInt(numero4);

//Verificar si el número es par
if (numero4 % 2 === 0){
    alert("El número " + numero4 + " es par ");
} else{
    alert("El número " + numero4 + " es impar");
}