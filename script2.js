const winOrder = ["scissors", "rock", "paper"]

function comnputerPlay(){
    move = Math.floor(Math.random() * 3)
    return winOrder[move]
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase() // clean up

    playerIndex = winOrder.indexOf(playerSelection) // for comparison
    computerIndex = winOrder.indexOf(computerSelection)
    
    // checks for tie
    if (playerIndex == computerIndex) {
        return ["Tie, both " + playerSelection + ".", 0]
    }
    // checks if player is one up or loops back around 
    else if (playerIndex == computerIndex + 1 || playerIndex == computerIndex - 2) { 
        return ["You win, " + playerSelection +
        " beats " + computerSelection + ".", 1]
    }
    // losing is the only remaining possibility
    else {
        return ["You lose, " + computerSelection +
        " beats " + playerSelection + ".", 0]
    }
}

function inputHandler() {
    result = playRound(this.id, comnputerPlay())
    console.log(result[0])
    const resultDiv = document.querySelector('#results')
    resultDiv.textContent = result[0]
}

function game() {
    
    const buttons = document.querySelectorAll('button')

    buttons.forEach(button => button.addEventListener('click', inputHandler))

}

game()