// 1.-Muestra, maquetada en una tabla HTML toda la información que puedas
// extraer mediante JavaScript del navegador cliente.
// Función que extrae y muestra información del navegador en una tabla HTML


function mostrarInfoNavegador() {
     Obtener información relevante del navegador
     const infoNavegador = {
       "Nombre del navegador": navigator.appName,
       "Versión del navegador": navigator.appVersion,
       "Plataforma": navigator.platform,
        "User Agent": navigator.userAgent,
        "Idioma del navegador": navigator.language,
        "Conectado a Internet": navigator.onLine ? "Sí" : "No",
        "Cookies habilitadas": navigator.cookieEnabled ? "Sí" : "No",
        "Java habilitado": navigator.javaEnabled() ? "Sí" : "No",
        "Ancho de pantalla": screen.width + " px",
        "Alto de pantalla": screen.height + " px",
        "Ancho disponible": screen.availWidth + " px",
        "Alto disponible": screen.availHeight + " px",
        "Profundidad de color": screen.colorDepth + " bits",
        "Resolución": screen.pixelDepth + " px",
        "URL actual": window.location.href,
        "Protocolo": window.location.protocol,
        "Dominio": window.location.hostname,
        "Puerto": window.location.port || 'No especificado',
        "Ruta": window.location.pathname,
    };

    // Crear tabla HTML
    let tablaHTML = "<table border='1' style='width: 100%; border-collapse: collapse;'>";
    tablaHTML += "<thead><tr><th>Propiedad</th><th>Valor</th></tr></thead>";
    tablaHTML += "<tbody>";

    // Recorrer la información y agregarla a la tabla
    for (const [propiedad, valor] of Object.entries(infoNavegador)) {
        tablaHTML += `<tr><td>${propiedad}</td><td>${valor}</td></tr>`;
    }

    tablaHTML += "</tbody></table>";

    // Insertar la tabla en el documento HTML
    document.body.innerHTML = tablaHTML;
}

// Llamar a la función para mostrar la información cuando se cargue el documento
window.onload = mostrarInfoNavegador;
