// a) Función para crear una cookie
function CrearCookie(identificador, valor, fechaExpiracion) {
    let expires = "";
    
    if (fechaExpiracion) {
        let fecha = new Date();
        fecha.setTime(fecha.getTime() + (fechaExpiracion * 60 * 1000)); // tiempo en minutos
        expires = "; expires=" + fecha.toUTCString();
    }
    
    document.cookie = identificador + "=" + encodeURIComponent(valor) + expires + "; path=/";
}

// b) Función para leer el valor de una cookie
function LeerCookie(identificador) {
    let name = identificador + "=";
    let cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
        let c = cookies[i].trim();
        if (c.indexOf(name) === 0) {
            return decodeURIComponent(c.substring(name.length, c.length));
        }
    }
    return null; // Si la cookie no existe
}

// c) Función para borrar una cookie
function BorrarCookie(identificador) {
    document.cookie = identificador + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
}
