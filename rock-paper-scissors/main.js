const values = ['rock', 'paper', 'scissors']
let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    const num = Math.round(Math.random() * (values.length - 1));
    return values[num]
}

let computer = getComputerChoice()

function getHumanChoice() {
    let ans = prompt('Input your choice')
    let newAns = ans.toLocaleLowerCase()
    
    if (newAns === "rock" || newAns === "paper" || newAns === "scissors") {
        return newAns
    } else {
        return null
    }

}

let human = getHumanChoice()
while (human === null) {
    alert('Invalid choice, try again.')
    human = getHumanChoice()
}

console.log(computer)
console.log(human)

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

console.log('------ROUND 1-------')
console.log(playRound(human, computer))
console.log("SCORE HUMAN: " + humanScore)
console.log("SCORE COMPUTER: " + computerScore)