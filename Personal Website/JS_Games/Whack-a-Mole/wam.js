//Things to fix:
//Make the sound mutable

const square = document.querySelectorAll(".square");
const mole = document.querySelectorAll(".mole");
const timeLeft = document.querySelector("#time-left");
const round = document.querySelector("#round");
let score = document.querySelector("#score");
let accuracyDisp = document.querySelector("#accuracy");
let timerId;
let lastPosition = 0;
let result = 0;
let currentTime = timeLeft.textContent;
let difficulty = 1000;
let hitCount = 0;
let moveMoleTimerId = null;
let dispRound = round.textContent;
let gameDelay = ["Ready", "Set", "Whack!!"];
let timeIt;
let pointsThisRound;
let moleMoved = 0;
let muted = false;

//This function randomly chooses a hole for the mole to pop out of
function randomSquare() {
//    console.log("randomSquare has been called");
    moleMoved++;
    console.log(`moleMoved is ${moleMoved}`);
    let randomPosition = square[Math.floor(Math.random() * 9)];
    square.forEach(className => {
        //Don't allow mole to pop up in the same hole twice
        if(randomPosition.id == lastPosition){
//            console.log("Same as last time");
            randomPosition = square[Math.floor(Math.random() * 9)];
        }
        className.classList.remove("mole");
    })
    lastPosition = randomPosition.id;
//    console.log(randomPosition.id);
    randomPosition.classList.add("mole");
    hitPosition = randomPosition.id;
    hitCount = 0;
}

//For loop to check if the mole has been 'whacked' and update the score if you got a hit
square.forEach(id => {
    id.addEventListener("mousedown", () => {
//        console.log(`hitCount is ${hitCount}`);
//        console.log(`id.id is ${id.id} and hitPosition is ${hitPosition}`);
        if(id.id === hitPosition && hitCount == 0){
            hitCount++;
            result++;
            pointsThisRound++;
            console.log(`pointsThisRound is ${pointsThisRound}`);
            score.textContent = result;
            highLight(id.id);
            setTimeout(function() {
                document.getElementById(`${id.id}`).style.border = "5px solid #000";
            }, 500);
        }
    })
})

//This function determines the time between mole moves
function moveMole() {
//    console.log("moveMole has been called");
    moveMoleTimerId = setInterval(randomSquare, difficulty);
//    console.log(`time betwen mole pops is ${difficulty}`);  
    difficulty *= 0.9;
    ++dispRound;
    round.textContent = dispRound;
}

//This functoin starts the count down timer when the round starts
function countDown() {
//    console.log("countDown has been called");
    if(moleMoved != 0){
        accuracy = Math.round(pointsThisRound / moleMoved * 100);
        console.log(`accuracy is ${accuracy}`);
    }
    accuracyDisp.textContent = accuracy;
    currentTime--;
    timeLeft.textContent = currentTime;
    document.getElementById("time-left-prog").value = currentTime;

    //When there are 10 second left on the timer turn the number red
    if(currentTime <= 10){
        document.getElementById("time-left").style.color = "#f00";
    }

    //When timer runs out display result, stop the mole and timer, and reset the time and timer color
    if(currentTime < 0) {
        clearInterval(timerId);
        stopMole();
        if(accuracy < 50){
            alert(`Game over!!! \nYou only whacked ${pointsThisRound}/${moleMoved} moles this round and your accuracy was below 50%. \nBetter luck next time!!!`);
//            console.log("GAME OVER!!!");
            location.reload();
        }else{
            if(confirm(`Round Over!! \n- Your total score is ${result}\n- You scored ${pointsThisRound}/${moleMoved} points this round \n- Your accuracy this round was ${accuracy}%`)){
                timeLeft.textContent = 60;
                currentTime = 60;
                document.getElementById("time-left").style.color = "#000";
                getReady()
            } else {
                location.reload();
            }
        }
    }
}

//This function gets called when a new game is started
function startGame() {
//    console.log("startGame has been called");
    moleMoved = 0;
    accuracy = 0;
    pointsThisRound = 0;
    document.getElementById("cd").innerHTML = "";
    clearInterval(timeIt);
    timerId = setInterval(countDown, 1000);
    moveMole();
    document.getElementById("resetGame").disabled = false;
}

//This funciton is called to stop th emole from moving when the round is over
function stopMole() {
    clearInterval(moveMoleTimerId);
}

//This function gets called when the mole has been whacked
function highLight(id) {
//    console.log(`${id} will be turned red`);
    document.getElementById(`${id}`).style.border = "5px solid #f00";
    if(!muted){
        document.getElementById("whackSound").play();
    }
}

//This function is called when the reset button is clicked
function restart() {
    location.reload();
}

//This function gets called when the 'start game' button is pressed, or a new round is started
function getReady() {
    let itr = 0;
//    gameDelay = 0;
//    console.log("getReady has been called");
//    timeIt = setInterval(startGame, 3000);
    document.getElementById("startGame").disabled = true;
    let count = setInterval(function() {
        document.getElementById("cd").innerHTML = gameDelay[itr];
//        console.log(`gameDelay is ${gameDelay[itr]}`);
        itr++;    
        if(itr > 3){
            clearInterval(count);
            startGame();
        }
    }, 1000);
}

//function mute() {
//    document.getElementById("whackSound").muted;
//    muted = true;
//    console.log("Muted");
//}

function sound() {
    let sound = document.getElementById("soundBtn");
    if(muted){
        muted = false;
//        console.log("Unmuted");
        sound.classList.toggle("fa-volume-up");
    } else {
        muted = true;
//        console.log("Muted");
        sound.classList.toggle("fa-volume-mute");
    }
}