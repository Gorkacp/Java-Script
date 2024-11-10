/**
 * @name inRange
 * @description Devuelve si un número se encuentra dentro de un rango
 * 
 * @param {number} x - El número a evaluar si se encuentra dentro del rango
 * @param {number} min - El límite inferior del rango
 * @param {number} max - El límite superior del rango
 * @returns {Boolean} Devuelve true si el número {x} se encuentra dentro del rango definido por {min} y {max}, false sino
 *
 * @example
 *  inRange(2, -4, 10) // returns true
 */
function inRange(x, min, max){
    return x >=min && x <=max;
}

let x = parseFloat(prompt("Introduce un número: "));
let min = parseFloat(prompt("Introduce el limite inferior"));
let max = parseFloat(prompt("Introduce el limite superior"));

//Comprobamos si esta dentro del rango
if(inRange(x, min, max)){
    document.write("El numero " + x + " esta dentro del rango.");
}else{
    document.write("El numero " + x + " no se encuentra dentro del rango");  
}