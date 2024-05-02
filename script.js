let player1Score = document.getElementById('player1score');
let player2Score = document.getElementById('player2score');
let result = document.querySelector('h1')
const playButton = document.getElementById("play-btn");

const maxRounds = 3;

let round = 0;
let player1 = 0;
let player2 = 0;

let popup = document.getElementById("popup");

// open popup box 
function openPopup() {
    popup.classList.add("open-popup");
}

function closePopup() {
    popup.classList.remove("open-popup");
}

function rollTheDice(){
    let diceNum1 = document.querySelector(".img1");
    let diceNum2 = document.querySelector(".img2");

    diceNum1.setAttribute("src","diceroll.gif")
    diceNum2.setAttribute("src","diceroll.gif")

    setTimeout(() => {
        let randomNumber1 = Math.floor(Math.random()*6)+1;
        let randomNumber2 = Math.floor(Math.random()*6)+1;
        player1 += randomNumber1;
        player2 += randomNumber2;

        diceNum1.setAttribute('src','./images/'+randomNumber1+'.png');
        diceNum2.setAttribute('src','./images/'+randomNumber2+'.png');

        player1Score.innerHTML = player1;
        player2Score.innerHTML = player2;

        // check gore ke round mang 
        round += 1;
        if (round == maxRounds) {
            if (player1 == player2) {
                result.innerHTML = "Draw!";
            } else if (player1 < player2) {
                result.innerHTML =document.querySelector("p.Player2").innerHTML + " wins!";
            } else {
                result.innerHTML = document.querySelector("p.Player1").innerHTML + " wins!";
            }
            disablePlayButton();
            return;
        }


    },2500);
}




//Player Names

function editNames() {
  player1Name = prompt("Change Player1 Name");
  player2Name = prompt("Change Player2 Name");

  if (player1Name.length < 1 || player2Name.length < 1) {
    alert("please enter valid name");
    return;
  }
  document.querySelector("p.Player1").innerHTML = player1Name;

  document.querySelector("p.Player2").innerHTML = player2Name;
}


function reset() {
    result.innerHTML = "Play Game";
    

    round = 0;
    player1 = 0;
    player2 = 0;
    player1Score.innerHTML = player1;
    player2Score.innerHTML = player2;

    playButton.disabled = false;
    playButton.style.cursor = "pointer";
    playButton.style.opacity = 1;
}

function disablePlayButton() {
    playButton.disabled = true;
    playButton.style.cursor = "not-allowed";
    playButton.style.opacity = 0.1;
}