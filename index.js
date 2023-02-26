let computerChoiceDisplay = document.getElementById("computer-choice");
let userChoiceDisplay = document.getElementById("user-choice");
let resultDisplay = document.getElementById("result");
// let possibleChoice = document.querySelectorAll("button");
let buttonRock = document.getElementById("rock");
let buttonPaper = document.getElementById("paper");
let buttonScissors = document.getElementById("scissors");

let rockimg = document.getElementById("rockimg");

let computerChoice;
//Counter
let userCounterDisplay = document.getElementById("user-counter");
let computerCounterDisplay = document.getElementById("computer-counter");



// TODO: USER Choice Display
buttonRock.addEventListener("click", function() {
    
    userChoiceDisplay.innerHTML = this.innerHTML;
});

buttonPaper.addEventListener("click", function () {
    userChoiceDisplay.innerHTML = this.innerHTML;
});

buttonScissors.addEventListener("click", function (){
    userChoiceDisplay.innerHTML = this.innerHTML;
});


//TODO: COMPUTER Choice Display
let numberOfButtons = document.querySelectorAll(".choice").length;
for(let i = 0; i <numberOfButtons; i++){
document.querySelectorAll(".choice")[i].addEventListener("click", function() {
    generateComputerChoice();
    whoWins();
})};

//TODO: COMPUTER Choice Generator
function generateComputerChoice() {
    let randomNumber = Math.floor((Math.random()*3)+1);

    if(randomNumber === 1){
        computerChoice = buttonRock.innerHTML;
    } 
    else if(randomNumber === 2){
        computerChoice = buttonPaper.innerHTML;
    }
    else if(randomNumber === 3){
        computerChoice = buttonScissors.innerHTML;
    }

computerChoiceDisplay.innerHTML = computerChoice;
};


//TODO: RESULT display
function whoWins() {

    if(computerChoice === userChoiceDisplay.innerHTML){
        result = "It's a Draw! 🔗"
    } 
    else if(computerChoice === buttonRock.innerHTML && userChoiceDisplay.innerHTML === buttonPaper.innerHTML){
        result = "Cat Wins 👤";
        userCounter++;
    }
    else if(computerChoice === buttonRock.innerHTML && userChoiceDisplay.innerHTML === buttonScissors.innerHTML){
        result = "Computer Wins! 🤖";
        computerCounter++
    }
    else if(computerChoice === buttonPaper.innerHTML && userChoiceDisplay.innerHTML === buttonRock.innerHTML){
        result = "Computer Wins! 🤖";
        computerCounter++
    }
    else if(computerChoice === buttonPaper.innerHTML && userChoiceDisplay.innerHTML === buttonScissors.innerHTML){
        result = "Cat Wins 👤";
        userCounter++;
    }
    else if(computerChoice === buttonScissors.innerHTML && userChoiceDisplay.innerHTML === buttonRock.innerHTML){
        result = "Cat Wins 👤";
        userCounter++;
    } 
    else if(computerChoice === buttonScissors.innerHTML && userChoiceDisplay.innerHTML === buttonPaper.innerHTML){
        result = "Computer Wins! 🤖";
        computerCounter++;
    }
    else{
        result = "";
    }
    resultDisplay.innerHTML = result;
    userCounterDisplay.innerHTML = userCounter;
    computerCounterDisplay.innerHTML = computerCounter;
    checkWinner()
   
}

// TODO: Counter Display
let computerCounter = 0;
let userCounter = 0;

result.addEventListener("click", function() { //Event Listener added to result as it has results of the user and can check whether it matches if/else statement.
    if(result = "User Wins 👤"){
        userCounter++;
    } 
    else if(result = "Computer Wins! 🤖") {
        computerCounter++;
    }
    
});

//* Final Result && Button Disable Function

let gameResultUpdate = document.getElementById("updateWinner");
function checkWinner(){
    if(computerCounter === 5){
        buttonRock.setAttribute("disabled", "true");
        buttonPaper.setAttribute("disabled", "true");
        buttonScissors.setAttribute("disabled", "true");
        return updateWinner.textContent = `You lost, Computer won💀 ${computerCounter} : ${userCounter}`;
    }
    else if(userCounter === 5){
        buttonRock.setAttribute("disabled", "true");
        buttonPaper.setAttribute("disabled", "true");
        buttonScissors.setAttribute("disabled", "true");
        return updateWinner.textContent = `✨You Won!✨!! ${computerCounter} : ${userCounter} `;
    }
}
