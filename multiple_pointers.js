//Write a function called sumZero which accepts a sorted array of integers. 
// The function should find the first pair where the sum is 0. 
// Return an array that includes both values that sum to zero or undefined if a pair does not exist
// */



const sumZeroQuadratic = (arr) => {
    for(let i =0; i < arr.length; i++){
        for(let j =i+1; j <arr.length; j++){
            if(arr[i]+arr[j] ===0){
                return [arr[i], arr[j]]
            }
        }
    }
}
const sumZeroLinear = (arr) => {
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]]
        }
        else if(sum > 0){
            right--;
        }else{
            left++;
        }
    }
}

console.log(sumZeroLinear([-3,-2,-1,0,1,2,3])) // [-3,3] 
console.log(sumZeroQuadratic([-2,0,1,3])) // undefined
console.log(sumZeroLinear([1,2,3])) // undefined

const countUniqueValues = (arr) => {
    if(!arr.length) return 0
    let i = 0;
    for(let j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}

console.log(countUniqueValues([1,1,1,1,2]))
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]))