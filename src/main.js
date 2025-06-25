"use strict";

const itemData = {
    item1: {
        name: 'Finalista 01',
        image: 'https://picsum.photos/seed/animal/250/200',
        photographer: 'John Doe',
        description: ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        score: 42
    },
    item2: {
        name: 'Finalista 2',
        image: 'https://picsum.photos/seed/beach/250/200',
        photographer: 'Jane Smith',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        score: 84
    },
    item3: {
        name: 'Finalista 3',
        image: 'https://picsum.photos/seed/mountain/250/200',
        photographer: 'Alice Johnson',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        score: 36
    }
};
// --- Código funcionalidad solicitada ---
document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('items');
    const img = document.getElementById('displayImage');
    const photographer = document.getElementById('photographer');
    const description = document.getElementById('description');
    const score = document.getElementById('score');
    const btnIncrease = document.getElementById('increaseScore');
    const btnDecrease = document.getElementById('decreaseScore');

    // Agregar opciones al select
    Object.entries(itemData).forEach(([key, item]) => {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = item.name;
        select.appendChild(option);
    });

    // Función para mostrar datos del ítem seleccionado
    function mostrarItem(key) {
        const item = itemData[key];
        if (!item) return;
        img.src = item.image;
        photographer.value = item.photographer;
        description.value = item.description;
        score.value = item.score;
    }

    // Cuando selecciona un ítem
    select.addEventListener('change', () => {
        if (select.value !== "-1") {
            mostrarItem(select.value);
        }
    });

    // Botón aumentar puntaje
    btnIncrease.addEventListener('click', (e) => {
        e.preventDefault();
        const key = select.value;
        if (itemData[key]) {
            itemData[key].score++;
            score.value = itemData[key].score;
        }
    });

    // Botón disminuir puntaje
    btnDecrease.addEventListener('click', (e) => {
        e.preventDefault();
        const key = select.value;
        if (itemData[key]) {
            itemData[key].score--;
            score.value = itemData[key].score;
        }
    });

    // Seleccionar el primer ítem automáticamente si existe
    const firstKey = Object.keys(itemData)[0];
    if (firstKey) {
        select.value = firstKey;
        mostrarItem(firstKey);
    }
});