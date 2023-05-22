// Get all the square elements and convert them to an array
const squares = Array.from(document.querySelectorAll('.square'));

// Initialize the current player to X and set the game as not ended yet
let currentPlayer = 'X';
let gameEnded = false;

// Function to check if a player has won the game
function checkWinner() {
  // Define an array of all the possible winning combinations
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  // Check if any of the winning combinations is valid
  return winningCombinations.some(combination => {
    // Check if all three squares in the combination have the same symbol
    return squares[combination[0]].textContent &&
      squares[combination[0]].textContent === squares[combination[1]].textContent &&
      squares[combination[1]].textContent === squares[combination[2]].textContent;
  });
}

// Function to handle a square click event
function handleClick(event) {
  // If the game has ended or if the square already has a symbol, return early
  if (gameEnded || event.target.textContent !== '') return;

  // Fill the square with the current player's symbol and add the class for that symbol
  event.target.textContent = currentPlayer;
  event.target.classList.add(currentPlayer.toLowerCase());

  // Check if the current player has won the game
  if (checkWinner()) {
    // If the current player has won, set the game as ended and add a class to the board element
    gameEnded = true;
    document.querySelector('.board').classList.add('winner');
  } else {
    // If the game is not over yet, switch the current player to the other symbol
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

// Add a click event listener to each square element
squares.forEach(square => square.addEventListener('click', handleClick));
