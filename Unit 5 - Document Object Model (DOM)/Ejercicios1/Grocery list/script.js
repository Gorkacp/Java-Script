const form = document.getElementById('item-form');
const input = document.getElementById('item-input');
const itemsList = document.getElementById('items-list');
const clearButton = document.getElementById('clear-items');

let items = [];

// Manejar el formulario para añadir ítems
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const itemName = input.value.trim();
    if (itemName) {
        addItem(itemName);
        input.value = ''; // Limpiar barra de entrada
    }
});

// Limpiar todos los ítems
clearButton.addEventListener('click', () => {
    items = [];
    renderItems();
});

// Función para agregar un ítem
function addItem(name) {
    items.push({ name, quantity: 1 });
    renderItems();
}

// Función para actualizar la lista de ítems
function renderItems() {
    itemsList.innerHTML = '';
    items.forEach((item, index) => {
        const listItem = document.createElement('li');

        const itemName = document.createElement('span');
        itemName.textContent = `${item.name} (x${item.quantity})`;
        itemName.className = 'item-name';

        const buttonsContainer = document.createElement('div');
        buttonsContainer.className = 'buttons-container';

        const increaseButton = document.createElement('button');
        increaseButton.textContent = '+';
        increaseButton.addEventListener('click', () => {
            items[index].quantity++;
            renderItems();
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'x';
        deleteButton.className = 'delete-button';
        deleteButton.addEventListener('click', () => {
            items.splice(index, 1);
            renderItems();
        });

        buttonsContainer.append(increaseButton, deleteButton);
        listItem.append(itemName, buttonsContainer);
        itemsList.appendChild(listItem);
    });
}
