const arr = [12, 3, 14, 18, 2, 7, 9]

const javaScriptMethod = (arr) => {
    return arr.sort((a,b) => {return a - b})
}

// console.log(javaScriptMethod(arr))

const bubbleSortMethod = (arr) => {
    for(let i = arr.length - 1; i > 0; i++){
        noSwaps = true;
        for(let j = 0; j < i; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                noSwaps = false
            }
        }
        if(noSwaps === true) break
    }
    return arr
}
// console.log(bubbleSortMethod(arr))

const selectionSortMethod = (arr) => {
    for(let i = 0; i < arr.length; i++){
        // console.log(`Iteration number: ${i}`)
        let min = arr[i]
        for(let j = i+1; j < arr.length; j++){
            min = Math.min(min, arr[j]);
            let index = arr.indexOf(min)
            // console.log(`I is ${i}, min is ${min} and index is ${index}`)
            arr[index] = arr[i]
            arr[i] = min
        }
    }
    return arr
}

// console.log(selectionSortMethod(arr))

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

console.log(insertionSort(arr))
