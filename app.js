let min = 1,
    max = 10,
    winningNum = getrandomnum(min,max),
    guessesLeft = 3;

const game = document.querySelector('#game'),
        minNum = document.querySelector('.min'),
        maxNum = document.querySelector('.max'),
        guessBtn=document.querySelector('#guess-btn'),
        guessInput=document.querySelector('#guess-input'),
        message=document.querySelector('.message')

minNum.textContent=min;
maxNum.textContent=max;

game.addEventListener('click', function(e){
    if(e.target.className==="Again"){
        window.location.reload();
    }
});

guessBtn.addEventListener('mousedown', function(){
    let guess = parseInt(guessInput.value);
    if(isNaN(guess)||guess<min||guess>max){
        setMessage('pls enter a number between '+min+' and ' +max ,'red');
    }
    if (guess===winningNum) 
    { 
        gameover(true,winningNum+" is correct, you win");
        // guessInput.disabled=true;
        // guessInput.style.borderColor ='green';
        // setMessage(winningNum+" is correct, you win",'green')
    }
    else{
        guessesLeft -= 1;
        if(guessesLeft === 0 ){
            gameover(false,"you lost, right number was "+winningNum)
            // guessInput.disabled=true;
            // guessInput.style.borderColor ='red';
            // setMessage("you lost, right number was "+winningNum,'red')
        }
        
        else{
            guessInput.style.borderColor ='red';
            guessInput.value=''
            setMessage(guess+' is not right, and you have '+guessesLeft+' guesses Left','red')

        }
    }

});

function gameover(won, msg){
    let color;
    won===true?color="green":color="red";
    guessInput.disabled=true;
    guessInput.style.borderColor = color;
    message.style.color=color;
    setMessage(msg)

    guessBtn.value='Again';
    guessBtn.className+='Again'
}

function getrandomnum(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

function setMessage(msg, color){
    message.style.color= color;
    message.textContent=msg;
}