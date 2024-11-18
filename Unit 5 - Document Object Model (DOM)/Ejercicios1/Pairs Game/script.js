// Crear elementos HTML dinámicamente
const body = document.body;
body.style.cssText = `
    background: lightblue; text-align: center; font-family: Arial, sans-serif;
    margin: 0; padding: 0;
`;

const title = document.createElement('h1');
title.textContent = 'JAVASCRIPT PAIRS GAME';
title.style.cssText = 'color: white; margin-top: 20px;';

const subtitle = document.createElement('h2');
subtitle.textContent = 'CLICK ANY CARD TO BEGIN';
subtitle.style.cssText = 'color: white; margin: 10px 0;';

const timerDisplay = document.createElement('div');
timerDisplay.textContent = 'Time: 60s';
timerDisplay.style.cssText = 'color: white; font-size: 20px; margin-bottom: 20px;';

const gameBoard = document.createElement('div');
gameBoard.style.cssText = `
    display: grid; grid-template-columns: repeat(4, 150px);
    gap: 15px; justify-content: center; margin: 0 auto;
`;

// Añadir elementos al body
body.append(title, subtitle, timerDisplay, gameBoard);

// Configuración del juego
const cards = ["🍎", "🍎", "🍌", "🍌", "🍇", "🍇", "🍓", "🍓"];
let shuffledCards = [];
let firstCard = null, secondCard = null;
let lockBoard = false; // Bloquear el tablero temporalmente
let time = 60, interval;

// Función para barajar las cartas
function shuffleCards() {
    shuffledCards = cards.sort(() => Math.random() - 0.5);
}

// Función para crear el tablero
function createBoard() {
    gameBoard.innerHTML = '';
    shuffledCards.forEach((symbol, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.dataset.index = index;
        card.textContent = ''; // Las cartas inician boca abajo
        card.addEventListener('click', flipCard);
        card.style.cssText = `
            width: 150px; height: 150px; background: white; 
            border-radius: 10px; display: flex; justify-content: center;
            align-items: center; font-size: 36px; cursor: pointer; 
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: transform 0.2s ease;
        `;
        card.addEventListener('mouseover', () => {
            card.style.transform = 'scale(1.1)';
        });
        card.addEventListener('mouseout', () => {
            card.style.transform = 'scale(1)';
        });
        gameBoard.appendChild(card);
    });
}

// Función para voltear una carta
function flipCard(event) {
    if (lockBoard) return; // Evitar interacción si el tablero está bloqueado
    const card = event.target;
    const index = card.dataset.index;
    if (card.textContent || card === firstCard) return; // Evitar dobles clics

    card.textContent = shuffledCards[index]; // Mostrar el símbolo
    if (!firstCard) {
        firstCard = card;
    } else {
        secondCard = card;
        lockBoard = true; // Bloquear tablero hasta resolver
        checkMatch();
    }
}

// Comprobar si hay coincidencia
function checkMatch() {
    if (firstCard.textContent === secondCard.textContent) {
        firstCard = null;
        secondCard = null;
        lockBoard = false; // Desbloquear tablero
    } else {
        setTimeout(() => {
            firstCard.textContent = '';
            secondCard.textContent = '';
            firstCard = null;
            secondCard = null;
            lockBoard = false; // Desbloquear tablero
        }, 1000);
    }
    checkWin();
}

// Verificar si el jugador ganó
function checkWin() {
    const allFlipped = [...gameBoard.children].every(card => card.textContent);
    if (allFlipped) {
        clearInterval(interval);
        alert('You won!');
    }
}

// Iniciar el juego
function startGame() {
    time = 60;
    firstCard = null;
    secondCard = null;
    lockBoard = false; // Asegurar desbloqueo del tablero
    shuffleCards(); // Barajar cartas antes de iniciar
    createBoard();
    interval = setInterval(() => {
        time--;
        timerDisplay.textContent = `Time: ${time}s`;
        if (time === 0) {
            clearInterval(interval);
            alert('Time\'s up! Try again.');
        }
    }, 1000);
}

startGame();
