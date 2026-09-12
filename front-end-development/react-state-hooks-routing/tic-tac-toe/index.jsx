import { useState } from "react";
import "./styles.css";

export function Board() {
  // Define useState Variables.
  const [placingX, setPlacingX] = useState(true);
  const [grid, setGrid] = useState(Array(9).fill(null));
  const [message, setMessage] = useState("");
  const [gameState, setGameState] = useState(null);

  function checkGameOver(copiedGrid, currentPlayer) {
    // List the winning combinations.
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    // Check for all winning combos for the current player.
    for (let i = 0; i < winningCombos.length; i++) {
      const winningCombo = winningCombos[i];
      const [pos1, pos2, pos3] = winningCombo;
      if (copiedGrid[pos1] === currentPlayer && 
          copiedGrid[pos2] == currentPlayer && 
          copiedGrid[pos3] == currentPlayer ) {
        // Declare the winner.
        setGameState(currentPlayer);
        setMessage(`Winner: ${currentPlayer}.`);
        return true;
      }
    }

    // Check for a draw.
    if (copiedGrid.every(Boolean)) {
      setGameState("Draw");
      setMessage("The game ended in a draw.");
      return true;
    }

    // If the game has not ended, then change message.
    setMessage(`Placing ${currentPlayer=="X" ? "O":"X"}`);
    return false;
  }

  function handleClick(targetSpace) {
    // Create a copy of the grid from the prexisting state.
    const copiedGrid = [...grid];
    // Determine the current player.
    const currentPlayer = placingX ? "X" : "O";

    // If the game is already over then we can skip.
    if (gameState) {
      return;
    }

    // If it is already filled then ignore it.
    if (copiedGrid[targetSpace]) {
      return;
    }

    // Alter the target square.
    copiedGrid[targetSpace] = placingX ? "X":"O";
    // Set the state.
    setGrid(copiedGrid);

    // Determine if the game has ended.
    const gameOver = checkGameOver(copiedGrid, currentPlayer);

    // Change placingX if the game has not ended.
    if (!gameOver) {
      setPlacingX(!placingX);
    }
  }

  // Reset the game.
  function resetGame() {
    setGrid(Array(9).fill(null));
    setPlacingX(true);
    setMessage("Placing X");
    setGameState(null);
  }

  return(
    <div>
      <h1>Tic-Tac-Toe</h1>
      <h2 className="msg status">{message}</h2>
      <div className="tictactoe-grid">
        {grid.map((value, index) => (
          <button
            className="square"
            onClick={() => handleClick(index)}
            key={index}
          >
            {value}
          </button>
        ))}
      </div>
      <button type="reset" id="reset" onClick={resetGame}>Click to restart.</button>
    </div>
  );
};

export default Board;