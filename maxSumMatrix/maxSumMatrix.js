function maxSumMatrix(matrix) {
    const prop = {
        initSum : 0,
        maxSum: 0,
        matrixOptimax : [],
        atualSum: 0,
        sumTopLeft : (matriz, init = false) => {
            let tempSum = 0
            for (let r = 0; r < matriz.length / 2; r++)
                for (let c = 0; c < matriz.length / 2; c++ ) {
                    tempSum += matriz[r][c]
                    init ? prop.initSum = tempSum : prop.atualSum = tempSum 
                    if (prop.atualSum > prop.initSum && prop.maxSum) {
                        prop.maxSum = prop.atualSum
                        prop.matrixOptimax = matriz
                    } else {
                        prop.maxSum = prop.initSum
                    }
                }
        }
    }
    prop.sumTopLeft(matrix,true)
    if (matrix.length == 4) {
        for (let i = 0; i < matrix.length; i++) 
            matrix[i][0] + matrix[i][1] < matrix[i][2]+matrix[i][3] ? matrix[i].reverse() : ``
        for (let i = 0; i < 4 / 2; i++) {
            let columReversed = []
            for (let r of matrix) columReversed.push(r[i])
            columReversed[0]+columReversed[1] < columReversed[2] + columReversed[3] ? columReversed.reverse() : ``
            for (let c = 0; c < 4; c++) matrix[c][i] = columReversed[c]
            prop.sumTopLeft(matrix)
        }
    } else {
        for (let i = 0; i < matrix.length; i++) {
            prop.maxSum = Math.max(...matrix[i])
        }
    }
    
    return prop
}

bidi = [
    [107,54,128,15],
    [12,75,110,138],
    [100,96,34,85],
    [333,15,28,112]
]
console.log(maxSumMatrix(bidi))
