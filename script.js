function getComputerChoice(){
    const choices = ['Rock', 'Paper', 'Scissors']
    const randomIndex = Math.floor(Math.random * (choices.length));
    let computerChoice = randomIndex[choices];
    return computerChoice;
}

console.log(computerChoice);