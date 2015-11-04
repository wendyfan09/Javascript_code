//Rock,Paper,Scissors Game.Try it!
var userChoice = prompt("Do you choose rock, paper or scissors?");
if (userChoice != "rock" && userChoice != "paper" && userChoice != "scissors"){
    userChoice = prompt("Please input just from rock,paper or scissors!");
}else{
    console.log("User choice" + " "+userChoice);
}
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

var compare = function(choice1, choice2){
    if(choice1 === choice2){
        return "The result is a tie!";
    }else if(choice1 === "rock"){
        if(choice2 === "scissors"){
            return "Computer wins";
        }else{
            return "User wins";
        }
    }else if(choice1 === "paper"){
        if(choice2 === "rock"){
            return "Computer wins";
        }else{
            return "User wins";
        }
    }else if(choice1 === "scissors"){
        if(choice2 ==="paper"){
            return "Computer wins";
        }else{
            return "User wins";
        }
    }
};
console.log(compare(computerChoice, userChoice));