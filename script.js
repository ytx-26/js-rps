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
    const computerChoice = getComputerChoice();

    if (choice===computerChoice){
        console.log('draw');
    } else if(
        (getPlayerChoice==='rock'&& computerChoice==='scissors') ||
        (getPlayerChoice==='paper'&& computerChoice==='rock') ||
        (getPlayerChoice==='scissor'&& computerChoice==='paper'){
            console.log('lost');
        }
    )
}

rockbtn.addEventListener('click', function() {
    getPlayerChoice('rock');//if they click rock button a function will run where 'rock' is the para
});

paperbtn.addEventListener('click', function() {
    playerSelection('paper');
});

scissorbtn.addEventListener('click', function() {
    playerSelection('scissors');
});
