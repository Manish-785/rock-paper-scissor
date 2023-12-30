function getComputerChoice(){
    let choices=["ROCK","PAPER","SCISSORS"];
    return choices[Math.floor(Math.random()*3)];
}

function getPlayerChoice(){
    return prompt("Enter Your Choice: ").toUpperCase();
}

function playRound(playerselection,computerselection){
    if (playerselection == "ROCK") {
        switch(computerselection){
            case "PAPER":return "You Lose! Paper beats Rock";break;
            case "SCISSORS":return "You Won! Rock beats Scissors";break;
            case "ROCK":return playRound(getPlayerChoice(),getComputerChoice());
        }
    }
    else if(playerselection == "PAPER"){
        switch(computerselection){
            case "PAPER":return playRound(getPlayerChoice(),getComputerChoice());break;
            case "SCISSORS":return "You Lose! Scissors beats Paper";break;
            case "ROCK":return "You Won! Paper beats Rock";break;
        }
    }
    else if(playerselection == "SCISSORS"){
        switch(computerselection){
            case "PAPER":return "You Won! Scissors beats Paper";break;
            case "SCISSORS":return playRound(getPlayerChoice(),getComputerChoice());break;
            case "ROCK":return "You Lose! Rock beats Scissors";break;
        }
    }
    else{
        return "Error!! No such choice Found!";
    }
}

function game(){
    for(let i=1;i<=5;++i){
        const playerselection = getPlayerChoice();
        const computerselection = getComputerChoice();
        console.log(playRound(playerselection,computerselection));
    }
}
game();