//! Problem #1
function reverseString(str, lastIndex = str.length-1, reversedArr = []){
    if(lastIndex < 0) return;
    // console.log(`THE STRING IS ${str} and the lastIndex is ${lastIndex}`)
    reversedArr.push(str[lastIndex])
    // console.log(`Reversed array is ${reversedArr}`)
    lastIndex--
    reverseString(str, lastIndex, reversedArr)
    
return reversedArr.join('')
}

// console.log(reverseString('hello'))



//! Problem #2

function palindrome(str, lastIndex = str.length-1, reversedArr = []){
    if(lastIndex < 0) return;
    // console.log(`THE STRING IS ${str} and the lastIndex is ${lastIndex}`)
    reversedArr.push(str[lastIndex])
    // console.log(`Reversed array is ${reversedArr}`)
    lastIndex--
    palindrome(str, lastIndex, reversedArr)
    
return reversedArr.join('') === str
}
// console.log(palindrome('tony'))
// console.log(palindrome('sos'))

//! Problem #3

const flatTheArray = (arr) => {
    let flattenedArr =[]
    if (!arr.length) return flattenedArr
    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] === 'number'){
            flattenedArr.push(arr[i])
        }else if(typeof arr[i] === 'object'){
            arr = arr.concat(flatTheArray(arr[i]))
        }
    }
    return flattenedArr
}

// console.log(flatTheArray([1,2,[3,4],[[5,6],7]]))
// console.log(flatTheArray([1, 2, 3, [4, 5] ]))
// console.log(flatTheArray([1, [2, [3, 4], [[5]]]]))
// console.log(flatTheArray([[1],[2],[3]]))
// console.log(flatTheArray([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]))

//! Problem 4

const capitalizeFirstLetter = (array) => {
    let newArray =[]

    for(let i = 0 ; i < array.length; i++){
        if(typeof array[i]==='string'){
            newArray.push(array[i][0].toUpperCase() + array[i].slice(1))
        } else if(typeof array[i] === 'object'){
            array = array.concat(capitalizeFirstLetter(array[i]))
        }
    }
    return newArray
}

console.log(capitalizeFirstLetter([['hello','world'],'world', 'sample']))

// const test = (string) => {
//     return typeof(string[0])
// }

// console.log(test('sample'))