function getComputerChoice(){
    let choices=["ROCK","PAPER","SCISSORS"];
    return choices[Math.floor(Math.random()*3)];
}

let getPlayerChoice;
const userscore = document.querySelector('.UserScore');
const computerscore = document.querySelector('.ComputerScore');
let outcome;

function playRound(playerselection,computerselection){
    if (playerselection == "ROCK") {
        switch(computerselection){
            case "PAPER":return "You Lose! Paper beats Rock";break;
            case "SCISSORS":return "You Won! Rock beats Scissors";break;
            case "ROCK":return playRound(getPlayerChoice,getComputerChoice());
        }
    }
    else if(playerselection == "PAPER"){
        switch(computerselection){
            case "PAPER":return playRound(getPlayerChoice,getComputerChoice());break;
            case "SCISSORS":return "You Lose! Scissors beats Paper";break;
            case "ROCK":return "You Won! Paper beats Rock";break;
        }
    }
    else if(playerselection == "SCISSORS"){
        switch(computerselection){
            case "PAPER":return "You Won! Scissors beats Paper";break;
            case "SCISSORS":return playRound(getPlayerChoice,getComputerChoice());break;
            case "ROCK":return "You Lose! Rock beats Scissors";break;
        }
    }
    else{
        return "Error!! No such choice Found!";
    }
}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');
const result = document.querySelector('#result');

rock.addEventListener('click',function(){
    getPlayerChoice='ROCK';
    outcome = playRound(getPlayerChoice,getComputerChoice());
    result.textContent = outcome;
    if(outcome.includes('Lose!'))
        computerscore.textContent = parseInt(computerscore.textContent)+1;
        if(outcome.includes('Won!'))
        userscore.textContent = parseInt(userscore.textContent)+1;
})
paper.addEventListener('click',function(){
    getPlayerChoice='PAPER';
    outcome = playRound(getPlayerChoice,getComputerChoice());
    result.textContent = outcome;
    if(outcome.includes('Lose!'))
        computerscore.textContent = parseInt(computerscore.textContent)+1;
    if(outcome.includes('Won!'))
        userscore.textContent = parseInt(userscore.textContent)+1;
})
scissor.addEventListener('click',function(){
    getPlayerChoice='SCISSORS';
    outcome = playRound(getPlayerChoice,getComputerChoice());
    result.textContent = outcome;
    if(outcome.includes('Lose!'))
        computerscore.textContent = parseInt(computerscore.textContent)+1;
    if(outcome.includes('Won!'))
        userscore.textContent = parseInt(userscore.textContent)+1;
})

const reset = document.querySelector('#reset');
reset.addEventListener('click',function(){
    userscore.textContent = 0;
    computerscore.textContent = 0;
    result.textContent = '';
})