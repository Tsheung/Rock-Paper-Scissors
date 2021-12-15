function computerPlay() {
    let choices = ["Rock", "Paper", "Scissors"];
    let num = Math.floor(Math.random() * 3);
    return choices[num];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `You Tied! Both of you chose ${playerSelection}`; 
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection == "Rock" && computerSelection == "Paper") {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }

}


const playerSelection = "Scissors";
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));
