const capitalizeLetters = (str) => {
   const arr = str.split(' ')
   for(let word of arr){
    word = word[0].toUpperCase()+word.slice(1, word.length)
    console.log(word)
   }
   return arr
}


console.log(capitalizeLetters('i love javascript'))
// console.log(capitalizeLetters('hello'))
// console.log(capitalizeLetters('assa'))