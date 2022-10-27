def sortByFrequency(array) :
    maior = max(array)
    frequencyArray = [0 for x in range(maior+1)]
    for element in array : frequencyArray[element-1] += 1
    sortArray = []
    for i, element in enumerate(frequencyArray): 
        for j in range(element): sortArray.append(i)
    return sortArray