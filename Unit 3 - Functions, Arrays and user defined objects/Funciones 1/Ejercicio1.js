/**
 * @name isOdd
 * @description Devuelve si un número es impar
 * 
 * @param {number} x - El número a evaluar
 * @returns {Boolean} Devuelve true si el número {x} es impar, false sino
 *
 * @example
 *  isOdd(3) // returns true
 */
function isOdd(x){
    return x % 2 !==0;
}
//Funcion para pedir un numero al usuario
function pedirNumero(){
    let numero = Number(prompt("Introduce un numero: "));

    //Verificamos
    if (isNaN(numero)){
        document.write("No has introducido un número válido");
    }else{
        //Comprobamos numero
        if(isOdd(numero)){
            document.write("El numero " + numero + " es impar");
        }else{
            document.write("El numero " + numero + " es par ");
        }
    }
}
//LLamamos a la funcion
pedirNumero();