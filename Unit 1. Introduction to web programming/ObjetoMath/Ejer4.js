// 8.-Crea una web en la que cada vez que se accede se muestre una imagen (de 
// modo aleatorio) de entre 3 posibles

// Array con las rutas de las imágenes
const imagenes = ["ikermuniaincopajpg_001.jpg", "1.jpg", "2.jpg"];

// Seleccionar una imagen aleatoria
const imagenAleatoria = imagenes[Math.floor(Math.random() * imagenes.length)];

// Mostrar la imagen
document.write("<img src='" + imagenAleatoria + "' alt='Imagen Aleatoria'>");