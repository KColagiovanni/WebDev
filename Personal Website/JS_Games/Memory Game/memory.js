
//Things to fix:
//Increase difficulty with each game.
//Don't allow the player to click three pictures (clicking too fast)
//Make the game responcive to all screen sizes

document.addEventListener("DOMContentLoaded", () => {
   //Card Options
   const easyCardArray = [
       {
           name: 'fries',
           img: 'Images/fries.jpg'
       },
       {
            name: 'fries',
            img: 'Images/fries.jpg'
        },
        {
            name: 'pizza',
            img: 'Images/pizza.jpg'
        },
        {
            name: 'pizza',
            img: 'Images/pizza.jpg'
        },
        {
            name: 'hamburger',
            img: 'Images/hamburger.jpg'
        },
        {
            name: 'hamburger',
            img: 'Images/hamburger.jpg'
        },
        {
            name: 'hotdog',
            img: 'Images/hotdog.jpg'
        },
        {
            name: 'hotdog',
            img: 'Images/hotdog.jpg'
        },
        {
            name: 'cookie',
            img: 'Images/cookie.jpg'
        },
        {
            name: 'cookie',
            img: 'Images/cookie.jpg'
        },
        {
            name: 'beer',
            img: 'Images/beer.jpg'
        },
        {
            name: 'beer',
            img: 'Images/beer.jpg'
        }
    ] 

    const medCardArray = [
        {
            name: 'iceCream',
            img: 'Images/ice_cream.jpg'
        },
        {
            name: 'iceCream',
            img: 'Images/ice_cream.jpg'
        },
        {
            name: 'soda',
            img: 'Images/soda.jpg'
        },
        {
            name: 'soda',
            img: 'Images/soda.jpg'
        }
    ]

    const hardCardArray = [
        {
            name: 'chicken',
            img: 'Images/chicken.jpg'
        },
        {
            name: 'chicken',
            img: 'Images/chicken.jpg'
        },
        {
            name: 'steak',
            img: 'Images/steak.jpg'
        },
        {
            name: 'steak',
            img: 'Images/steak.jpg'
        },
        {
            name: 'sushi',
            img: 'Images/sushi.jpg'
        },
        {
            name: 'sushi',
            img: 'Images/sushi.jpg'
        },
        {
            name: 'egg',
            img: 'Images/egg.jpg'
        },
        {
            name: 'egg',
            img: 'Images/egg.jpg'
        }   
    ]
        
    document.getElementById("difficulty").addEventListener("change", setDifficulty);
    const grid = document.querySelector(".grid");
    const resultsDisplay = document.querySelector("#result");
    const roundDisplay = document.querySelector("#round");
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];
    let selectedArray = [];
    let score = 0;
    let pointsThisRound = 0;
    let back = "Images/nl.jpg";
    let blank = "Images/white.jpg";
    let difficulty;
    let round = 0;
    let clear;

    function setDifficulty() {
//        reset();
        difficulty = document.getElementById("difficulty").value;
        console.log('setDifficulty has been called');
        switch(difficulty) {
            case "easy":
                selectedArray = easyCardArray;
                console.log(`easy has been selected`);
                break;
            case "med":
                selectedArray = easyCardArray.concat(medCardArray);
                console.log(`med has been selected`);
                break;
            case "hard":
                selectedArray = easyCardArray.concat(medCardArray, hardCardArray);
                console.log(`hard has been selected`);
                break;
            }
        console.log(`selectedArray.length from setDifficulty() is ${selectedArray.length}`);
        document.getElementById("reset").disabled = false;
        document.getElementById("reset").textContent = "Start";
    }

    //Create Game Board
    function createGameBoard() {
        console.log("createGameBoard() has been called");
        round += 1;
        setDifficulty();
        document.getElementById("reset").disabled = true;
        selectedArray.sort(() => 0.5 - Math.random());
        console.log("going into for loop");
        console.log(`selectedArray.length from createGameBoard() is ${selectedArray.length}`);
        for(let i = 0; i < selectedArray.length; i++){
            const card = document.createElement("img");
            document.getElementById("matchResult").innerHTML = "";
            card.setAttribute("src", back);
            card.setAttribute("data-id", i);
            card.addEventListener("click", flipCard);
            grid.appendChild(card);
        }
        if(selectedArray.length == 24) {
            document.getElementById("memoryDiv").style.gridTemplateColumns = "repeat(6, 1fr)";
        }
        console.log("board has been setup");
        roundDisplay.textContent = round;
        resultsDisplay.textContent = score;
    }

    //Check for Matches
    function checkForMatch() {
        console.log("checkForMatch() has been called");
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        const cards = document.querySelectorAll("img");

        if(optionOneId == optionTwoId){
            cards[optionOneId].setAttribute("src", back);
            cards[optionTwoId].setAttribute("src", back);
            alert("You have clicked the same image!!")
        }
        else if(cardsChosen[0] === cardsChosen[1]) {
//            alert("You found a match");
            cards[optionOneId].setAttribute("src", blank);
            cards[optionTwoId].setAttribute("src", blank);
            cards[optionOneId].removeEventListener("click", flipCard);
            cards[optionTwoId].removeEventListener("click", flipCard);
            pointsThisRound += 5;
            score += 5;
            cardsWon.push(cardsChosen)
            document.getElementById("matchResult").innerHTML = "You Found a Match!!"; 
        } else {
            clearTimeout(clear);
            cards[optionOneId].setAttribute("src", back);
            cards[optionTwoId].setAttribute("src", back);
//            alert("Sorry, try again");
            document.getElementById("matchResult").innerHTML = "Sorry, try again"; 
            pointsThisRound -= 1;
            score -= 1;
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultsDisplay.textContent = score;
        console.log(`cardsWon.length is ${cardsWon.length}`);
        if(cardsWon.length === selectedArray.length/2) {
            document.getElementById("matchResult").innerHTML = `Congratulations!! You found them all and scored ${pointsThisRound} points this round!!`;
            document.getElementById("reset").textContent = "Play Again";
            document.getElementById("reset").disabled = false;
            document.getElementById("reset").style.backgroundColor = "#eee";
            pointsThisRound = 0;
        }
    }

    //Flip the card
    function flipCard() {
        console.log("flipCard() has been called");
        document.getElementById("difficulty").disabled = true;
        let cardId = this.getAttribute("data-id");
        cardsChosen.push(selectedArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute("src", selectedArray[cardId].img);
        if(cardsChosen.length === 2) {
            clear = setTimeout(checkForMatch, 500);
        }
        console.log(`cardsChosen.length is ${cardsChosen.length}`);
        if(cardsChosen.length > 2){
            alert("Woah, slow down there cowboy!!!");
        }
    }

    function reset() {
        console.log("reset() has been called");
        cardsWon = [];
        console.log(`selectedArray.length from reset() is ${selectedArray.length}`);
        console.log(`there are ${grid.children.length} children on the grid`);
        if(selectedArray.length > 0 && selectedArray.length == grid.children.length){
            for(let i = 0; i < selectedArray.length; i++){
//                console.log("Hi from == if");
//                console.log(grid.lastElementChild);
//                console.log(`i is ${i}`);
                grid.removeChild(grid.lastElementChild);
            }
            console.log("board has been reset from == if");
            createGameBoard();
        }
        if(selectedArray.length > 0 && selectedArray.length != grid.children.length){
            let num = grid.children.length;
            for(let i = 0; i < num; i++){
//                console.log("Hi from != if");
//                console.log(grid.lastElementChild);
//                console.log(`i is ${i}`);
                grid.removeChild(grid.lastElementChild);
            }
            console.log("board has been reset from != if");
            createGameBoard();
        }
    }

    function newGame() {
        location.reload();
    }

    document.getElementById("newGame").addEventListener("click", newGame);
    document.getElementById("reset").addEventListener("click", reset);
    createGameBoard();
})