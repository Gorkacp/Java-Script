// Función para establecer una cookie de sesión (sin fecha de caducidad)
function setSessionCookie(name, value) {
    document.cookie = name + "=" + encodeURIComponent(value) + ";path=/";
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

// Función para guardar las preferencias de personalización como cookies de sesión
function saveSettings() {
    let bgColor = document.getElementById("background-color").value;
    let paraColor = document.getElementById("paragraph-color").value;
    let fontSize = document.getElementById("font-size").value;

    // Guardar las configuraciones en cookies de sesión (sin fecha de caducidad)
    setSessionCookie("bgColor", bgColor);
    setSessionCookie("paraColor", paraColor);
    setSessionCookie("fontSize", fontSize);

    // Aplicar las configuraciones inmediatamente
    document.body.style.backgroundColor = bgColor;
    document.getElementById("greeting").style.color = paraColor;
    document.body.style.fontSize = fontSize + "px";
}

// Función para aplicar las configuraciones guardadas en las cookies de sesión
function applySettings() {
    let bgColor = getCookie("bgColor");
    let paraColor = getCookie("paraColor");
    let fontSize = getCookie("fontSize");

    // Si existen las cookies, aplicarlas
    if (bgColor) {
        document.body.style.backgroundColor = bgColor;
    }
    if (paraColor) {
        document.getElementById("greeting").style.color = paraColor;
    }
    if (fontSize) {
        document.body.style.fontSize = fontSize + "px";
    }
}

// Aplicar las configuraciones guardadas al cargar la página
applySettings();
