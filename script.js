function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors']
    const randomIndex = Math.floor(Math.random() * choices.length);
    let computerChoice = choices[randomIndex];
    return computerChoice; //returns whatever the computer decides 
}

function PlayerSelection(){
    let PlayerChoice = prompt('Enter your pick: ').toLowerCase(); //converts the user's input to lowercase
    return PlayerChoice; //returns whatever the player inputs
}

const rockbtn = document.getElementById('rock');
const paperbtn = document.getElementById('paper');

