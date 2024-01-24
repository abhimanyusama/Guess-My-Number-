'use strict';
let secretNumber = Math.trunc(Math.random()*20)+1;
let score =20;
let highscore=0;
document.querySelector('.number').textContent ='?';

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    //when there is no input
    if (!guess) 
    {
        document.querySelector('.message').textContent ='Empty';
    }
    //input is less
    else if (guess < secretNumber )
    {   
        if(score>1)
        {
            document.querySelector('.message').textContent='too low';
            score--;
            document.querySelector('.score').textContent=score;
        }
        else
        {
            document.querySelector('.message').textContent= "you lost";
            document.querySelector('.score').textContent=0;
        }
        
    }
    //input is high
    else if (guess > secretNumber )
    {
        if(score>1)
        {
            document.querySelector('.message').textContent='too high';
            score--;
            document.querySelector('.score').textContent=score;
        }
        else
        {
            document.querySelector('.message').textContent= "you lost";
            document.querySelector('.score').textContent=0;
        }
    }
    //when input matches
    else if (guess === secretNumber)
    {
        document.querySelector('.message').textContent='WINNER WINNER CHICKEN DINNER';
        document.querySelector('.score').textContent=score;
        if(score>highscore)
        {
            highscore = score;
        }    
        document.querySelector('.highscore').textContent = highscore;
        document.querySelector('body').style.backgroundColor='green';
        document.querySelector('.number').style.width='30rem';
    }
})
// if again is clicked 
document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random()*20)+1;
    score =20;
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent ='?';
    document.querySelector('.message').textContent='Start guessing ....';
    document.querySelector('body').style.backgroundColor='black';
    document.querySelector('.number').style.width='15rem';
    document.querySelector('.guess').value='';
    
})