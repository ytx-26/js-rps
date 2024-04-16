function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors']
    const randomIndex = Math.floor(Math.random() * choices.length);
    let computerChoice = choices[randomIndex];
    return computerChoice; //returns whatever the computer decides 
}
const rockbtn = document.getElementById('rock');
const paperbtn = document.getElementById('paper');
const scissorbtn = document.getElementById('scissor');

function getPlayerChoice(choice){
}

rockbtn.addEventListener('click', function() {
    getPlayerChoice('rock');//if they click rock button a function will run where 'rock' is the para
});

