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

let score = 1;
let PlayerChoice = PlayerSelection();
let ComputerChoice = getComputerChoice();

for (let i = 0; i<5; i++){
    console.log("Your pick: ", PlayerChoice)

    if (computerChoice===PlayerChoice){
        console.log('Draw!!');
    } else if (
    (PlayerChoice ==='rock' && ComputerChoice==='scissors')
    (PlayerChoice ==='paper' && ComputerChoice==='rock')
    (PlayerChoice ==='scissors' && ComputerChoice==='paper')){
        console.log('You win!!')
    }
    else{
        console.log('You lose')
    }
}


