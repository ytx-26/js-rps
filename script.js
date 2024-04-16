function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors']
    const randomIndex = Math.floor(Math.random() * choices.length);
    let computerChoice = choices[randomIndex];
    return computerChoice; //returns whatever the computer decides 
}
const rockbtn = document.getElementById('rock');
const paperbtn = document.getElementById('paper');
const scissorbtn = document.getElementById('scissor');

rockbtn.addEventListener('click', function() {
    getPlayerChoice('rock');
});
