'use strict';

//1- change the background color of the page to green whenever the player wins the game 
    //learn how to manipulat the CSS styles
let  secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;


document.querySelector('.check').addEventListener('click' , function(){
    const guess = Number(document.querySelector('.guess').value);
    //console.log(guess ,typeof  guess);

    //when there is no input
    if (!guess){
        document.querySelector('.message').textContent = 'No number!';

    //when player wins
    }else if (guess === secretNumber ){ 
        document.querySelector('.message').textContent = 'Correct Number!';  
        document.querySelector('.number').textContent = secretNumber;
        //select the body of the whole page first
        //selecting the element that we want to manipulate using the element name not the class or id
        //because there is one body , so it will work just fine 
        //.style means access the style properties of the element
        //.backgroundColor the name of the property that we want to change.
        // in js all the properties that has two word with (-) will simply adopt the camel case notation.
        document.querySelector('body') .style.
        backgroundColor = '#60b347';

        //increase the width of the number
        //whenever we manipulating a style we always specify a string .
        document.querySelector('.number').style.width = '30rem';

        //the 
    //when guess is too high
    } else if (guess > secretNumber){
        if (score > 1){
            document.querySelector('.message').textContent = 'Too high!';  
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = 'You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    
    //when gues sis too low
    }else if (guess < secretNumber){
        if (score > 1){
            document.querySelector('.message').textContent = 'Too Low!';  
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = 'You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
        
    }
  

});

document.querySelector('.again').addEventListener('click',function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.message').textContent = 'Start guessing...'; 
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent ='?';
    document.querySelector('.guess').value ='';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    
    
    



});

//////////////////////////////////
//Coding Challenge #1

/*
Implement a game rest functionality , 
so that the player can make a new guess!Here is how :
1- select the elemnt with the 'again' class and attach a click event handler
2- in the handler function, restore initial values of the score and secretNumber variables
3- restore the initial condition of the message, number , score and guess input field
4-Also restore the original background color(#222) and number width(15 rem)

Good Luck.


*/