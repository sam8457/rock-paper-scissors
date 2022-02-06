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

function game(){
    let wins = 0
    console.log("Rock-Paper-Scissors Start!")
    for (let i = 1; i <= 5; i++) {
        console.log("Round " + i)
        playerChoice = prompt("Your choice: ")
        results = playRound(playerChoice, comnputerPlay())
        console.log(results[0])
        wins += results[1]
    }
    console.log("You won " + wins + " times.")
}

game()