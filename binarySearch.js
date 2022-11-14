const binarySearch = (arr, target) => {
    let min = 0, max = arr.length -1;

    while(min < max){
        let middleIndex = Math.floor((min+max)/2)
        if (target === arr[middleIndex]){
            return middleIndex;
        }else if(arr[middleIndex] < target){
            min = middleIndex +1;
        }else{
            max = middleIndex -1;
        }
    }
    return -1;
}