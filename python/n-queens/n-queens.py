def dfs_n_queens(n):
    answers = []
    if n < 1:
        return []
    board = [['.'] * n for _ in range(n)]
    
    def check_safety(board, row, col):
        print(f"Checking safety for row {row + 1}, column {col + 1}")

        # Check if the column is already occupied.
        # Check all rows using n as the range, e.g. range(4) -> 0,1,2,3
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
    
    # First parameter is the starting row, as it will check all columns.
    # No need for a column parameter.
    # Second parameter is the current board.
    def attempt_place(row, board):

        # Check if the row is equal to n.
        if row == n:

            # If so, store the solution.
            print("Solution found.")
            solution = []

            # Iterate through the board, adding positions where queens are placed,
            # since the required format is [1,3,0,2].
            for i in range(n):
                for j in range(n):
                    if board[i][j] == "Q":

                        # Add the column position of the queen to the solution.
                        # Add +1 for human readability.
                        solution.append(j + 1)

            # Add the solution to the answers list, which will be returned.
            answers.append(solution)

            # The recursion has already gone beyond the board,
            # so return to prevent unnecessary checking.
            return

        # If queens are not all placed, try placing a queen.
        # Check all columns in the current row.
        print("")
        print("")
        print(f"Checking row {row + 1}")

        for col in range(n):
            if check_safety(board, row, col) == "safe":

                # If safe, place a queen.
                print(f"Safe, adding queen at row {row + 1}, column {col + 1}")
                board[row][col] = "Q"
                print(board)

                # Continue by proceeding to the next row.
                # Send the current board along as well.
                attempt_place(row + 1, board)

                # After checking, remove the queen.
                board[row][col] = "."

            else:
                pass

                # Note:
                # Do not return here, as that would prevent checking other columns.
                # This else statement is unnecessary, but useful for visualization.

    # Call the recursive function.
    attempt_place(0, board)
    return answers


print("Welcome to the N Queens Solver.")
print("This program outputs solutions to the classic algorithmic puzzle.")

count = 0

for solution in dfs_n_queens(int(input("Input N: "))):
    count += 1

    print(f"Solution {count}")
    row_count = 0

    for column_pos in solution:
        row_count += 1
        print(f"Row {row_count}: Column {column_pos}")

    print("")

if count == 0:
    print("No solutions found.")

# Note:
# The print statements are humanized for easier understanding.

# https://www.geeksforgeeks.org/dsa/n-queen-problem-backtracking-3/
# was used as a learning resource while coding this.

# ChatGPT was used only to correct the grammar errors in the comments.