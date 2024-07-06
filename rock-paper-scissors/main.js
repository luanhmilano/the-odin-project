const values = ['rock', 'paper', 'scissors']

function getComputerChoice() {
    const num = Math.round(Math.random() * (values.length - 1));
    return values[num]
}

function getHumanChoice() {
    let ans = prompt('Input your choice')
    let newAns = ans.toLocaleLowerCase()
    
    if (newAns === "rock" || newAns === "paper" || newAns === "scissors") {
        return newAns
    } else {
        return null
    }

}


function playGame() {
    let humanScore = 0
    let computerScore = 0
    
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
    
        return result
    }

    function startRound(round) {
        let human = getHumanChoice()
        while (human === null) {
            alert('Invalid choice, try again.')
            human = getHumanChoice()
        }

        let computer = getComputerChoice()

        console.group("--CHOICES: ")
        console.log("Human choice: " + human)
        console.log("Computer choice: " + computer)
        console.groupEnd

        console.group(`------ROUND ${round}-------`)
        console.log(playRound(human, computer))
        console.log("SCORE HUMAN: " + humanScore)
        console.log("SCORE COMPUTER: " + computerScore)
        console.groupEnd

        if (round < 5) {
            setTimeout(() => {
                console.clear();
                startRound(round + 1);
            }, 3000);
        }
    }

    startRound(1);
          
}


playGame()