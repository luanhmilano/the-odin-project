const buttons = document.querySelectorAll("button:not(#restart)");
const divResult = document.querySelector(".result")
const divWinner = document.querySelector(".winner")
const restartButton = document.querySelector("#restart");

let humanScore = 0
let computerScore = 0
let round = 0


function getComputerChoice() {
    const values = ['rock', 'paper', 'scissors']
    const num = Math.floor(Math.random() * values.length);
    return values[num]
}

function playRound(humanChoice, computerChoice) {
    let result = "";

    if (humanChoice === computerChoice) {
        result = `Draw! Both chose ${humanChoice}`;
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    } else {
        result = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }

    return result

}

function updateResultDisplay(humanChoice, computerChoice, result) {
    divResult.innerHTML = `
        <p>Human choice: ${humanChoice}</p>
        <p>Computer choice: ${computerChoice}</p>
        <p>${result}</p>
        <p>SCORE HUMAN: ${humanScore}</p>
        <p>SCORE COMPUTER: ${computerScore}</p>
    `
}


function playGame(humanChoice) {

    const computerChoice = getComputerChoice()
    const result = playRound(humanChoice, computerChoice)
    updateResultDisplay(humanChoice, computerChoice, result);

    if (round >= 5 || humanScore >= 3 || computerScore >= 3) {
        checkWinner()
    }
}


function checkWinner() {
    if (computerScore > humanScore) {
        divWinner.textContent = "COMPUTER WINS"
    } else if (humanScore > computerScore) {
        divWinner.textContent = "HUMAN WINS"
    } else {
        divWinner.textContent = "DRAW"
    }
    restartButton.style.display = "block";
}

function handleClick(button) {
    console.clear()
    round++
    if (round < 5) {
        playGame(button.value)
    } else {
        checkWinner()
    }
}

function resetGame() {
    round = 0
    computerScore = 0
    humanScore = 0
    divWinner.textContent = ""
    divResult.innerHTML = ""
    restartButton.style.display = "none"
    console.clear()
}

buttons.forEach(button => {
    button.addEventListener("click", () => handleClick(button))
})

restartButton.addEventListener("click", resetGame)