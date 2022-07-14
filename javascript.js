let playerScore = 0;
let computerScore = 0;
const results = document.querySelector("#results");
const content = document.createElement("div");
const options = document.querySelector("#options");
const start = document.createElement("button");
const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");
const p = document.createElement("p");
const winner = document.createElement("h3");

/*styles*/
p.style.cssText += "color:white";
winner.style.cssText += "color:#e6e6e6;font-size:50px;";
content.style.cssText += "color:white;";
start.style.cssText += "border-radius: 10px;background-color:#a2a2c3;width: 160px; height: 160px;";
rock.style.cssText += "border-radius: 10px;background-color:#a2a2c3;width: 160px; height: 160px; font-size:50px;";
paper.style.cssText += "border-radius: 10px;background-color:#a2a2c3;width: 160px; height: 160px; font-size:50px;";
scissors.style.cssText += "border-radius: 10px;background-color:#a2a2c3;width: 160px; height: 160px; font-size:50px;";
start.innerHTML = "Play";
rock.innerHTML = "✊";
paper.innerHTML = "✋";
scissors.innerHTML = "✌";
options.appendChild(start);
results.appendChild(content);

start.addEventListener("click", () => {
    game();
});
rock.addEventListener("click", () => {
    content.textContent = playRound("rock", computerPlay());
    p.textContent = `Player score: ${playerScore}       Computer score: ${computerScore}`;
    results.appendChild(p);
    gameEnd();
});

paper.addEventListener("click", () => {
    content.textContent = playRound("paper", computerPlay());
    p.textContent = `Player score: ${playerScore}       Computer score: ${computerScore}`;
    results.appendChild(p);
    gameEnd();
});

scissors.addEventListener("click", () => {
    content.textContent = playRound("scissors", computerPlay());
    p.textContent = `Player score: ${playerScore}       Computer score: ${computerScore}`;
    results.appendChild(p);
    gameEnd();
});

function game() {
    options.removeChild(start);
    options.appendChild(rock);
    options.appendChild(paper);
    options.appendChild(scissors);
}
function gameEnd() {
    if (playerScore == 5 || computerScore == 5) {
        options.removeChild(rock);
        options.removeChild(paper);
        options.removeChild(scissors);
        if (playerScore == 5) {
            winner.textContent = "You Win!";
        } else {
            winner.textContent = "Computer Wins!";
        }
        results.replaceChild(winner, content);
    }
}

function playRound(playerSelection, computerSelection) {
    switch (playerSelection) {
        case "rock":
            if (computerSelection == "rock") {
                return "It's a tie!";
            } else if (computerSelection == "paper") {
                computerScore++;
                return "You Lose! Paper beats Rock";
            } else {
                playerScore++;
                return "You Win! Rock beats Scissors";
            }
        case "paper":
            if (computerSelection == "paper") {
                return "It's a tie!";
            } else if (computerSelection == "scissors") {
                computerScore++;
                return "You Lose! Scissors beats Paper";
            } else {
                playerScore++;
                return "You Win! Paper beats Rock";
            }
        case "scissors": 
            if (computerSelection == "scissors") {
                return "It's a tie!";
            } else if (computerSelection == "paper") {
                playerScore++;
                return "You Win! Scissors beats Paper";
            } else {
                computerScore++;
                return "You Lose! Rock beats Scissors";
            }
    }
}
function computerPlay() {
    const options = ["rock ", "paper", "scissors"];
    const random = Math.floor(Math.random() * options.length);
    return options[random];
}