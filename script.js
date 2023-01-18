
function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    return computerChoice;
}


function getResult(playerChoice, computerChoice) {
    let score

    if (playerChoice === computerChoice) {
        score = 0
    } else if (playerChoice === 'Rock' && computerChoice === 'Scissors') {
        score = 1
    } else if (playerChoice === 'Paper' && computerChoice === 'Rock') {
        score = 1
    } else if (playerChoice === 'Scissors' && computerChoice === 'Paper') {
        score = 1
    } else {
        score = -1
    }
    return score;
}


function showResult(score, playerChoice, computerChoice) {
    let result = document.getElementById('result')
    switch (score) {
        case -1:
            result.innerText = `You Lose!`
            break;
        case 0:
            result.innerText = `It's a draw!`
            break;
        case 1:
            result.innerText = `You win!`
            break;
    }
    let playerScore = document.getElementById('player-score')
    let hands = document.getElementById('hands')
    playerScore.innerText = `${Number(playerScore.innerText) + score}`
    hands.innerText = `${playerChoice} vs ${computerChoice}`
}


function onClickRPS(playerChoice) {

}



function playGame() {

}


function endGame() {

}

playGame()