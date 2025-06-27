

let bestOfChoice = 3;
let playerScore = 0;
let computerScore = 0;
const choices = ['rock', 'paper', 'scissors'];
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const resultDisplay = document.getElementById('resultMessage');
const playerScoreDisplay = document.getElementById('playerScore');
const computerScoreDisplay = document.getElementById('computerScore');
const resetButton = document.getElementById('resetGame');
const bestOfThreeButton = document.getElementById('bestOfThree');
const bestOfFiveButton = document.getElementById('bestOfFive');
const bestOfSevenButton = document.getElementById('bestOfSeven');
const gameAnimation = document.getElementById('gameAnimation');
const playerChoiceImage = document.getElementById('playerChoiceImage');
const computerChoiceImage = document.getElementById('computerChoiceImage');

function setBestOfChoice(choice) {
    bestOfChoice = choice;
    resetGame();
}
bestOfThreeButton.addEventListener('click', () => {setBestOfChoice(3);});
bestOfFiveButton.addEventListener('click', () => {setBestOfChoice(5);});
bestOfSevenButton.addEventListener('click', () => {setBestOfChoice(7);});

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    bestOfFiveButton.disabled = true;
    bestOfThreeButton.disabled = true;
    bestOfSevenButton.disabled = true;
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
        return "You win! " + playerSelection + " beats " + computerSelection + ".";
    } else {
        computerScore++;
        return "You lose! " + computerSelection + " beats " + playerSelection + ".";
    }
}

function updateScores() {
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}
function checkWinner() {
    if (playerScore === Math.ceil(bestOfChoice / 2)) {
        resultDisplay.textContent += " You win the game!";
        disableButtons();
    } else if (computerScore === Math.ceil(bestOfChoice / 2)) {
        resultDisplay.textContent += " Computer wins the game!";
        disableButtons();
    }
}
function disableButtons() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
}
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    updateScores();
    resultDisplay.textContent = "Choose your move!";
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
    bestOfFiveButton.disabled = false;
    bestOfThreeButton.disabled = false;
    bestOfSevenButton.disabled = false;

     rockButton.classList.remove('active');
     paperButton.classList.remove('active');
     scissorsButton.classList.remove('active');

    playerChoiceImage.src = 'Assets/question-mark.png';
    playerChoiceImage.alt = 'Player Choice';
    computerChoiceImage.src = 'Assets/question-mark.png';
    computerChoiceImage.alt = 'Computer Choice';
}
function setButtonState(choice) {
    rockButton.classList.remove('active');
    paperButton.classList.remove('active');
    scissorsButton.classList.remove('active');

    if (choice === 0) rockButton.classList.add('active');
    if (choice === 1) paperButton.classList.add('active');
    if (choice === 2) scissorsButton.classList.add('active');

    const playerSelection = choices[choice];
    const computerSelection = getComputerChoice();
    
    playerChoiceImage.src = `Assets/${playerSelection}.png`;
    playerChoiceImage.alt = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

    computerChoiceImage.src = `Assets/${computerSelection}.png`;
    computerChoiceImage.alt = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
    resultDisplay.textContent = playRound(playerSelection, computerSelection);
    updateScores();
    checkWinner();
}


resetButton.addEventListener('click', resetGame);
rockButton.addEventListener('click', () => { setButtonState(0); });
paperButton.addEventListener('click', () => { setButtonState(1); });
scissorsButton.addEventListener('click', () => { setButtonState(2);});
// Initialize the game
updateScores();