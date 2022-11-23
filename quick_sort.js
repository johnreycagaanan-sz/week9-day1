const quickSort = (arr, left =0, right = arr.length -1 ) => {
    if(left < right ){
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex -1)
        quickSort(arr, pivotIndex +1, right)
    }
    return arr;
}

const pivot = (arr, left = 0, right = arr.length - 1) =>{
    let pivot = arr[left]

    let swapIndex = left

    for(let i =left+1; i <= right; i++){
        if(pivot > arr[i]){
            swapIndex++;
            swap(arr, swapIndex, i)
        }
    }
    swap(arr, left, swapIndex)

    return swapIndex;
}

const swap = (arr, index1, index2) =>{
    return [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
}