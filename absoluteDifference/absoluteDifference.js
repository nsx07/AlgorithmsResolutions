function diagonalDifference(arr) {
    let mainDiagonal  = 0;
    let secDiagonal = 0;
    let size = arr.length
    for (let i = 0; i < size; i++) {
            mainDiagonal += arr[i][i]
    }
    for (let i = 0; i < size; i++) {
        secDiagonal += arr[i][size-1-i]
    }
    return Math.abs(secDiagonal - mainDiagonal)
}