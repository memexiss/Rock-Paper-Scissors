let computerSelection = Math.ceil(Math.random() *3);
let t = 0;
let l = 0;
let w = 0;
let badAnswer = 0;

if (computerSelection < 1) {
  computerSelection = "rock";
} else if(1 <= computerSelection <= 2) {
  computerSelection = "paper";
} else {
  computerSelection = "scissors";
}
function playRound(choice, computerSelection){
      if (choice === computerSelection) {
        t++
        return "It's a tie";
      }
      if (choice === "rock") {
        if (computerSelection === "scissors") {
          w++
          return "You Win!";
        } else {
          l++
          return "Computer Wins!";
        }
      }
      if (choice === "paper") {
        if (computerSelection === "scissors") {
          l++
          return "Computer Wins!";
        } else {
          w++
          return "You Win!";
        }
      }
      if (choice === "scissors") {
        if (computerSelection === "rock") {
          l++
          return "Computer Wins!";
        } else {
          w++
          return "You Win!";
        }
      }
      else{
        return noResult = "Please type: Rock, Paper, or Scissors.";
    }
}
function game(){
  for (let i = 1; i < 6; i++) {
    choice = prompt("Choose Rock, Paper or Scissors").toLowerCase()
    alert("You picked: "+choice + `\r` + "The CPU picked: "+computerSelection + `\r` + playRound(choice, computerSelection))
    alert(`Game: ` + i + `/5\r` + `Score:\rYou: ` + w +`\rCPU: ` + l + `\rTies: ` + t);
    if (badAnswer == 1){
        i--;
        badAnswer--;
    }
 }
}
game();
