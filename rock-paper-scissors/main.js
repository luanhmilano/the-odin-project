const buttons = document.querySelectorAll("button");
const divResult = document.querySelector(".result")
const divWinner = document.querySelector(".winner")
const restartButton = document.querySelector("#restart");

const p = document.createElement("p")

let humanScore = 0
let computerScore = 0
let round = 0


function getComputerChoice() {
    const values = ['rock', 'paper', 'scissors']
    const num = Math.round(Math.random() * (values.length - 1));
    return values[num]
}

function playRound(humanChoice, computerChoice) {
    let result = "";

    switch (humanChoice) {
        case "rock":
            if (computerChoice === "paper") {
                result = "You lose! Paper beats Rock"
                computerScore++
            } else if (computerChoice === "scissors") {
                result = "You win! Rock beats Scissors"
                humanScore++
            } else {
                result = "Draw! both chose Rock"
            }    

            break;
            
        case "paper":
            if (computerChoice === "rock") {
                result = "You win! Paper beats Rock"
                humanScore++
            } else if (computerChoice === "scissors") {
                result = "You lose! Scissors beats Paper"
                computerScore++
            } else {
                result = "Draw! both chose Paper"
            }    

            break;    
        
        case "scissors":
            if (computerChoice === "rock") {
                result = "You lose! Rock beats Scissors"
                computerScore++
            } else if (computerChoice === "paper") {
                result = "You win! Scissors beats Paper"
                humanScore++
            } else {
                result = "Draw! both chose Scissors"
            }    

            break; 

        default:
            break;
    }

    return [result, computerScore, humanScore]
}


function playGame(human) {
    

    let computer = getComputerChoice()

    const roundResult = playRound(human, computer)

    const choiceHuman = `Human choice: ${human}`
    const choiceComputer = `Computer choice: ${computer}`
    const result = roundResult[0]
    const scoreHuman = `SCORE HUMAN: ${roundResult[2]}`
    const scoreComputer = `SCORE COMPUTER: ${roundResult[1]}`

    divResult.innerHTML = ""

    const pChoiceHuman = document.createElement('p');
    pChoiceHuman.textContent = choiceHuman;
    divResult.appendChild(pChoiceHuman);

    const pChoiceComputer = document.createElement('p');
    pChoiceComputer.textContent = choiceComputer;
    divResult.appendChild(pChoiceComputer);

    const pResult = document.createElement('p');
    pResult.textContent = result;
    divResult.appendChild(pResult);

    const pScoreHuman = document.createElement('p');
    pScoreHuman.textContent = scoreHuman;
    divResult.appendChild(pScoreHuman);

    const pScoreComputer = document.createElement('p');
    pScoreComputer.textContent = scoreComputer;
    divResult.appendChild(pScoreComputer);


    console.log("--CHOICES: ")
    console.log("Human choice: " + human)
    console.log("Computer choice: " + computer)
    console.log(roundResult[0])
    console.log("SCORE COMPUTER: " + roundResult[1])
    console.log("SCORE HUMAN: " + roundResult[2])
}


//playGame()

// DESACOPLAR A VERIFICAÇÃO DO VENCEDOR
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

// RODADAS A CADA CLIQUE NAS CHOICES
function handleClick(button) {
    console.clear()
    round++
    if (round < 5) {
        playGame(button.value)
    } else {
        checkWinner()
    }
}

// RESETA O GAME AO FIM DAS RODADAS
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