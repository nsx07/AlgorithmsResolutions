function diagonalDifference(arr) {
    let size = arr.length
    let check = true
    for (let i of arr) if (i.length !== size) check = false
    
    if (check) {
        let mainDiagonal  = 0;
        let secDiagonal = 0;
        for (let i = 0; i < size; i++) {
                mainDiagonal += arr[i][i]
        }
        for (let i = 0; i < size; i++) {
            secDiagonal += arr[i][size-1-i]
        }
        return Math.abs(secDiagonal - mainDiagonal)
    }
    return null
}