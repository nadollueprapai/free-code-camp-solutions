# This version of the N-Queens problem complies with the freeCodeCamp solution tests.

def dfs_n_queens(n):
    answers = []

    if n < 1:
        return []

    board = [['.'] * n for _ in range(n)]

    def check_safety(board, row, col):
        print(f"Checking safety for row {row + 1}, column {col + 1}")

        # Check if the column is already occupied.
        # Check all rows using n as the range, e.g. range(4) -> 0, 1, 2, 3.
        for current_row in range(n):
            if board[current_row][col] == "Q":
                return print("Unsafe due to column occupation.")

        # Check diagonals.

        # Check left diagonals first.
        i, j = row - 1, col - 1
        while i >= 0 and j >= 0:
            if board[i][j] == "Q":
                return print("Unsafe due to left diagonal.")
            i -= 1
            j -= 1

        # Check right diagonals next.
        i, j = row - 1, col + 1
        while i >= 0 and j < n:
            if board[i][j] == "Q":
                return print("Unsafe due to right diagonal.")
            i -= 1
            j += 1

        return "safe"

    # The first parameter is the starting row since all columns
    # in that row will be checked. No column parameter is needed.
    # The second parameter is the current board.
    def attempt_place(row, board):

        # Check if the current row equals n.
        if row == n:

            # If so, store the solution.
            print("Solution found.")

            solution = []

            # Iterate through the board and add the positions
            # where queens are placed, since the expected format
            # is something like [1, 3, 0, 2].
            for i in range(n):
                for j in range(n):
                    if board[i][j] == "Q":

                        # Add the queen's column position to the solution.
                        solution.append(j)

            # Add the solution to the answers list that will be returned.
            answers.append(solution)

            # The recursion has gone beyond the board,
            # so return to prevent unnecessary checking.
            return

        # If all queens are not yet placed, try placing one.
        # Check all columns in the current row.
        print("")
        print("")
        print(f"Checking row {row + 1}")

        for col in range(n):
            if check_safety(board, row, col) == "safe":

                # If the position is safe, place a queen.
                print(f"Safe, adding queen at row {row + 1}, column {col + 1}")

                board[row][col] = "Q"
                print(board)

                # Continue by moving to the next row,
                # passing along the current board.
                attempt_place(row + 1, board)

                # After checking, remove the queen (backtracking).
                board[row][col] = "."

            else:
                pass

                # Do not return here, as that would prevent
                # checking the remaining columns.
                # This else statement is not necessary,
                # but it helps visualize failed placements.
        print("")

    # Call the recursive function.
    attempt_place(0, board)

    return answers


# Note:
# The print statements are intentionally human-readable
# to make the algorithm easier to follow.

# Learning resource used while coding:
# https://www.geeksforgeeks.org/dsa/n-queen-problem-backtracking-3/

# ChatGPT was used only to correct the grammar errors in the comments.

print(dfs_n_queens(4));