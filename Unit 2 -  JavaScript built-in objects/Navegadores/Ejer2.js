// 2.-Realiza lo mismo para la información de la pantalla utilizada por el cliente


function mostrarInfoPantalla() {
    const infoPantalla = {
        "Ancho de pantalla": screen.width + " px",
        "Alto de pantalla": screen.height + " px",
        "Ancho disponible": screen.availWidth + " px",
        "Alto disponible": screen.availHeight + " px",
        "Profundidad de color": screen.colorDepth + " bits",
        "Resolución de píxeles": screen.pixelDepth + " px"
    };
    let tablaHTML = "<table border='1'><tr><th>Propiedad</th><th>Valor</th></tr>";
    for (const propiedad in infoPantalla) {
        tablaHTML += `<tr><td>${propiedad}</td><td>${infoPantalla[propiedad]}</td></tr>`;
    }
    tablaHTML += "</table>";¡
    document.body.innerHTML += tablaHTML; // Añadimos la tabla sin sobrescribir lo anterior
}
 window.onload = mostrarInfoPantalla;