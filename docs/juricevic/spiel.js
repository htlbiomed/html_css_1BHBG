let score = 0;
let gameRunning = false;

const gameArea = document.getElementById("gameArea");
const scoreDisplay = document.getElementById("score");
const startButton = document.getElementById("startButton");

startButton.addEventListener("click", startGame);

function startGame() {
    if (gameRunning) return;

    gameRunning = true;
    score = 0;
    scoreDisplay.textContent = score;

    let gameTime = 20;

    const virusInterval = setInterval(createVirus, 700);

    const timer = setInterval(() => {
        gameTime--;

        if (gameTime <= 0) {
            clearInterval(timer);
            clearInterval(virusInterval);

            gameRunning = false;

            alert("Spiel vorbei! Punkte: " + score);

            gameArea.innerHTML = "";
        }
    }, 1000);
}

function createVirus() {
    const virus = document.createElement("div");
    virus.classList.add("virus");

    const x = Math.random() * 740;
    const y = Math.random() * 340;

    virus.style.left = x + "px";
    virus.style.top = y + "px";

    virus.addEventListener("click", () => {
        score++;
        scoreDisplay.textContent = score;
        virus.remove();
    });

    gameArea.appendChild(virus);

    setTimeout(() => {
        if (virus.parentNode) {
            virus.remove();
        }
    }, 2000);
}