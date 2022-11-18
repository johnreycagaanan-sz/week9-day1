//! Problem #1
const arr1 = [1, 34, 5, 2, 23, 9, 12, 17, 12, 10, 25]


const linearSearch = (arr, target) => {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target) return arr[i]
    }
    return -1
}

// console.log(linearSearch(arr1, 12))

//! Problem #2

const binarySearch = (arr, target) => {

    arr.sort((a, b) => a - b)
    let first = 0;
    let last = arr.length - 1

    while (last >= first) {
        let middleIndex = Math.floor((first + last) / 2)

        if (arr[middleIndex] === target) {
            return arr[middleIndex];
        } else if (arr[middleIndex] > target) {
            last = middleIndex - 1 
        } else {
            first = middleIndex + 1
        }
    }
    return -1
}

// console.log(binarySearch(arr1, 12))


//! Problem #3
const arr2 = [1, 3, 5, 7, 8, 9, 10, 11, 12, 13, 15, 18, 20]

const recursiveBinarySearch = (arr, target, start = 0, end = arr2.length-1) => {
    let middleIndex = start+ Math.floor((end - start)/2)
    if(arr[middleIndex] === target) {
        return arr[middleIndex]
    } else if(arr[middleIndex] > target){
        return recursiveBinarySearch(arr, target, start, middleIndex -1)
    } else {
        return recursiveBinarySearch(arr, target, middleIndex +1, end)
    }
    return -1
}

console.log(recursiveBinarySearch(arr2, 12))

//! Problem #4

const iterativeBinarySearch = (arr, target) => {

    arr.sort((a, b) => a - b)
    let first = 0;
    let last = arr.length - 1

    while (last >= first) {
        let middleIndex = Math.floor((first + last) / 2)

        if (arr[middleIndex] === target) {
            return arr[middleIndex];
        } else if (arr[middleIndex] > target) {
            last = middleIndex - 1 
        } else {
            first = middleIndex + 1
        }
    }
    return -1
}
// console.log(iterativeBinarySearch(arr2, 12))

//! Problem #5
const long = 'deladogomydog';
const short = 'dog'
const naiveSearch = (long, short) => {
    let count = 0;
    for(let i = 0; i < long.length; i++){
        for(let j = 0; j < short.length; j++){
            if(long[i + j]!==short[j]) break;
            if (j===short.length -1) count++
        }
    }
    return count
}

console.log(naiveSearch(long, short))

//! Problem #6
const moveZeroes = (nums) => {
    let toMoveIndex = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== 0){
            nums[toMoveIndex] = nums[i]
            toMoveIndex++
        }
    }
    for(let i = toMoveIndex; i < nums.length; i++){
        nums[i] = 0;
    }
    return nums
}

console.log(moveZeroes([0, 1, 0, 3, 12]))

//! Problem #7
const isLongPressedName = (name, typed) =>{
    if (typed.length < name.length) return false
    if(name.length < 1 || typed.length > 1000) return false
    let nameIndex = 0
    let typedIndex = 0
    while (typedIndex < typed.length || nameIndex < name.length) {
        if (name[nameIndex] === typed[typedIndex]) {
            nameIndex++
            typedIndex++
        } else if (name[nameIndex - 1] === typed[typedIndex]) {
            typedIndex++
        } else {
            return false
        }
    }
    return true;
    
}

console.log(isLongPressedName('alex','aaaleeex'))
console.log(isLongPressedName('saeed','ssaaedd'))

//! Problem #8

const missingNumber = (nums) => {
    let sum = 0;
    for (let i = 0; i < nums.length; i++){
        sum += i + 1 - nums[i]
    }
    return sum
}