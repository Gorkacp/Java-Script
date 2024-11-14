// Función para establecer una cookie
function setCookie(name, value, minutes) {
    let date = new Date();
    date.setTime(date.getTime() + (minutes * 60 * 1000)); // Establece la caducidad
    let expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + encodeURIComponent(value) + ";" + expires + ";path=/";
}

// Función para obtener el valor de una cookie
function getCookie(name) {
    let nameEq = name + "=";
    let cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
        let c = cookies[i].trim();
        if (c.indexOf(nameEq) === 0) {
            return decodeURIComponent(c.substring(nameEq.length, c.length));
        }
    }
    return "";
}

// Función para borrar una cookie
function deleteCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

// Comprobar si ya existe la cookie del nombre de usuario
let username = getCookie("username");

if (username) {
    // Si la cookie existe, mostrar mensaje de saludo
    document.getElementById("greeting").innerHTML = "Hola, " + username + "!";
    document.getElementById("session-link").style.display = "inline"; // Muestra el enlace de cerrar sesión
} else {
    // Si la cookie no existe, pedir el nombre y almacenarlo
    let userNamePrompt = prompt("¿Cuál es tu nombre?");
    if (userNamePrompt) {
        setCookie("username", userNamePrompt, 5); // Establecer la cookie con caducidad en 5 minutos
        document.getElementById("greeting").innerHTML = "Hola, " + userNamePrompt + "!";
        document.getElementById("session-link").style.display = "inline"; // Muestra el enlace de cerrar sesión
    }
}

// Función para cerrar sesión
function logout() {
    deleteCookie("username"); // Eliminar la cookie
    document.getElementById("greeting").innerHTML = ""; // Limpiar el saludo
    document.getElementById("session-link").style.display = "none"; // Ocultar el enlace
}
