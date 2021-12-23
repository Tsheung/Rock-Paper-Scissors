//Computer chooses randomly
function computerPlay() {
    let choices = ["Rock", "Paper", "Scissors"];
    let num = Math.floor(Math.random() * 3);
    return choices[num];
}

//playerSelection input is case-insensitive DELETE
function caseInsensitive(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

//Win vs Lose
function playRound(playerSelection, computerSelection) {
    //inputs playerselection to not sensitive DELETE
    playerSelection = caseInsensitive(playerSelection);

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
const body = document.querySelector('body');

const scoring = document.createElement('div');
scoring.classList.add('scoring');
scoring.textContent = `${playerPoints} - ${computerPoints}`;

body.appendChild(scoring);

//Results
const result = document.createElement('div');
result.classList.add('result');
result.textContent = '';
body.appendChild(result);


//Click Response
buttons.forEach((b) => {
    b.addEventListener('click', () => {
        //console.log(b.className);
        
        if (playerPoints < 5 && computerPoints < 5) {
            let computerSelection = computerPlay();
            let playerSelection = b.className;
    
            //Return win or lose
            let msg = playRound(playerSelection, computerSelection);
            
            //Adds total points
            if (msg.includes("Win") == true) {
                playerPoints +=1;
                scoring.textContent = `${playerPoints} - ${computerPoints}`;
                //result.textContent = msg;
            } else if (msg.includes("Lose") == true) {
                computerPoints +=1;
                scoring.textContent = `${playerPoints} - ${computerPoints}`;
                //result.textContent = msg;
            } 

            console.log(msg);
            result.textContent = msg;
            console.log(`You: ${playerPoints}, PC: ${computerPoints}`);
        }

        //Stops at 5 points
        if (playerPoints == 5 || computerPoints == 5) {
            if (playerPoints == 5) {
                alert("Game Over! You Win!");
                //Maybe div to restart and state win!
                
            }
            else {
                alert("Game Over! You Lose.");
                
            }
        }

    });
});






