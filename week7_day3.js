//! Problem # 1

const reverseString = (str) => {
    if(str.length===1) return str
    return str[str.length - 1].concat(reverseString(str.slice(0,str.length-1)))
}

//! Problem # 2

const isPalindrome = (str) => {
    let first = 0, last = str.length -1
    while(first <= last){
        if(str[first] !== str[last]){
            return false
        }
        first++
        last--
    }
    return true
}

//! Problem # 3
const reverseInt = (int) => {
    const string = int.toString()
    if (string.length === 1) return string
    return Number(string[string.length - 1].concat(reverseInt(string.slice(0, string.length -1))))
}

//! Problem # 4
const capitalizeLetters = (str) => {
    const arr = str.split(' ')
    for(let i = 0; i < arr.length; i++){
       arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1,arr[i].length)
    }
    return arr.join(' ')
}

//! Problem # 5
const maxCharacter = (str) => {
    let freq = {}
    let max = 0
    let maxLetter = ''
    for(let i = 0; i < str.length; i++){
        freq[str[i]] = (freq[str[i]] || 0) + 1
    }
    for(let letter in freq){
        if (freq[letter] > max){
            max = freq[letter]
            maxLetter = letter
        }
    }
    return maxLetter
}

//! Problem # 6
const fizzBuzz = () => {
    for(let i = 1; i <= 100; i++ ){
        if((i % 3 === 0) && (i % 5 ===0) ) console.log('FizzBuzz')
        else if(i % 3 === 0) console.log('Fizz')
        else if(i % 5 === 0) console.log('Buzz')
        else console.log(i)
    }
}

//! Problem # 7
const longestWord = (sen) => {
    const arr = sen.split(' ')
    let maxLength = 0, maxWord = ''
    for(let word in arr){
        if(arr[word].length > maxLength) {
            maxLength = arr[word].length
            maxWord = arr[word]
        }
    }
    return maxWord
}

//! Problem # 8
const chunkArray = (arr, len) => {
    
}























//! Problem # 18
const canBeTypedWords = (text, brokenLetters) => {
    if(text.length <1 || text.length >104) return -1
    if(brokenLetters.length <1 || brokenLetters.length >104) return -1
    const textArr = text.split(' ')
    let counter = 0;
    let i = 0
    const lastBrokenLetter = brokenLetters[brokenLetters.length -1]
    while(i < textArr.length){
        for(let j = 0; j < brokenLetters.length ; j++){
            if(brokenLetters[j]=== lastBrokenLetter && !(textArr[i].includes(brokenLetters[j]))) counter++
        }
        i++
    }
    return counter
}

