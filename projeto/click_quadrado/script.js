const startButton = document.getElementById("start-button");
const square = document.getElementById("square");
const square2 = document.getElementById("square2");
const scoreDisplay = document.getElementById("scoreDisplay");
const timerDisplay = document.getElementById("timerDisplay");
const gameArea = document.getElementById("game-area");

let score = 0;
let timeLeft = 30;
let gameInterval;


startButton.addEventListener("click", function startGame(){
    score = 0;
    timeLeft = 30;   
    scoreDisplay.textContent = `Pontos: ${score}`;
    timerDisplay.textContent = `Timer: ${timeLeft}s`;
    showSquare();
    showSquare2();
    startButton.disabled = true;
    gameInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = `Timer: ${timeLeft}s`
        
        if(timeLeft <= 0) {
            gameOver();
        }
    }, 1000); // o set interval faz o seguinte: a cada um segundo, ele chama a função de novo

});

function showSquare() {
    const areaW = gameArea.clientWidth - 50; // o "-50" é chamado de offset. Sem ele, o quadrado sai do limite definido.
    const areaH = gameArea.clientHeight - 50;

    const randomY = Math.floor(Math.random() * areaH)
    const randomZ = Math.floor(Math.random() * areaW)

    square.style.top = `${randomY}px`
    square.style.left = `${randomZ}px`
    square.style.display = "block";
}

function showSquare2() {
    const areaW = gameArea.clientWidth - 50; // o "-50" é chamado de offset. Sem ele, o quadrado sai do limite definido.
    const areaH = gameArea.clientHeight - 50;

    const randomY = Math.floor(Math.random() * areaH)
    const randomZ = Math.floor(Math.random() * areaW)

    square2.style.top = `${randomY}px`
    square2.style.left = `${randomZ}px`
    square2.style.display = "block";
}


square.addEventListener("click", function handleSquareClick(){
    score++;
    scoreDisplay.textContent = `Pontos: ${score}`;
    showSquare();
    showSquare2();
});

square2.addEventListener("click", () => {
    gameOver();
})

function gameOver() {
    clearInterval(gameInterval);
    square.style.display = "none";
    startButton.disabled = false;
    alert(`Fim de jogo! Sua pontuação foi de ${score}`);
}
