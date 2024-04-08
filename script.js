function getComputerChoice(){
    const choices = ['Rock', 'Paper', 'Scissors']
    const randomIndex = Math.floor(Math.random * (choices.length));
    let computerChoice = randomIndex[choices];
    return computerChoice;
}

function PlayerSelection(){
    let PlayerChoice = prompt('Enter your pick: ').toLowerCase;
    return PlayerChoice;
}

let PlayerChoice = PlayerSelection()
let computerChoice = getComputerChoice()



