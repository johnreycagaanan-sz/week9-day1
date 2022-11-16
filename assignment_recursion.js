//! Problem #1
function reverseString(str, lastIndex = str.length-1, reversedArr = []){
    if(lastIndex < 0) return;
    reversedArr.push(str[lastIndex])
    lastIndex--
    reverseString(str, lastIndex, reversedArr)
return reversedArr.join('')
}

console.log(reverseString('hello'))

//! Problem #2

function palindrome(str, lastIndex = str.length-1, reversedArr = []){
    if(lastIndex < 0) return;
    reversedArr.push(str[lastIndex])
    lastIndex--
    palindrome(str, lastIndex, reversedArr)
    
return reversedArr.join('') === str
}
console.log(palindrome('tony'))
console.log(palindrome('sos'))

//! Problem #3

const flatTheArray = (arr) => {
    let flattenedArr =[]
    if (!arr.length) return flattenedArr
    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] === 'number'){
            flattenedArr.push(arr[i])
        }else if(typeof arr[i] === 'object'){
            flattenedArr = flattenedArr.concat(flatTheArray(arr[i]))
        }
    }
    return flattenedArr
}

console.log(flatTheArray([1,2,[3,4],[[5,6],7]]))
console.log(flatTheArray([1, 2, 3, [4, 5] ]))
console.log(flatTheArray([1, [2, [3, 4], [[5]]]]))
console.log(flatTheArray([[1],[2],[3]]))
console.log(flatTheArray([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]))

//! Problem 4

const capitalizeFirstLetter = (array) => {
    if(array.length ===0) return []

    let letters = array[0].split('')
    letters[0] = letters[0].toUpperCase();
    return [letters.join('')].concat(capitalizeFirstLetter(array.slice(1)))
}

console.log(capitalizeFirstLetter(['tony', 'truck']))

//! Problem 5

const capitalizeAllLetters = (array) => {
    if(array.length === 1 ) return [array[0].toUpperCase()]
    return [array[0].toUpperCase()].concat(capitalizeAllLetters(array.slice(1)))
}

let words = ['tony', 'kim']
console.log(capitalizeAllLetters(words))