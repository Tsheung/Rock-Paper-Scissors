//Computer chooses randomly
function computerPlay() {
    let choices = ["Rock", "Paper", "Scissors"];
    let num = Math.floor(Math.random() * 3);
    return choices[num];
}

//Win vs Lose
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


//retrieve all buttons
const buttons = document.querySelectorAll('.Images div');

//Count
let playerPoints = 0;
let computerPoints = 0;

//Scoreboard
const scoring = document.querySelector('.scoring');
scoring.textContent = `${playerPoints} - ${computerPoints}`;

//Results
const result = document.querySelector('.result');
result.textContent = '';

//Click Response
buttons.forEach((b) => {
    b.addEventListener('click', () => {
        
        if (playerPoints < 5 && computerPoints < 5) {
            let computerSelection = computerPlay();
            let playerSelection = b.className;
    
            //Return win or lose
            let msg = playRound(playerSelection, computerSelection);
            
            //Adds total points
            if (msg.includes("Win") == true) {
                playerPoints +=1;
                scoring.textContent = `${playerPoints} - ${computerPoints}`;
               
            } else if (msg.includes("Lose") == true) {
                computerPoints +=1;
                scoring.textContent = `${playerPoints} - ${computerPoints}`;
            } 

            result.textContent = msg;
            console.log(`You: ${playerPoints}, PC: ${computerPoints}`);
        }

        //Stops at 5 points
        if (playerPoints == 5 || computerPoints == 5) {
            if (playerPoints == 5) {
                result.textContent = "Game Over! You Win!";
            }
            else {
                result.textContent = "Game Over! You Lose!";
                
            }
        }

    });
});

//Refresh button
const button = document.querySelector("#refresh");
button.addEventListener("click", () => {
    location.reload();
})






