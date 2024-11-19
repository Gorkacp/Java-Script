// Selecciona el formulario donde se añaden nuevos ítems
const form = document.getElementById('item-form');
// Selecciona el campo de entrada de texto para los nombres de los ítems
const input = document.getElementById('item-input');
// Selecciona la lista donde se renderizan los ítems
const itemsList = document.getElementById('items-list');
// Selecciona el botón para limpiar todos los ítems
const clearButton = document.getElementById('clear-items');

// Recuperar los ítems almacenados en localStorage al cargar la página
// Si no hay datos, se inicializa como un arreglo vacío
let items = JSON.parse(localStorage.getItem('groceryItems')) || [];

// Renderiza los ítems existentes al cargar la página
renderItems();

// Escucha el evento 'submit' del formulario para agregar nuevos ítems
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita que la página se recargue al enviar el formulario
    const itemName = input.value.trim(); // Obtiene el valor del campo de entrada, eliminando espacios adicionales
    if (itemName) { // Solo añade ítems si el nombre no está vacío
        addItem(itemName); // Llama a la función para agregar el ítem
        input.value = ''; // Limpia el campo de entrada después de agregar el ítem
    }
});

// Escucha el evento 'click' en el botón de limpiar para eliminar todos los ítems
clearButton.addEventListener('click', () => {
    items = []; // Vacía el arreglo de ítems
    updateLocalStorage(); // Actualiza el localStorage para reflejar los cambios
    renderItems(); // Renderiza la lista vacía
});

// Función para agregar un ítem al arreglo y actualizar la interfaz
function addItem(name) {
    items.push({ name, quantity: 1 }); // Añade un nuevo objeto con el nombre del ítem y cantidad inicial 1
    updateLocalStorage(); // Guarda el nuevo estado en localStorage
    renderItems(); // Vuelve a renderizar la lista actualizada
}

// Función para renderizar los ítems en la lista
function renderItems() {
    itemsList.innerHTML = ''; // Limpia la lista actual antes de renderizar
    items.forEach((item, index) => {
        // Crea un elemento <li> para cada ítem
        const listItem = document.createElement('li');

        // Crea un <span> para mostrar el nombre y cantidad del ítem
        const itemName = document.createElement('span');
        itemName.textContent = `${item.name} (x${item.quantity})`; // Muestra el nombre y la cantidad
        itemName.className = 'item-name'; // Agrega una clase para estilos personalizados

        // Contenedor para los botones (+ y eliminar)
        const buttonsContainer = document.createElement('div');
        buttonsContainer.className = 'buttons-container';

        // Botón para aumentar la cantidad del ítem
        const increaseButton = document.createElement('button');
        increaseButton.textContent = '+'; // Texto del botón
        increaseButton.addEventListener('click', () => {
            items[index].quantity++; // Incrementa la cantidad del ítem
            updateLocalStorage(); // Actualiza el localStorage
            renderItems(); // Renderiza la lista nuevamente
        });

        // Botón para eliminar el ítem de la lista
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'x'; // Texto del botón
        deleteButton.className = 'delete-button'; // Agrega una clase para estilos personalizados
        deleteButton.addEventListener('click', () => {
            items.splice(index, 1); // Elimina el ítem del arreglo
            updateLocalStorage(); // Actualiza el localStorage
            renderItems(); // Renderiza la lista nuevamente
        });

        // Agrega los botones al contenedor
        buttonsContainer.append(increaseButton, deleteButton);
        // Agrega el nombre del ítem y el contenedor de botones al <li>
        listItem.append(itemName, buttonsContainer);
        // Agrega el <li> a la lista de ítems
        itemsList.appendChild(listItem);
    });
}

// Función para guardar el estado actual de los ítems en localStorage
function updateLocalStorage() {
    localStorage.setItem('groceryItems', JSON.stringify(items)); // Convierte el arreglo a JSON y lo guarda
}
