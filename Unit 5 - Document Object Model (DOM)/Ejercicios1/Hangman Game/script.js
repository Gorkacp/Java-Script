// Array de palabras
const words = ['paris', 'london', 'berlin', 'madrid', 'rome', 'tokyo', 'newyork'];
let selectedWord = '';
let guessedWord = [];
let lives = 10;

// Elección aleatoria de palabra
function chooseWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  selectedWord = words[randomIndex];
  guessedWord = Array(selectedWord.length).fill('_');
  updateWordDisplay();
}

// Actualizar el display de la palabra a adivinar
function updateWordDisplay() {
  const wordDisplay = document.getElementById('word');
  wordDisplay.textContent = guessedWord.join(' ');
}

// Actualizar vidas
function updateLives() {
  document.getElementById('lives-count').textContent = lives;
}

// Generar el alfabeto
function generateAlphabet() {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const alphabetDiv = document.getElementById('alphabet');

  alphabet.forEach(letter => {
    const button = document.createElement('button');
    button.textContent = letter;
    button.addEventListener('click', () => handleLetterClick(button, letter));
    alphabetDiv.appendChild(button);
  });
}

// Manejar click en una letra
function handleLetterClick(button, letter) {
  button.disabled = true;  // Deshabilitar el botón después de clic
  button.classList.add('selected');

  if (selectedWord.includes(letter)) {
    for (let i = 0; i < selectedWord.length; i++) {
      if (selectedWord[i] === letter) {
        guessedWord[i] = letter;
      }
    }
  } else {
    lives--;
    updateLives();
  }

  updateWordDisplay();

  if (guessedWord.join('') === selectedWord) {
    alert('¡Felicidades, ganaste!');
  } else if (lives === 0) {
    alert('¡Te quedaste sin vidas! La palabra era: ' + selectedWord);
  }
}

// Botón de pista
document.getElementById('hint-button').addEventListener('click', () => {
  alert('La pista es una ciudad mundialmente conocida.');
});

// Inicializar el juego
function initGame() {
  lives = 10;
  updateLives();
  chooseWord();
  generateAlphabet();
}

initGame();
