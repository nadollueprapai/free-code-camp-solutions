def dfs_n_queens(n):
    answers = []
    if n < 1:
        return []
    board = [['.'] * n for _ in range(n)]
    
    def check_safety(board, row, col):
        print(f"Checking safety for row {row + 1}, column {col + 1}")

        #Check if its column is already occupied
        ##Check all rows using n as the range, e.g. range(4) 0,1,2,3
        for current_row in range(n):
            if board[current_row][col] == "Q":
                return print("Unsafe due to column occupation.")
        
        #Check for diagonals
        
        ##Left diagonals first
        i, j = row - 1, col - 1
        while i >= 0 and j >= 0:
            if board[i][j] == "Q":
                return print("Unsafe due to left diagonal.")
            i -= 1
            j -= 1
        ##Right diagonals next
        i,j = row - 1, col + 1
        while i >= 0 and j < n:
            if board[i][j] == "Q":
                return print("Unsafe due to right diagonal.")
            i -= 1
            j += 1


        return "safe"
    
    #First parameter is starting row as it will check all columns. No need for column parameter.
    #Second parameter is the current board.
    def attempt_place(row, board):
        #Check if the row is equal to the number.
        if row == n:
            #If so, store the solution.
            print("Solution found.")
            solution = []
            #Iterate through the board, adding positions where queens are placed, since they want it in [1,3,0,2] format.
            for i in range(n):
                for j in range(n):
                    if board[i][j] == "Q":
                        #Add the column of the queen to the solutions.
                        solution.append(j)
            #Add the solution to the answers list which will be returned.
            answers.append(solution)
            #Also, its already gone beyond the board so just return it to prevent unecessary checking
            return
        #If queens are not all placed, try placing a queen.
        #Check all columns in the row
        print("")
        print("")
        print(f"Checking row {row + 1}")
        for col in range(n):
            if check_safety(board, row, col) == "safe":
                #If safe, then add a queen.
                print(f"Safe, adding queen at row {row + 1}, column {col + 1}")
                board[row][col] = "Q"
                print(board)
                #Keep going by proceeding to the next row, send the current board along as well.
                attempt_place(row + 1, board)
                #After checking, remove the queen
                board[row][col] = "."
            else:
                pass
                #Note: Don't return as that would prevent checking the other columns.
                #No point in this else statement, but its good for visualization of flagging.



    #Call the recursive function.
    attempt_place(0,board)
    return answers



print(dfs_n_queens(5))
#Note: the print statements are humanized for ease of human understanding.

#https://www.geeksforgeeks.org/dsa/n-queen-problem-backtracking-3/$0 was used as a learning resource while coding this.