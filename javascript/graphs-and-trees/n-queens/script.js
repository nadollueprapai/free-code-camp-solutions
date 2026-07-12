// Credit to geeksForGeeks as a learning resource.

function dfsNQueens(n) {
    // Define a new array to store the solutions.
    let listOfSolutions = new Array();

    if (n < 1) {
        return [];
    }

    // Initialize the board.
    const boardLength = n;
    let board = Array.from({ length: boardLength }, () => Array(boardLength).fill("."))

    function isSafe(board, row, col) {
        // Check each row in the board for column occupation.
        for (let currentRow = 0; currentRow < boardLength; currentRow++) {
            // Check if this row's column contains a queen.
            if (board[currentRow][col] == "Q") {
                // If it contains a queen it is unsafe.
                return false;
            }
        }

        // Proceed to checking diagonals.
        let i, j;

        // Begin with left diagonals.
        i = row - 1, j = col - 1.
        while (i >= 0 && j >= 0) {
            // Check if the diagonal square contains a queen.
            if (board[i][j] == "Q") {
                return false;
            }

            // Move 1 square up and 1 square left.
            i -= 1;
            j -= 1;
        }

        // Now for right diagonals.
        i = row - 1, j = col + 1.
        while (i >= 0 && j < boardLength) {
            // Check if the diagonal square contains a queen.
            if (board[i][j] == "Q") {
                return false;
            }

            // Move 1 square up and 1 square right.
            i -= 1;
            j += 1;
        }

        // If the square has not been found unsafe, return a truthy value.
        return true;
    }

    function attemptPlace(row, board) {
        // Check if we have completed all the rows.
        if (row == boardLength) {
            // A solution has been found. Let's build the solution from the board.
            let currentBoardState = structuredClone(board);
            let solution = new Array();

            // Iterate through the board, adding queen positions.
            for (let i = 0; i < boardLength; i++) {
                for (let j = 0; j < boardLength; j++) {
                    if (currentBoardState[i][j] == "Q") {
                        solution.push(j);
                    }
                }
            }

            // The solution should look something like this: [ 1, 3, 0, 2 ].

            // Add the solution to the list of solutions.
            listOfSolutions.push(solution);
        }

        // Iterate through each column of the given row.
        for (let col = 0; col < boardLength; col++) {
            // Begin by checking if the square is safe.
            if (isSafe(board, row, col)) {
                // Now that we know the square is safe, we can add a queen.
                board[row][col] = "Q";

                /*
                  Next we check all possible solutions for this queen placement, 
                  or perhaps add a solution if we just placed the final queen.
                */
                attemptPlace(row + 1, board);

                /*
                  Now that we have checked the possibilities for this queen placement, 
                  we can remove the queen.
                */
                board[row][col] = ".";
            }
        }
    }

    // Begin with the first row of the board and an empty board to start searching.
    attemptPlace(0, board);

    // Return the list of solutions.
    return listOfSolutions;
}

console.log(dfsNQueens(4))