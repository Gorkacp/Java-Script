// 1.-Realiza una página que cree un objeto de tipo Date y muestre en la página la siguiente
// información ( cada una en una línea)
// El año actual
// El mes actual
// El dia actual
// La hora actual
// Los minutos actuales
// Los segundos actuales

// Crear un objeto de tipo Date
const fechaActual = new Date();

// Obtener la información deseada
const año = fechaActual.getFullYear();
const mes = fechaActual.getMonth() + 1; // Los meses son de 0 a 11
const dia = fechaActual.getDate();
const hora = fechaActual.getHours();
const minutos = fechaActual.getMinutes();
const segundos = fechaActual.getSeconds();

// Mostrar la información en la página usando document.write
document.write("<h1>Información de la Fecha y Hora Actual</h1>");
document.write("<p>Año actual: ${año}</p>");
document.write("<p>Mes actual: ${mes}</p>");
document.write("<p>Día actual: ${dia}</p>");
document.write("<p>Hora actual: ${hora}</p>");
document.write("<p>Minutos actuales: ${minutos}</p>");
document.write("<p>Segundos actuales: ${segundos}</p>");
