def AbsoluteDifference(matrix):
    checkSquareMatrix = False
    for i in matrix : 
        if len(i) != len(matrix):
            checkSquareMatrix = False    
            break
        else:
            checkSquareMatrix = True
    if checkSquareMatrix:
        principalDiagonal = 0
        for diagonalLE in range(len(matrix)):    
            principalDiagonal += matrix[diagonalLE][diagonalLE]
        secondaryDiagonal = 0
        for diagonalRT in range(len(matrix)):
            secondaryDiagonal += matrix[diagonalRT][len(matrix)-1-diagonalRT] 
        diferenca_absoluta = principalDiagonal - secondaryDiagonal
        return abs(diferenca_absoluta)
    return 0