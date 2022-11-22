document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll(".grid div");
    const scoreDisplay = document.querySelector("span");
    const startBtn = document.querySelector("#startGame");
    document.getElementById("startGame").focus();

    const width = 10;
//    let currentIndex = 0; //So first div in our grid
    let appleIndex = 99;  //So first div in our grid
    let currentSnake = [2, 1, 0]; //So the div in the grid being 0 (Snake's head), and the 2 being the end (Snake's tail) and all 1's being the body from now on.
    let direction = 1;
    let score = 0;
    let speed = 0.9;
    let intervalTime = 0;
    let interval = 0;
    let dirArr = [];
    let lostReason;
    let lost = false;

    //Start and restart the game
    function startGame() {
        currentSnake.forEach(index => squares[index].classList.remove("snake"));
        squares[appleIndex].classList.remove("apple");
        clearInterval(interval);
        score = 0;
        randomApple();
        direction = 1;
        scoreDisplay.innerText = score;
        intervalTime = 1000;
        currentSnake = [2, 1, 0];
//        currentIndex = 0;
        currentSnake.forEach(index => squares[index].classList.add("snake"))
        interval = setInterval(moveOutcomes, intervalTime);
        document.getElementById("gridId").style.border = "3px solid #000";
        document.getElementById("startGame").disabled = true;
    }

    //Deals with all the move outcomes of the snake
    function moveOutcomes() {
        dirArr.push(direction);

        //If snake hits bottom wall
        if(currentSnake[0] + width >= (width * width) && direction === width){
            console.log("bottom");
            document.getElementById("gridId").style.borderBottom = "6px solid red";
            document.getElementById("startGame").disabled = false;
            document.getElementById("startGame").focus();
            lost = true;
            lostReason = "hit the bottom wall";
            setTimeout(alertMsg, 1000);
            return clearInterval(interval);
        }

        //If snake hits right wall
        if(currentSnake[0] % width === width - 1 && direction === 1){
            console.log("right");
            document.getElementById("gridId").style.borderRight = "6px solid red";
            document.getElementById("startGame").disabled = false;
            document.getElementById("startGame").focus();
            lost = true;
            lostReason = "hit the right wall";
            setTimeout(alertMsg, 1000);
            return clearInterval(interval);
        }

        //If snake hits left wall
        if(currentSnake[0] % width === 0 && direction === -1){
            console.log("left");
            document.getElementById("gridId").style.borderLeft = "6px solid red";
            document.getElementById("startGame").disabled = false;
            document.getElementById("startGame").focus();
            lost = true;
            lostReason = "hit the left wall";
            setTimeout(alertMsg, 1000);
            return clearInterval(interval);
        }

        //If snake hits top wall
        if(currentSnake[0] - width < 0 && direction === -width){
            console.log("top");
            document.getElementById("gridId").style.borderTop = "6px solid red";
            document.getElementById("startGame").disabled = false;
            document.getElementById("startGame").focus();
            lost = true;
            lostReason = "hit the top wall";
            setTimeout(alertMsg, 1000);
            return clearInterval(interval);
        }

        //If snake runs into itself
        if(squares[currentSnake[0] + direction].classList.contains("snake")){
            console.log("I ate myself");
            squares[currentSnake[0] + direction].style.backgroundImage = "url('explosion.jpg')";
            squares[currentSnake[0] + direction].style.backgroundSize = "contain";
            squares[currentSnake[0] + direction].style.backgroundRepeat = "no-repeat";
            document.getElementById("startGame").disabled = false;
            document.getElementById("startGame").focus();
            lost = true;
            lostReason = "the snake ran into itself";
            setTimeout(alertMsg, 1000);
            return clearInterval(interval);
        }
        
        const tail = currentSnake.pop(); //Removes last bit of the array and shows it
        squares[tail].classList.remove("snake"); // Removes class from the tail
        currentSnake.unshift(currentSnake[0] + direction); //Gives direction to the head of the array

        //Snake going right
        if(direction === 1) {
            for(let i = 0; i < currentSnake.length; i++){
                squares[currentSnake[i]].style.backgroundImage = "url('snakeSkin.jpg')";
                squares[currentSnake[i]].style.backgroundSize = "contain";
            }
            squares[currentSnake[0]].style.backgroundImage = "url('snakeHeadRight.jpg')";
            squares[currentSnake[0]].style.backgroundSize = "contain";
        }

        //Snake going left
        if(direction === -1) {
            for(let i = 0; i < currentSnake.length; i++){
                squares[currentSnake[i]].style.backgroundImage = "url('snakeSkin.jpg')";
                squares[currentSnake[0]].style.backgroundSize = "contain";
            }
            squares[currentSnake[0]].style.backgroundImage = "url('snakeHeadLeft.jpg')";
            squares[currentSnake[0]].style.backgroundSize = "contain";
        }

        //Snake going down
        if(direction === 10) {
            for(let i = 0; i < currentSnake.length; i++){
                squares[currentSnake[i]].style.backgroundImage = "url('snakeSkin.jpg')";
                squares[currentSnake[0]].style.backgroundSize = "contain";
            }
            squares[currentSnake[0]].style.backgroundImage = "url('snakeHeadDown.jpg')";
            squares[currentSnake[0]].style.backgroundSize = "contain";
        }

        //Snake going up
        if(direction === -10) {
            for(let i = 0; i < currentSnake.length; i++){
                squares[currentSnake[i]].style.backgroundImage = "url('snakeSkin.jpg')";
            }
            squares[currentSnake[0]].style.backgroundImage = "url('snakeHeadUp.jpg')";
            squares[currentSnake[0]].style.backgroundSize = "contain";
            squares[currentSnake[currentSnake.length - 1] + direction + 10].style.backgroundImage = "url('snakeTailUp.jpg')";
        }

        squares[currentSnake[0]].classList.add("snake");
    
        //Deals with the snake getting the apple
        if(squares[currentSnake[0]].classList.contains("apple")) {
            squares[currentSnake[0]].classList.remove("apple");
            squares[tail].classList.add("snake");
/**********/console.log(`new tail added at ${tail}`);
/**********/console.log(currentSnake);
            currentSnake.push(tail);
            randomApple()
            score++;
            scoreDisplay.textContent = score;
            clearInterval(interval);
            intervalTime = intervalTime * speed;
            interval = setInterval(moveOutcomes, intervalTime);
        }

        //Removes the tail from the snake after it has moved
        for(let i = 0; i < squares.length; i++){
            if(!squares[i].classList.contains("snake") && !squares[i].classList.contains("apple")){
                squares[i].style.backgroundImage = "none";
                squares[i].style.backgroundColor = "#aaa";
            } else if(squares[i].classList.contains("apple")){
                squares[i].style.backgroundImage = "url('apple.jpg')";
            }
        }

        //Snake tail going right
        if(dirArr[(dirArr.length + 1) - currentSnake.length] === 1) {
            squares[currentSnake[currentSnake.length -2]].style.backgroundImage = "url('snakeSkin.jpg')";
            squares[currentSnake[currentSnake.length -1]].style.backgroundImage = "url('snakeTailRight.jpg')";
        }

        //Snake tail going left
        if(dirArr[(dirArr.length + 1) - currentSnake.length] === -1) {
            squares[currentSnake[currentSnake.length -2]].style.backgroundImage = "url('snakeSkin.jpg')";
            squares[currentSnake[currentSnake.length -1]].style.backgroundImage = "url('snakeTailLeft.jpg')";
        }
        
        //Snake tail going down
        if(dirArr[(dirArr.length + 1) - currentSnake.length] === 10) {
            squares[currentSnake[currentSnake.length -2]].style.backgroundImage = "url('snakeSkin.jpg')";
            squares[currentSnake[currentSnake.length -1]].style.backgroundImage = "url('snakeTailDown.jpg')";
        }
        
        //Snake tail going up
        if(dirArr[(dirArr.length + 1) - currentSnake.length] === -10) {
            squares[currentSnake[currentSnake.length -2]].style.backgroundImage = "url('snakeSkin.jpg')";            
            squares[currentSnake[currentSnake.length -1]].style.backgroundImage = "url('snakeTailUp.jpg')";
        }
    }

    //Add New Apple once old was is eaten
    function randomApple() {
        do {
            appleIndex = Math.floor(Math.random() * squares.length);
        } while(squares[appleIndex].classList.contains("snake"))
        squares[appleIndex].classList.add("apple");
//        let apple = document.getElementsByClassName("apple");
//        for(let i = 0; i < apple)
//        console.log(appleIndex);
}

    //Assign functions to keycodes
    function control(e) {
        if(e.keyCode === 39) {
            direction = 1; //If the right arrow is pressed on the keyboard, the snake will go right
        } else if(e.keyCode === 38) {
            direction = -width;  //If the up arrow is pressed on the keyboard, the snake will go back 10 divs, appearing to go up
        } else if(e.keyCode === 37) {
            direction = -1; //If the left arrow is pressed on the keyboard, the snake will go left
        } else if(e.keyCode === 40) {
            direction = +width;  //If the down arrow is pressed on the keyboard, the snake will go forward 10 divs, appearing to go down
        }
    }

    //Alert message
    function alertMsg() {
        if(lost){
            alert(`You lost because you ${lostReason}.\nYou scored ${score} points!\nBetter luck next time!!`);
        }
    }

    document.addEventListener("keyup", control);
    startBtn.addEventListener("click", startGame);
})