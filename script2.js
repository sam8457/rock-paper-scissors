const winOrder = ["scissors", "rock", "paper"]

function comnputerPlay(){
    move = Math.floor(Math.random() * 3)
    return winOrder[move]
}

function roundEval(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase() // clean up

    playerIndex = winOrder.indexOf(playerSelection) // for comparison
    computerIndex = winOrder.indexOf(computerSelection)
    
    // checks for tie
    if (playerIndex == computerIndex) {
        return ["Tie, both " + playerSelection + ".", "tie"]
    }
    // checks if player is one up or loops back around 
    else if (playerIndex == computerIndex + 1 || playerIndex == computerIndex - 2) { 
        return ["You win, " + playerSelection +
        " beats " + computerSelection + ".", "player"]
    }
    // losing is the only remaining possibility
    else {
        return ["You lose, " + computerSelection +
        " beats " + playerSelection + ".", "com"]
    }
}

function inputHandler() {

    result = roundEval(this.id, comnputerPlay())
    console.log(result[0])
    const resultDiv = document.querySelector('#results')
    resultDiv.textContent = result[0]

    if (result[1] == "player") {
        playerWins += 1
    } else if (result[1] == "com") {
        comWins += 1
    } else {
        ties += 1
    }

    const playerScore = document.querySelector("#playerScore")
    const comScore = document.querySelector("#comScore")

    playerScore.textContent = "You: " + playerWins
    comScore.textContent = "Com: " + comWins

    const winner = document.querySelector('#winner')
    if (playerWins >= 5) {
        winner.textContent = "Player has won." 
    } else if (comWins >= 5) {
        winner.textContent = "Computer has won."
    }
}

function main() {
    playerWins = 0
    comWins = 0
    ties = 0

    const buttons = document.querySelectorAll('button')

    buttons.forEach(button => button.addEventListener('click', inputHandler))
}

main()