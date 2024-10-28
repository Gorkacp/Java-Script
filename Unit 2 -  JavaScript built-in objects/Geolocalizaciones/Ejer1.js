// 1.-Desarrollar una aplicación web en la que:
// Pruebe si la geolocalización está disponible.
// Si está disponible, muestra la posición actual (latitud y longitud)
// Si no está disponible muestra un mensaje para todos y cada uno de los posibles 
// errores.
// Mejora tu código para que muestres la posición continuamente (aunque 
// el usuario podría estar moviéndose, por lo que podría cambiar)
// Encuentra la manera de medir la distancia recorrida.
let lastPosition = null;  // Para almacenar la última posición
let totalDistance = 0;    // Para almacenar la distancia total recorrida

// Función para calcular la distancia entre dos coordenadas usando la fórmula de Haversine
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radio de la Tierra en km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distancia en km
}

if ("geolocation" in navigator) {
    navigator.geolocation.watchPosition(
        (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            // Si tenemos una posición anterior, calculamos la distancia
            if (lastPosition) {
                const distance = calculateDistance(
                    lastPosition.coords.latitude, lastPosition.coords.longitude, 
                    lat, lon
                );
                totalDistance += distance;
            }

            // Guardar la posición actual para el próximo cálculo
            lastPosition = position;

            // Mostrar la posición y la distancia recorrida
            console.log(`Latitud: ${lat}, Longitud: ${lon}`);
            console.log(`Distancia total recorrida: ${totalDistance.toFixed(2)} km`);
            document.body.innerHTML = `<h1>Tu posición actual</h1>
                                       <p>Latitud: ${lat}</p>
                                       <p>Longitud: ${lon}</p>
                                       <p>Distancia total recorrida: ${totalDistance.toFixed(2)} km</p>`;
        },
        (error) => {
            let message;
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    message = "El usuario ha denegado la solicitud de geolocalización.";
                    break;
                case error.POSITION_UNAVAILABLE:
                    message = "La información de ubicación no está disponible.";
                    break;
                case error.TIMEOUT:
                    message = "La solicitud para obtener la ubicación ha expirado.";
                    break;
                case error.UNKNOWN_ERROR:
                    message = "Ha ocurrido un error desconocido.";
                    break;
            }
            console.error("Error de geolocalización:", message);
            document.body.innerHTML = `<p>Error: ${message}</p>`;
        },        { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
    );
} else {
    console.error("La geolocalización NO está disponible en este navegador.");
    document.body.innerHTML = `<p>La geolocalización no está disponible en este navegador.</p>`;
}
