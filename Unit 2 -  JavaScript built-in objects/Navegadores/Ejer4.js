// 2.- Crea una página que contenga varios enlaces, imágenes, y ancias
// de ejemplo y añade una serie de enlaces que realicen lo siguiente:
// c) Muestra el número de imagenes del documento
function mostrarNumeroImagenes() {
    const numImagenes = document.images.length;
    document.getElementById('resultado').textContent = "Número de imágenes: " + numImagenes;
}
// d) Muestra el id de la primera imágen
// getElementById: Para seleccionar un elemento por su atrivuto
function mostrarIdPrimeraImagen() {
    const idPrimeraImagen = document.images[0].id;
    document.getElementById('resultado').textContent = "ID de la primera imagen: " + idPrimeraImagen;
}
// e) Muestra el numero de enlaces del documento
function mostrarNumeroEnlaces() {
    const numEnlaces = document.links.length;
    document.getElementById('resultado').textContent = "Número de enlaces: " + numEnlaces;
}
// f) Cambia el titulo del documento
function cambiarTitulo() {
    document.title = "Nuevo Título de la Página";
    document.getElementById('resultado').textContent = "El título del documento ha sido cambiado.";
}