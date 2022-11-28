//! Problem # 1

const reverseString = (str) => {
    if(str.length===1) return str
    return str[str.length - 1].concat(reverseString(str.slice(0,str.length-1)))
}
// console.log(reverseString('Let\'s Start'))
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
// console.log(isPalindrome('racecar'))
// console.log(isPalindrome('hello'))

//! Problem # 3
const reverseInt = (int) => {
    const string = int.toString()
    if (string.length === 1) return string
    return Number(string[string.length - 1].concat(reverseInt(string.slice(0, string.length -1))))
}
// console.log(reverseInt(521))


//! Problem # 4
const capitalizeLetters = (str) => {
    const arr = str.split(' ')
    for(let i = 0; i < arr.length; i++){
       arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1,arr[i].length)
    }
    return arr.join(' ')
}

// console.log(capitalizeLetters('i love javascript'))


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

// console.log(maxCharacter('javascript'))

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
    let maxWord = ''
    for(let word in arr){
        if(arr[word].length > maxWord.length) {
            maxWord = arr[word]
        }
    }
    return maxWord
}

// console.log(longestWord('Hi there, my name is Brad'))

//! Problem # 8
const chunkArray = (arr, len) => {
    let i = 0
    let newArr = []
    let toPush = []
    while(i < arr.length){
        toPush.push(arr[i])
        if(i === arr.length - 1){
          newArr.push(toPush)
          return newArr
        }
        if(toPush.length === len){
          newArr.push(toPush)
          toPush = []
        }
        i++
    }
  }

// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3))
// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 2))


//! Problem # 9

const flattenArray = (arrays) => {
    if(!arrays.length) return []
    let newArr = []
    for(let element of arrays){
        if(typeof element === 'number'){
            newArr.push(element) 
        }else{
            newArr = newArr.concat(flattenArray(element))
        }
    }
    return newArr
}

// console.log(flattenArray([[1, 2], [3, 4], [5, 6], [7]]))

//! Problem # 10
const isAnagram = (str1, str2) => {
    let lettersInStr1 = str1.replace(/[^a-zA-Z]/gm,"").toLowerCase()
    let lettersInStr2 = str2.replace(/[^a-zA-Z]/gm,"").toLowerCase()

    let obj1 = {}
    let obj2 = {}
    for(let letter in lettersInStr1){
        obj1[lettersInStr1[letter]] = (obj1[lettersInStr1[letter]] || 0) +1
    }
    for(let letter in lettersInStr2){
        obj2[lettersInStr2[letter]] = (obj2[lettersInStr2[letter]] || 0) +1
    }
    for(let letter in obj1){
        if(obj1[letter]!== obj2[letter]) return false
    }
    for(let letter in obj2){
        if(obj2[letter]!== obj1[letter]) return false
    }
    return true
}

// console.log(isAnagram('elbow', 'below'))
// console.log(isAnagram('elbo', 'below'))
// console.log(isAnagram('elbow', 'belo'))
// console.log(isAnagram('Dormitory', 'dirtyroom###'))


//! Problem # 11
const letterChanges = (str) => {
    if (!str.length) return ''
    let newString = ''
    for(let i = 0; i < str.length; i++){
        if(str[i] === ' '){
            newString = newString + ' '
        }else if(str[i] === 'z'){
          newString = newString + String.fromCharCode(97).toUpperCase()
        }else if(str[i] === 'd' || str[i] === 'n' || 
        str[i] === 't' || str[i] === 'h'){
          newString = newString + String.fromCharCode(str[i].charCodeAt(0)+1).toUpperCase()
        }else{
          newString = newString + String.fromCharCode(str[i].charCodeAt(0)+1)
        }
    }
    return newString
  }

// console.log(letterChanges('hello there'))
// console.log(letterChanges('zzzd'))


//! Problem # 12
const addAll = (...args) =>{
    let sum = 0
    for(let i = 0; i < args.length; i++){
        sum+=args[i]
    }
    return sum
}

// console.log(addAll(2,5,6,7))


//! Problem # 13
const isPrime = (n) => {
    if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) return false;
    if (n == leastFactor(n)) return true;
    return false;
}

const leastFactor = (n) => {
    if (isNaN(n) || !isFinite(n)) return NaN;
    if (n == 0) return 0;
    if (n % 1 || n * n < 2) return 1;
    if (n % 2 == 0) return 2;
    if (n % 3 == 0) return 3;
    if (n % 5 == 0) return 5;
    var m = Math.sqrt(n);
    for (var i = 7; i <= m; i += 30) {
        if (n % i == 0) return i;
        if (n % (i + 4) == 0) return i + 4;
        if (n % (i + 6) == 0) return i + 6;
        if (n % (i + 10) == 0) return i + 10;
        if (n % (i + 12) == 0) return i + 12;
        if (n % (i + 16) == 0) return i + 16;
        if (n % (i + 22) == 0) return i + 22;
        if (n % (i + 24) == 0) return i + 24;
    }
    return n;
}
const sumAllPrimes = (num) => {
    if(num < 2) return 0
    let sum = 0
    for(let i = 2; i <= num; i++){
        if(isPrime(i)) sum+=i
    }
    return sum
}

// console.log(sumAllPrimes(10))


//! Problem # 14

const seekAndDestroy = (...args) => {
    let filtered = args[0]
    for(let i = 1; i < args.length; i++) {
        filtered = filtered.filter(element => {return element!==args[i]})
    }
    return filtered
}

// console.log(seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6))


//! Problem # 15
const sortByHeight = (arr) => {
    let people = []
    let toReturn =[]
    let pushIndex = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i]!== -1) people.push(arr[i])
    }
    const sortedPeople = people.sort((a,b) => {return a-b})
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === -1) toReturn.push(-1)
        else {
            toReturn.push(sortedPeople[pushIndex])
            pushIndex++
        }
    }
    return toReturn
}

// console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]))


//! Problem # 16

const missingLetters = (str) => {
    let code = 96
    for(let i = 0; i < str.length; i++){
        // console.log(`CURRENT CODE: ${code}`)
        // console.log(`code ni ${str[i]} kay ${str.charCodeAt(i)}`)
        // console.log(`*********************************************************************`)
        if(str.charCodeAt(i)!==code+1) return (String.fromCharCode(code+1))
        code = str.charCodeAt(i)
    }
    // console.log(`CURRENT CODE: ${code}`)
    if(code === 121) return 'z'
    else return undefined
}
// console.log(missingLetters("abce"))
// console.log(missingLetters("abcdefghjklmno"))
// console.log(missingLetters("abcdefghijklmnopqrstuvwxyz"))
// console.log(missingLetters("bcde"))
// console.log(missingLetters("abcdefghijklmnopqrstuvwxy"))



//! Problem # 17

const evenOddSums = (arr) => {
    let evenSum = 0
    let oddSum = 0
    for(let i =0;i < arr.length ; i++){
        if(arr[i]%2 === 0) evenSum+=arr[i]
        else oddSum+=arr[i] 
    }
    return [evenSum, oddSum]
}

// console.log(evenOddSums([50, 60, 60, 45, 71]))

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
// console.log(canBeTypedWords('hello world', 'ad'))
// console.log(canBeTypedWords('leet code', 'lt'))
// console.log(canBeTypedWords('leet code', 'e'))