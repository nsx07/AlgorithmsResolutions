function sortByFrequency(array) {
    let maior = Math.max(...array)
    let frequencyArray = new Array(maior).fill(0)
    let sortArray = new Array(array.length)
    for (let element of array) frequencyArray[element-1] += 1
    frequencyArray.forEach((value,index) => {
        for (let i = 0; i < value; i++) sortArray.push(index)
    })

    return sortArray
}
console.log(sortByFrequency([3,4,23,12,7,5,3,23,2,21]))