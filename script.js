function getComputerChoice(){
    const choices = ['Rock', 'Paper', 'Scissors']
    const randomIndex = Math.floor(Math.random * (choices.length));
    const computerChoice = randomIndex[choices]
}