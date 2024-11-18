let startTime = 0;
let elapsedTime = 0;
let timerInterval = null;

// Format time as HH:MM:SS
function formatTime(time) {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Update display
function updateDisplay() {
    const display = document.getElementById("display");
    display.textContent = formatTime(elapsedTime);
}

// Start button event
document.getElementById("start").addEventListener("click", () => {
    if (!timerInterval) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            updateDisplay();
        }, 1000);
    }
});

// Stop button event
document.getElementById("stop").addEventListener("click", () => {
    clearInterval(timerInterval);
    timerInterval = null;
});

// Reset button event
document.getElementById("reset").addEventListener("click", () => {
    clearInterval(timerInterval);
    timerInterval = null;
    elapsedTime = 0;
    updateDisplay();
});

// Initialize display
updateDisplay();
