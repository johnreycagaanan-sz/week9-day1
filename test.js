const insertionSort = (arr) => {
    let currValue; 
    for (let i = 1; i < arr.length; i++) {
        currValue = arr[i];
        for (let j = i - 1; j >= 0 && arr[j] > currValue; j--) {
            arr[j+1] = arr[j]
            arr[j] = currValue
        }
    }

    return arr; 
}

console.log(insertionSort([12, 3, 14, 18, 2, 7, 9]))
