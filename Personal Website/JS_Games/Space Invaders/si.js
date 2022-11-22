const grid = document.querySelector('.grid');
const scoreDisplay = document.querySelector('#score');
let roundDisplay = document.querySelector("#round");
let resultDisplay = document.querySelector("#result");
let currentShooterIndex = 202
let width = 15
let direction = 1
let invadersId
let goingRight = true
let aliensRemoved = []
let score = 0
let invaderSpeed = 800;
let round = 0;
let numOfSquares = 225; //15x15 game board
let shotsTaken = 0;
let muted = false;

for (let i = 0; i < numOfSquares; i++) {
    const square = document.createElement('div');
    grid.appendChild(square);
}

const squares = Array.from(document.querySelectorAll('.grid div'));
squares[currentShooterIndex].classList.add('shooter');
roundDisplay.innerHTML = round;
document.getElementById("startGame").focus();

let alienInvaders = [0,1,2,3,4,5,6,7,8,9,15,16,17,18,19,20,21,22,23,24,30,31,32,33,34,35,36,37,38,39];
  
  function draw() {
//    console.log("draw() has been called");
    for(let i = 0; i < alienInvaders.length; i++) {
        if(!aliensRemoved.includes(i)) {
        squares[alienInvaders[i]].classList.add('invader')
        }
    }
//    console.log("End of draw()");
}

function startGame() {
    round++;
    roundDisplay.innerHTML = round;
    resultDisplay.innerHTML = "";
    //    console.log("startGame() has been called");
    document.addEventListener('keydown', shoot);
    document.addEventListener('keydown', moveShooter);
    invadersId = setInterval(moveInvaders, invaderSpeed);
    document.getElementById("startGame").disabled = true;
}

function nextRound() {
//    console.log("nextRound() has been called");
//    for(let i = 0; i < alienInvaders.length; i++) {
//        if(squares[alienInvaders[i]].classList.contains("invader")){
//            console.log(`squares (${i}) contains 'invader'`);
//            squares[alienInvaders[i]].classList.remove('invader');
//        }
//    }
    alienInvaders = [0,1,2,3,4,5,6,7,8,9,15,16,17,18,19,20,21,22,23,24,30,31,32,33,34,35,36,37,38,39];
    invaderSpeed *= .9;

}

function remove() {
//    console.log("remove() has been called");
    for(let i = 0; i < alienInvaders.length; i++) {
        if(squares[alienInvaders[i]].classList.contains("invader")){
//            console.log(`squares (${i}) contains 'invader'`);
            squares[alienInvaders[i]].classList.remove('invader');
        } else{
//            console.log(`square (${i}) does not contain 'invader'`);
        }
    }
}

function moveShooter(e) {
//    console.log("moveShooter() has been called");
    squares[currentShooterIndex].classList.remove('shooter');
    switch(e.key) {
        case 'ArrowLeft':
        if (currentShooterIndex % width !== 0) currentShooterIndex -=1;
        break;
        case 'ArrowRight' :
        if (currentShooterIndex % width < width -1) currentShooterIndex +=1;
        break;
    }
    squares[currentShooterIndex].classList.add('shooter');
}

function moveInvaders() {
//    console.log("moveInvaders() has been called");
    const leftEdge = alienInvaders[0] % width === 0;
    const rightEdge = alienInvaders[alienInvaders.length - 1] % width === width -1;
    remove();

    if(rightEdge && goingRight) {
        for (let i = 0; i < alienInvaders.length; i++) {
            alienInvaders[i] += width +1;
            direction = -1;
            goingRight = false;
        }
  }

    if(leftEdge && !goingRight) {
        for (let i = 0; i < alienInvaders.length; i++) {
            alienInvaders[i] += width -1;
            direction = 1;
            goingRight = true;
        }
    }

    for(let i = 0; i < alienInvaders.length; i++) {
//        console.log(`alienIndavers[i] from moveInvaders is ${alienInvaders[i]}`);
        alienInvaders[i] += direction;
    }

    draw()

    if(squares[currentShooterIndex].classList.contains('invader', 'shooter')) {
        console.log("classList contains 'invader' and 'shooter'");
//        scoreDisplay.innerHTML = 'GAME OVER';
//        clearInterval(invadersId);
//        document.removeEventListener('keydown', shoot);
//        document.removeEventListener('keydown', moveShooter);
//        document.getElementById("startGame").textContent = "Play Again";
//        document.getElementById("startGame").disabled = false;
//        document.getElementById("startGame").focus();
        location.reload();
        alert(`Game Over!!! You made it to round ${round} and scored ${score} points`);
    }

    for(let i = 0; i < alienInvaders.length; i++) {
//        console.log(`i is ${i} and alienInvaders.lenth is ${alienInvaders.length}`)
        if(alienInvaders[i] > numOfSquares) {
            console.log(`alienInvaders[i] is ${alienInvaders[i]}`)
//            scoreDisplay.innerHTML = 'GAME OVER';
//            console.log(`game is over because alienInvaders[i](${alienInvaders[i]}) is greater //than squares.length(${squares.length}), but alienInvaders is ${alienInvaders}`);
//            clearInterval(invadersId);
//            document.removeEventListener('keydown', shoot);
//            document.removeEventListener('keydown', moveShooter);
//            document.getElementById("startGame").textContent = "Play Again";
//            document.getElementById("startGame").disabled = false;
//            document.getElementById("startGame").focus();
            location.reload();
            alert(`Game Over!!! You made it to round ${round} and scored ${score} points`);
        }
    }

    if(aliensRemoved.length === alienInvaders.length) {
        aliensRemoved = [];
        console.log("You won");
        scoreDisplay.innerHTML = score;
        resultDisplay.innerHTML = `YOU WON!!! Your accuracy is ${Math.round((score / shotsTaken) * 100)}%`;
        clearInterval(invadersId);
        document.removeEventListener('keydown', shoot);
        document.removeEventListener('keydown', moveShooter);
        nextRound();
        document.getElementById("startGame").textContent = "Next Round";
        document.getElementById("startGame").disabled = false;
        document.getElementById("startGame").focus();
//        alert(`You scored ${score} points`);
    }
}
//invadersId = setInterval(moveInvaders, invaderSpeed)

function shoot(e) {
//    console.log("shoot() has been called");
    let laserId;
    let currentLaserIndex = currentShooterIndex;
    function moveLaser() {
//        console.log("moveLaser() from shoot() has been called");
        if(currentLaserIndex >= 0) {
//            console.log(currentLaserIndex);
            squares[currentLaserIndex].classList.remove('laser');
            currentLaserIndex -= width;
            if(currentLaserIndex >= 0) {
                squares[currentLaserIndex].classList.add('laser');
            }  

            if(squares[currentLaserIndex].classList.contains('invader') && currentLaserIndex >= 0) {
                if(currentLaserIndex >= 0) {
                    squares[currentLaserIndex].classList.remove('laser');
                }
                squares[currentLaserIndex].classList.remove('invader');
                squares[currentLaserIndex].classList.add('boom');
                if(!muted){
                    document.getElementById("explosion").play();
                }
//                console.log("Boom!!!");
//                console.log('removed laser and invader');

                setTimeout(()=> squares[currentLaserIndex].classList.remove('boom'), 300);
                clearInterval(laserId);

                const alienRemoved = alienInvaders.indexOf(currentLaserIndex);
                aliensRemoved.push(alienRemoved);
                score++;
                scoreDisplay.innerHTML = score;
//                console.log(aliensRemoved);
            }
        }
    }
    switch(e.key) {
        case 'w':
            document.getElementById("shoot").load();
            laserId = setInterval(moveLaser, 100);
//            console.log("pew");
            if(!muted){
                document.getElementById("shoot").play();
            }
            shotsTaken++;
            console.log(shotsTaken);
            break;
        case "W":
            document.getElementById("shoot").load();
            laserId = setInterval(moveLaser, 100);
//            console.log("pew");
            if(!muted){
                document.getElementById("shoot").play();
            }
            shotsTaken++;
            console.log(shotsTaken);
            break;
        }
}

function resetGame() {
//    for(let i = 0; i < 10; i++){
//    }
//    alienInvaders = [0,1,2,3,4,5,6,7,8,9,15,16,17,18,19,20,21,22,23,24,30,31,32,33,34,35,36,37,38,39];
}

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