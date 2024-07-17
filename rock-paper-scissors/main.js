<<<<<<< Updated upstream
const buttons = document.querySelectorAll("button");
=======
const buttons = document.querySelectorAll("button:not(#restart)");
>>>>>>> Stashed changes
const divResult = document.querySelector(".result")
const divWinner = document.querySelector(".winner")
const restartButton = document.querySelector("#restart");

<<<<<<< Updated upstream
const p = document.createElement("p")

=======
>>>>>>> Stashed changes
let humanScore = 0
let computerScore = 0
let round = 0


function getComputerChoice() {
    const values = ['rock', 'paper', 'scissors']
<<<<<<< Updated upstream
    const num = Math.round(Math.random() * (values.length - 1));
=======
    const num = Math.floor(Math.random() * values.length);
>>>>>>> Stashed changes
    return values[num]
}

function playRound(humanChoice, computerChoice) {
    let result = "";
<<<<<<< Updated upstream

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
=======

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


>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
// RODADAS A CADA CLIQUE NAS CHOICES
=======
>>>>>>> Stashed changes
function handleClick(button) {
    console.clear()
    round++
    if (round < 5) {
        playGame(button.value)
    } else {
        checkWinner()
    }
}

<<<<<<< Updated upstream
// RESETA O GAME AO FIM DAS RODADAS
=======
>>>>>>> Stashed changes
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