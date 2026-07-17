let randomNumber = parseInt(Math.random()*10+1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess=[]
let numGuess=1;

let playGame=true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess=parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }
    else if(guess<1){
        alert('Please enter number greater than equal to 1')
    }
    else if(guess>10){
        alert('Please enter number less than 10')
    }
    else{
        prevGuess.push(guess)
        if(numGuess==11){
            displayGuess(guess)
            displayMessage(`Game Over. The Random Number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess==randomNumber){
        displayMessage(`You guessed it right`)
        endGame()
    }
    else if(guess<randomNumber){
        displayMessage(`Number is too Low`)
    }
    else{
        displayMessage(`Number is too High`)
    }

}

function displayGuess(guess){
    userInput.innerHTML=''
    guessSlot.textContent = prevGuess.join(", ");
    numGuess++
    remaining.innerHTML=`${11-numGuess}`
}

function displayMessage(displayMessage){
    lowOrHigh.innerHTML=`<h2>${displayMessage}</h2>`
}

function endGame(){
    userInput.value=''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML='<h2 id="newGame">Start New Game</h2>'
    startOver.appendChild(p)
    playGame=false
    newGame()
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        randomNumber = parseInt(Math.random()*10+1)
        prevGuess=[]
        numGuess=1
        guessSlot.innerHTML=''
        lowOrHigh.innerHTML=""
        remaining.innerHTML=`${11-numGuess}`
        userInput.value=""
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame=true
    })
}


