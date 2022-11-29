const totalMoney = (n) => {
  let day = 1
  let start = 1
  let toAdd = 0, total =0
  let i = 0
  while(day <= n && i <= 7){
        toAdd = start + i
        total+=toAdd
        i++
        day++
      if(i===7){
        toAdd = 0
        start++
        i === 0
      }
  }
  return total
}

console.log(totalMoney(4))
console.log(totalMoney(10))

