//Computer choice 
function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors']
    const randomIndex = Math.floor(Math.random() * choices.length);
    let computerChoice = choices[randomIndex];
    return computerChoice; //returns whatever the computer decides 
}
//Logic
function getPlayerChoice(choice){
    const computerChoice = getComputerChoice();

    if (choice===computerChoice){
        console.log('draw');
    } else if(
        (choice==='rock'&& computerChoice==='scissors') ||
        (choice==='paper'&& computerChoice==='rock') ||
        (choice==='scissor'&& computerChoice==='paper')
    ){
        console.log('win')
    }
    else{
        console.log('lost')
    }
}
//Referencing html to js 
const rockbtn = document.getElementById('rock');
const paperbtn = document.getElementById('paper');
const scissorbtn = document.getElementById('scissors');

console.log(rockbtn);
console.log(paperbtn);
console.log(scissorbtn);


//Passes on parameters after a button has been clicked 
rockbtn.addEventListener('click', function() {
    getPlayerChoice('rock');//if they click rock button a function will run where 'rock' is the para
});

paperbtn.addEventListener('click', function() {
    getPlayerChoice('paper');
});

scissorbtn.addEventListener('click', function() {
    getPlayerChoice('scissors');
});
