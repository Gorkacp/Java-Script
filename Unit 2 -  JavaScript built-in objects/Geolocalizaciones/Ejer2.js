// 2.-Intentemos utilizar la información de geolocalización con la API de Here Maps.
// Utilice un mapa para mostrar su ubicación
// Dibuja un marcador en tu ubicación.
// Diseñar una forma de calcular y dibujar la ruta desde mi ubicación 
// actual hasta un lugar determinado.
// Encuentre una manera de conocer la dirección de su ubicación 
// (geocodificación inversa).

const apiKey = 'u7n2WPJrGI2xp00UZnrfw8bKs8f19cftfm1JDSiBu50'; // Con el codigo de la API

// Verificar si la geolocalización está disponible
if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        // Inicializar la plataforma de Here Maps
        const platform = new H.service.Platform({
            apikey: apiKey
        });

        // Cargar la capa base del mapa
        const defaultLayers = platform.createDefaultLayers();

        // Inicializar el mapa centrado en la ubicación actual
        const map = new H.Map(
            document.getElementById('map'),
            defaultLayers.vector.normal.map,
            {
                zoom: 14,
                center: { lat: lat, lng: lon }
            }
        );

        // Colocar un marcador en la ubicación actual
        const marker = new H.map.Marker({ lat: lat, lng: lon });
        map.addObject(marker);
    }, () => {
        alert("No se pudo obtener la ubicación.");
    });
} else {
    alert("La geolocalización no está disponible en este navegador.");
}