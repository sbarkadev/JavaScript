'use strict';

//refactoring basically means restruct the code but without changing how it works
//sometimes a good refactoring technique is by creating functions
let  secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
//store the high score in a variable
let hightscore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click' , function(){
    const guess = Number(document.querySelector('.guess').value);
   
    if (!guess){
        displayMessage('No number!');

    //when player wins
    }else if (guess === secretNumber ){ 
        displayMessage('Correct Number!');  
        document.querySelector('.number').textContent = secretNumber;
   
        document.querySelector('body') .style.
        backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';
        if(score > hightscore){
            hightscore = score;
            document.querySelector('.highscore').textContent = hightscore;
        }
        
    //when guess is wrong
    }else if (guess !== secretNumber){
        if (score > 1){
            displayMessage( guess > secretNumber ? 'Too high!' : 'Too Low!');  
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            displayMessage('You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    } 
});

document.querySelector('.again').addEventListener('click',function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage('Start guessing...'); 
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent ='?';
    document.querySelector('.guess').value ='';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    
    
    



});