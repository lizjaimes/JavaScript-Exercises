const playerMove = "";
    
let isAutoPlaying = false;
let intervalID;

function autoPlay() {
    if (!isAutoPlaying) {
     intervalID = setInterval(() => {
            const playerMove = pickComputerMove();
            playGame(playerMove);
        }, 1000);
        isAutoPlaying = true;

    } else {
        //setInterval can return a number or id and use that number to stop the interval. save the id in a variable and calling clearInterval
        clearInterval(intervalID);
        isAutoPlaying = false;
    }
    
}

document.body.addEventListener('keydown', (event)=> {
    if (event.key === 'r'){
        playGame('rock');
        //console.log(event.key);
    }
    else if (event.key === 'p') {
        playGame('paper');
        //console.log(event.key);
    }
    else if (event.key === 's') {
        playGame('scissors');
        //console.log(event.key);
    }
});


function playGame(playerMove)
{
   
}
let computerMove = '';
function pickComputerMove()
{
    const randomNumber = Math.random();

    
    if (randomNumber > 0 && randomNumber <1/3)
    {
        computerMove = 'rock';
    }

}

localStorage.setItem('', JSON.stringify());

// updateScoreElement();

alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}

Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);

document.querySelector('js-moves').innerHTML = updateScoreElement(); {
   ` You <img src="Images/${playerMove}-emoji.png" class="move-icon"> <img src="Images/${computerMove}-emoji.png" class="move-icon"> Computer`
}
