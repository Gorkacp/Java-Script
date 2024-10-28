// 2.-Crea una página web en la que se muestre el resultado de cada uno
// de los siguientes apartados: 
// a)Crear variable "fechaHoy" con fecha de hoy 
// b)Crear variable "fecha85" que sume 85 dias a la variable "fechaHoy"
// c) Crear variable "fecha187" que reste 187 dias a la variable "fechaHoy"
// d)Sumar dos años a la variable "fecha85"
// e)Restar 24 horas a la variable "fecha187"
// f) Crear variable "fechaResto" que sea la resta de fecha85 - fecha187 y observa lo que obtienes

// a) Crear variable "fechaHoy" con la fecha de hoy
const fechaHoy = new Date();
document.write(`<p>Fecha de hoy: ${fechaHoy.toLocaleDateString()}</p>`);

// b) Crear variable "fecha85" que sume 85 días a "fechaHoy"
const fecha85 = new Date(fechaHoy);
fecha85.setDate(fechaHoy.getDate() + 85);
document.write(`<p>Fecha 85 días después: ${fecha85.toLocaleDateString()}</p>`);

// c) Crear variable "fecha187" que reste 187 días a "fechaHoy"
const fecha187 = new Date(fechaHoy);
fecha187.setDate(fechaHoy.getDate() - 187);
document.write(`<p>Fecha 187 días antes: ${fecha187.toLocaleDateString()}</p>`);

// d) Sumar dos años a la variable "fecha85"
fecha85.setFullYear(fecha85.getFullYear() + 2);
document.write(`<p>Fecha 85 días después más 2 años: ${fecha85.toLocaleDateString()}</p>`);

// e) Restar 24 horas a la variable "fecha187"
fecha187.setHours(fecha187.getHours() - 24);
document.write(`<p>Fecha 187 días antes menos 24 horas: ${fecha187.toLocaleDateString()}</p>`);

// f) Crear variable "fechaResto" que sea la resta de fecha85 - fecha187
const fechaResto = fecha85 - fecha187; // Resultado en milisegundos
document.write(`<p>Diferencia en milisegundos entre fecha85 y fecha187: ${fechaResto}</p>`);
document.write(`<p>Diferencia en días: ${Math.floor(fechaResto / (1000 * 60 * 60 * 24))} días</p>`);
