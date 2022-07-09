let playerSelection = prompt("Choose Rock, Paper or Scissors")
let computerSelection = Math.ceil(Math.random() *3);

if (computerSelection < 1) {
  computerSelection = "rock";
} else if(1 <= computerSelection <= 2) {
  computerSelection = "paper";
} else {
  computerSelection = "scissors";
}
function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        return "It's a tie";
      }
      if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
          return "You Win!";
        } else {
          return "Computer Wins!!";
        }
      }
      if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
          return "Computer Wins!";
        } else {
          return "You Win!";
        }
      }
      if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
          return "Computer Wins!";
        } else {
          return "You Win!";
        }
      }
}
function game(playRound){
  for (let i = 0; i < 5; i++) {
    playRound()
 }
}
console.log("You picked "+playerSelection)
console.log("The CPU picked "+computerSelection)
console.log(playRound(playerSelection, computerSelection));
