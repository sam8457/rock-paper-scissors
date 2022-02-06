const winOrder = ["paper", "rock", "scissors"]

function comnputerPlay(){
    move = Math.floor(Math.random() * 3) + 1
    switch (move){
        case 1:
            return "rock"
        case 2:
            return "paper"
        case 3:
            return "scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection == computerSelection) {
        return ["Tie.", 0]
    } else if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            return ["You lose. Paper beats Rock.", 0]
        } else if (computerSelection == 'scissors') {
            return ["You win. Rock beats Scissors.", 1]
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'scissors') {
            return ["You lose. Scissors beats Paper.", 0]
        } else if (computerSelection == 'rock') {
            return ["You win. Paper beats Rock.", 1]
        }
    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            return ["You lose. Rock beats Scissors.", 0]
        } else if (computerSelection == 'paper') {
            return ["You win. Scissors beats Paper.", 1]
        }
    } else {
        return ["You fucked something up royally if you're reading this.", 0]
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