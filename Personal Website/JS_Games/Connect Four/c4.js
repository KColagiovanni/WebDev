//Things to do:
//Stop the game when all spots are filled but there is no winner (draw)
//Bonus: Put a list of how many games have been played, and show the player that has won which ones
//Bonus: Get the pieces to drop from the top down into the slot

//Connect Four!!!
const squares = document.querySelectorAll(".grid div");
const result = document.querySelector("#result");
document.getElementById("status").innerHTML = "Press 'Start Game' to begin";
let count = 0;
var winner = false;
var gameStarted = false;

//This function clears the pieces off the board
function clearBoard() {
//    console.log("clearBoard has been called");
    let clearSquares = document.querySelectorAll(".grid div");
    document.getElementById("result").innerHTML = "";
    document.getElementById("status").innerHTML = "Press 'Start Game' to begin";
    winner = false;
    gameStarted = false;
    count = 0;
    removeHandler();
    for(i = 0; i < 42; i++){
        document.getElementById(`_${i}`).style.visibility = "hidden";
    }
//    console.log(`clearSquares.length is ${clearSquares.length}`);
    for(let i = 0, len = clearSquares.length; i < len; i++){
        squares[i].classList.remove("player-one");
        squares[i].classList.remove("player-two");
        squares[i].classList.remove("taken");
//        console.log(`${i} has been cleared`);
    }
    document.getElementById("startGame").disabled = false;
    document.getElementById("clearBoard").disabled = true;
}

//This funciton prepares the board for a game
function createGame(){
//    console.log("createGame has been called");
    var currentPlayer = 1;
//    console.log(currentPlayer);
    document.getElementById("startGame").disabled = true;
    document.getElementById("status").innerHTML = "Turn: Player 1";
    document.getElementById("clearBoard").disabled = false;
    gameStarted = true;
    for(let i = 42; i < 49; i++){
        squares[i].classList.add("taken");
    }
    for(let i = 0, len = squares.length; i < len; i++){
//            console.log("for loop loops...");
        (function(index){
//                console.log("function loops...");
            squares[i].onclick = function() {
//                console.log("square[i].onclick function loops...");
//                console.log(`i is ${i} and squares[i] is`);
//                console.log(squares[i]);
//                console.log(`Current player is ${currentPlayer}`);
//                console.log(`winner is ${winner}`);
                if(squares[index + 7].classList.contains("taken") && winner === false){
//                    console.log("Hi from inside the if statement...");
                    //When player 1 clicks a square define it as taken and place the player 1 chip in the div and switch the turn to player 2
                    if(currentPlayer === 1 && !squares[index].classList.contains("player-one") && !squares[index].classList.contains("player-two")){
                        squares[index].classList.add("taken");
                        squares[index].classList.add("player-one");
                        currentPlayer = 2;
                        document.getElementById("status").innerHTML = "Turn: Player 2";
                        count++;

                    //When player 2 clicks a square define it as taken and place the player 2 chip in the div and switch the turn to player 1
                    } else if(currentPlayer === 2 && !squares[index].classList.contains("player-one") && !squares[index].classList.contains("player-two")){
                        squares[index].classList.add("taken");
                        squares[index].classList.add("player-two");
                        currentPlayer = 1;
                        document.getElementById("status").innerHTML = "Turn: Player 1";
                        count++;
                    }

                //Deny the player from putting a piece in an illegal spot.
                } else if(!squares[index + 7].classList.contains("taken") && squares[i] != "" && winner === false && gameStarted === true){
                    alert("Can't go here");
                } else if (!squares[index + 7].classList.contains("taken") && squares[i] != "" && winner === false && gameStarted === false){
                    alert("A game has not been started. Press the 'Start Game' button to begin");
                }
            }
        })(i)
    }
    addHandler();
}

//This function checks for 'four in a row' everytime a player places a piece 
function checkBoard() {
//    console.log(`count is ${count}`);
    //Define all the posible winning arrays
    const winningArrays = [[0, 1, 2, 3], [41, 40, 39, 38], [7, 8, 9, 10], [34, 33, 32, 31], [14, 15, 16, 17], [27, 26, 25, 24], [21, 22, 23, 24], [20, 19, 18, 17], [28, 29, 30, 31], [13, 12, 11, 10], [35, 36, 37, 38], [6, 5, 4, 3], [0, 7, 14, 21], [41, 34, 27, 20], [1, 8, 15, 22], [40, 33, 26, 19], [2, 9, 16, 23], [39, 32, 25, 18], [3, 10, 17, 24], [38, 31, 24, 17], [4, 11, 18, 25], [37, 30, 23, 16], [5, 12, 19, 26], [36, 29, 22, 15], [6, 13, 20, 27], [35, 28, 21, 14], [0, 8, 16, 24], [41, 33, 25, 17], [7, 15, 23, 31], [34, 26, 18, 10], [14, 22, 30, 38], [27, 19, 11, 3], [35, 29, 23, 17], [6, 12, 18, 24], [28, 22, 16, 10], [13, 19, 25, 31], [21, 15, 9, 3], [20, 26, 32, 38], [36, 30, 24, 18], [5, 11, 17, 23], [37, 31, 25, 19], [4, 10, 16, 22], [2, 10, 18, 26], [39, 31, 23, 15], [1, 9, 17, 25],  [40, 32, 24, 16], [9, 17, 25, 33], [8, 16, 24, 32], [11, 17, 23, 29], [12, 18, 24, 30], [1, 2, 3, 4], [5, 4, 3, 2], [8, 9, 10, 11], [12, 11, 10, 9], [15, 16, 17, 18], [19, 18, 17, 16], [22, 23, 24, 25], [26, 25, 24, 23], [29, 30, 31, 32], [33, 32, 31, 30], [36, 37, 38, 39], [40, 39, 38, 37], [7, 14, 21, 28], [8, 15, 22, 29], [9, 16, 23, 30], [10, 17, 24, 31], [11, 18, 25, 32], [12, 19, 26, 33], [13, 20, 27, 34]];

    //for loop that checks for winners using an event listenter, defined below, from the winningArray, defined above.
    for(let y = 0; y < winningArrays.length; y++){
        const square1 = squares[winningArrays[y][0]]
        const square2 = squares[winningArrays[y][1]]
        const square3 = squares[winningArrays[y][2]]
        const square4 = squares[winningArrays[y][3]]

        //If player one wins...
        if(square1.classList.contains("player-one") && square2.classList.contains("player-one") && square3.classList.contains("player-one") && square4.classList.contains("player-one")){
            result.innerHTML = "Player One Wins!!";
            document.getElementById("status").innerHTML = "Game over!";
            winner = true;
            gameStarted = false;
            console.log(winningArrays[y]);
            document.getElementById(`_${winningArrays[y][0]}`).style.visibility = "visible";
            document.getElementById(`_${winningArrays[y][1]}`).style.visibility = "visible";
            document.getElementById(`_${winningArrays[y][2]}`).style.visibility = "visible";
            document.getElementById(`_${winningArrays[y][3]}`).style.visibility = "visible";

        //If player two wins...
        }else if(square1.classList.contains("player-two") && square2.classList.contains("player-two") && square3.classList.contains("player-two") && square4.classList.contains("player-two")){
            result.innerHTML = "Player Two Wins!!";
            document.getElementById("status").innerHTML = "Game over!";
            winner = true;
            gameStarted = false;
            console.log(winningArrays[y]);
            document.getElementById(`_${winningArrays[y][0]}`).style.visibility = "visible";
            document.getElementById(`_${winningArrays[y][1]}`).style.visibility = "visible";
            document.getElementById(`_${winningArrays[y][2]}`).style.visibility = "visible";
            document.getElementById(`_${winningArrays[y][3]}`).style.visibility = "visible";

        //If its a draw...
        }else if(count == 42 && winner == false){
            document.getElementById("status").innerHTML == "Game over!";
            result.innerHTML = "Draw!!";
            gameStarted = false;
            if(confirm("Game over. It's a draw!! Play again?")){
                winner = false;
                count = 0;
                clearBoard();
                createGame();
            } else {
                winner = false;
                count = 0;
                clearBoard();
            }
        }        
    }
}

//This function adds an event handler to call the checkBoard function when a spot is clicked
function addHandler(){
    squares.forEach(square => square.addEventListener("click", checkBoard));
}

//This function removes an event handler from calling the checkBoard function when a spot is clicked
function removeHandler(){
    squares.forEach(square => square.removeEventListener("click", checkBoard));
}