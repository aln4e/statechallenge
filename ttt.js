// assign markers for the players and define it such that player one always begins the game
// the board array starts with empty strings so the game can be played anew after a refresh
  var gameState = {
    PLAYER_ONE: 'X',
    PLAYER_TWO: 'O',
    currentPlayer: 'X',
    board: [
      "","","","","","","","",""
    ]
  }

//winning the game must be clearly defined, and those combinations are assigned within a 2d array (an array within an array)
  function checkForWinner(){
    var winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
//the initial gamestate must be such that there is no winner at start
    var winner = false
//REVIEWTHISSECTION
    winningCombos.find(function(combo){
      if(gameState.board[combo[0]] == gameState.board[combo[1]] && gameState.board[combo[1]] == gameState.board[combo[2]]){
        winner = gameState.board[combo[0]]
      }
    })

    return winner
  }

//if the square is blank, then the space is valid for selection by the current player. the second half tells the computer to switch players upon selection of the empty square
  function handleClick(index){
    if(gameState.board[index] == ''){
      gameState.board[index] = gameState.currentPlayer
      gameState.currentPlayer = gameState.currentPlayer == gameState.PLAYER_ONE ? gameState.PLAYER_TWO : gameState.PLAYER_ONE
//let is a var for a single block of code. we need this since there is a var of the same name elsewhere in our file.
      let winner = checkForWinner()
//if the checkForWinner function defined above returns true, we need to tell the user he has won. REVIEWdotGAMEWINNER
      if(winner){
        alert(`${winner} is the winner!`)
        gameState.gameWinner = winner
      }
      render(gameState)
    }
  }

//this function makes the board interactive. It prepares all of the squares of the board to be styled in css and functionalizes clicks upon a specified square (index)
  function render(state){
    var renderedHtml = "<div class='board'>" +
      "<div class='square' onclick='handleClick(0)'>" +state.board[0]+ "</div>" +
      "<div class='square' onclick='handleClick(1)'>" +state.board[1]+ "</div>" +
      "<div class='square' onclick='handleClick(2)'>" +state.board[2]+ "</div>" +
      "<div class='square' onclick='handleClick(3)'>" +state.board[3]+ "</div>" +
      "<div class='square' onclick='handleClick(4)'>" +state.board[4]+ "</div>" +
      "<div class='square' onclick='handleClick(5)'>" +state.board[5]+ "</div>" +
      "<div class='square' onclick='handleClick(6)'>" +state.board[6]+ "</div>" +
      "<div class='square' onclick='handleClick(7)'>" +state.board[7]+ "</div>" +
      "<div class='square' onclick='handleClick(8)'>" +state.board[8]+ "</div>" +
    "</div>"

//converts selections of blank squares upon selection
    document.querySelector(".render-target").innerHTML = renderedHtml
  }

  render(gameState)
