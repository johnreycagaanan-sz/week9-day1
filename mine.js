const testing = (arr1, check) => {
//const arr1 = ['hello', 'world', 'one']
//const check = 'db'
console.log(check)
counter = 0;
const arr2 = arr1.filter(word => { 
  for( let i =0; i < check.length -1 ;i++){
    if (word.contains(check[i])){
      break;
    }counter++
  }
})
}

console.log(testing(['hello', 'world', 'one'], 'db'))