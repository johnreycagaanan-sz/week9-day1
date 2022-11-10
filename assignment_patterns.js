//! Problem 1

const areThereDuplicates = (arrOfLetters) => {
    if(arrOfLetters.length===0) return null;
    let first = 0;
    while(first < arrOfLetters.length -1){
        let next = first+1;
        if(arrOfLetters[first]===arrOfLetters[next]){
            return true;
        } else {
            first++;
        }
    }
    return false
}
//Tests
console.log(areThereDuplicates(['a', 'a', 'c', 'd']))// true
console.log(areThereDuplicates(['a', 'b', 'c'])) // false
console.log(areThereDuplicates(['a', 'b', 'b', 'c'])) // true
console.log(areThereDuplicates([])) // null




//!Problem 2

const avgPair = (arr, avgTarget) => {
 let first = 0, last = arr.length -1;
    if(arr.length ===0) return false;

    while(first < last){
        let avg = (arr[first] + arr[last])/2
        if (avg === avgTarget){
            return true;
        }else if (avg < avgTarget){
            first++;
        }else {
            last--;
        }
    }
    return false
}
// Test Cases: 
console.log(avgPair([1,2,3],2.5)) //true
console.log(avgPair([1,3,3,5,6,7,10,12,19],8)) //true
console.log(avgPair([-1,0,3,4,5,6], 4.1)) //false
console.log (avgPair([],4)) //false

//! Problem 3
const minSubarraySum = (arr, n) => {
    if(arr.length < n) return null;
    let temp = 0, minSum = 0;

    for(let i = 0; i < n; i++){
        minSum += arr[i]
    }

    temp = minSum;

    for(let i = n; i < arr.length; i++){
        temp = temp + arr[i] - arr[i-n]
        minSum = Math.min(temp, minSum)
    }

    return minSum;

}
// Test Cases:
console.log(minSubarraySum([100,200,300,400], 2));
console.log(minSubarraySum([1,4,2,10,23,3,1,0,20], 4)); 
console.log(minSubarraySum([-3,4,0,-2,6,-1], 2))
console.log(minSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2))
console.log(minSubarraySum([2,3], 3))