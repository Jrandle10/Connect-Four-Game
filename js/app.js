//Pseudocode
//HTML
// add an id to each square on the board so they can be accesed indivually. The squares will be represented by buttons in HTML. 

// Add the same class for each square so that I can access them using querySelectorAll. 

// I will be using a wireframe for the sytling. I'm not really familiar with those yet so I'm not sure what else I will need to add to html besides the title, buttons, and any text I will have on the screen

//Javascript


//1. Define the variables needed to track the game. I will need a "turn" variable, "winner" variable that will track win and tie.

//2. store cached elements needed from HTML. I will need access to the <buttons>, the <p> where my game info will be displayed (winner, tie).

//3. Define an empty array to store the selections the players have made?

//4. create an array that has all the winning combinations. I will call on this array when writing the win/tie logic.

//set up event listeners (create handleClick function that will tell the event listener what to do when the user clicks)

//write an init function. This will basically hold the default settings for the game that will run once the game starts. Call that function before any others.

//Write function to tell browser what to do if there is a winner or tie (isWinner, isTie)

//write a render function that displays the game info. renderWin for winner and renderTie for tie.


//Once I have the game working I can add any css styling I need to. Still not sure if that can done when I do the wireframe. if not I will do this manually.


/*-------------------------------- Constants --------------------------------*/
console.log('this works')


/*---------------------------- Variables (state) ----------------------------*/
let winner, turn 
let boardArray = []
let winningCombos= [
  [0, 1, 2, 3], [41, 40, 39, 38],[7, 8, 9, 10], 
[34, 33, 32, 31], [14, 15, 16, 17], [27, 26, 25, 24], 
[21, 22, 23, 24], [20, 19, 18, 17], [28, 29, 30, 31], 
[13, 12, 11, 10], [35, 36, 37, 38], [6, 5, 4, 3], 
[0, 7, 14, 21], [41, 34, 27, 20], [1, 8, 15, 22], 
[40, 33, 26, 19], [2, 9, 16, 23], [39, 32, 25, 18], 
[3, 10, 17, 24], [38, 31, 24, 17], [4, 11, 18, 25], 
[37, 30, 23, 16], [5, 12, 19, 26], [36, 29, 22, 15], 
[6, 13, 20, 27], [35, 28, 21, 14], [0, 8, 16, 24], 
[41, 33, 25, 17], [7, 15, 23, 31], [34, 26, 18, 10], 
[14, 22, 30, 38], [27, 19, 11, 3], [35, 29, 23, 17], 
[6, 12, 18, 24], [28, 22, 16, 10], [13, 19, 25, 31], 
[21, 15, 9, 3], [20, 26, 32, 38], [36, 30, 24, 18], 
[5, 11, 17, 23], [37, 31, 25, 19], [4, 10, 16, 22], 
[2, 10, 18, 26], [39, 31, 23, 15], [1, 9, 17, 25], 
[40, 32, 24, 16], [9, 7, 25, 33], [8, 16, 24, 32], 
[11, 7, 23, 29], [12, 18, 24, 30], [1, 2, 3, 4], 
[5, 4, 3, 2], [8, 9, 10, 11], [12, 11, 10, 9],
[15, 16, 17, 18], [19, 18, 17, 16], [22, 23, 24, 25], 
[26, 25, 24, 23], [29, 30, 31, 32], [33, 32, 31, 30], 
[36, 37, 38, 39], [40, 39, 38, 37], [7, 14, 21, 28], 
[8, 15, 22, 29], [9, 16, 23, 30], [10, 17, 24, 31], 
[11, 18, 25, 32], [12, 19, 26, 33], [13, 20, 27, 34]
]


/*------------------------ Cached Element References ------------------------*/
const gameBoard = document.querySelector('.game-board')

const gameMessage = document.querySelector('.game-message')

const individualSquares = document.querySelectorAll('.board-child')

const squares = document.querySelector('.game-board')


/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/
init()

function init() {
  turn = 1
  
  boardArray = [1, null, null, -1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
  
  winner = null
  
  render()
}



function render() {
let i = 0
  for (let i = 0; i < boardArray.length; i++) {
    if (boardArray[i] === 1) {
      individualSquares[i].style.backgroundColor = 'red'
    } else if (boardArray[i] === -1) {
      individualSquares[i].style.backgroundColor = 'blue'
    } else if (boardArray[i] === null) {
    //  individualSquares.style.backgroundColor = 'grey'
    console.log(individualSquares[i])
    }
  } if (turn === 1) {
    gameMessage.textContent = `Player one, your turn!`
  } else if (turn === -1) {
    gameMessage.textContent = `Player Two, your turn`
  }
    
}

