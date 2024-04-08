function getComputerChoice(){
    const choices = ['Rock', 'Paper', 'Scissors']
    const randomIndex = Math.floor(Math.random * (choices.length));
    let computerChoice = randomIndex[choices];
    return computerChoice;
}
const CompChoice = getComputerChoice() //calls the function and stores the result in CompChoice
console.log(CompChoice);