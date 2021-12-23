//Computer chooses randomly
function computerPlay() {
    let choices = ["Rock", "Paper", "Scissors"];
    let num = Math.floor(Math.random() * 3);
    return choices[num];
}

//playerSelection input is case-insensitive
function caseInsensitive(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

//Win vs Lose
function playRound(playerSelection, computerSelection) {
    //inputs playerselection to not sensitive
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
            } else if (msg.includes("Lose") == true) {
                computerPoints +=1;
            } 

            console.log(msg);
            console.log(`You: ${playerPoints}, PC: ${computerPoints}`);
        }

    });
});


//buttons.onclick = function () {}



