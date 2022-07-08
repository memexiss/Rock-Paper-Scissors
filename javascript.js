const playerSelection = prompt("Choose Rock, Paper or Scissors")
const computerSelection = computerPlay();
function computerPlay(){
    const myArray = ["Rock", "Paper", "Scissors"];
    return myArray[~~(Math.random() * myArray.length)]
}  
function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        return "It is a tie";
      }
  
      //Check for Rock
      if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
          return "You Win!";
        } else {
          return "Computer Wins!!";
        }
      }
      //Check for Paper
      if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
          return "Computer Wins!";
        } else {
          return "You Win!";
        }
      }
      //Check for Scissors
      if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
          return "Computer Wins!";
        } else {
                  return "You Win!";
        }
      }
}
console.log("You chosed "+playerSelection)
console.log("The CPU chosed "+computerPlay())
console.log(playRound(playerSelection, computerSelection));
