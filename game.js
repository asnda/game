const player1ScoreElement = document.getElementById("player-1-score");
const player2ScoreElement = document.getElementById("player-2-score");
const title = document.getElementById("title").querySelector("h1");

// set rounds and initial scores 
const MAX_ROUNDS = 3;

let round = 1;
let player1Score = 0;
let player2Score = 0;

function rollTheDice(){
// if round number is greater than MAX_ROUNDS(3) it reset the game 
    if (round > MAX_ROUNDS) {
        reset();
    }

    let diceNum1 = document.querySelector(".img1");
    let diceNum2 = document.querySelector(".img2");

 // changes picture source to gif 
    diceNum1.setAttribute("src","./images/diceroll.gif")
    diceNum2.setAttribute("src","./images/diceroll.gif")

    // let result = document.querySelector('h1')
    setTimeout(() => {
        let randomNumber1 = Math.floor(Math.random()*6)+1;
        let randomNumber2 = Math.floor(Math.random()*6)+1;
        player1Score += randomNumber1;
        player2Score += randomNumber2;

        title.innerHTML = "Rolling...";

        diceNum1.setAttribute('src','./images/'+randomNumber1+'.png');
        diceNum2.setAttribute('src','./images/'+randomNumber2+'.png');

        player1ScoreElement.innerHTML = player1Score;
        player2ScoreElement.innerHTML = player2Score;

        round += 1;
        if (round > MAX_ROUNDS) {
            deterMineWinner();
            return;
        }

        title.innerHTML = "Play Game";
    
        //determine the winner
        if (randomNumber1 == randomNumber2){
            result.innerHTML = "Draw!"
        }
        else if(randomNumber1<randomNumber2){
            result.innerHTML = ("player2 WINS!");
        }
        else{
            result.innerHTML = ("player1 WINS!");
        }

    },1500);
}

