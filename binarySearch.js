const binarySearch = (arr, target) => {
    let min = 0, max = arr.length -1;

    while(min < max){
        let middleIndex = Math.floor((min+max)/2)
        if (target === arr[middleIndex]){
            return middleIndex;
        }else if(arr[middleIndex] < target){
            min = middleIndex;
        }else{
            max = middleIndex;
        }
    }
    return -1;
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11], 2))