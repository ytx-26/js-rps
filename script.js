function getComputerChoice(){
    const choices = ['Rock', 'Paper', 'Scissors']
    const randomIndex = Math.floor(Math.random() * choices.length);
    let computerChoice = choices[randomIndex];
    return computerChoice; //returns whatever the computer decides 
}

function PlayerSelection(){
    let PlayerChoice = prompt('Enter your pick: ').toLowerCase(); //converts the user's input to lowercase
    return PlayerChoice; //returns whatever the player inputs
}

let PlayerChoice = PlayerSelection();
let computerChoice = getComputerChoice();
let score = 1;

console.log(PlayerChoice);
console.log(computerChoice);


