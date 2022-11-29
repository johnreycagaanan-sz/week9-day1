const totalMoney = (n) => {
    let day = 1
    let start = 0
    let toAdd = 0, total =0
    while(day <= n){
        start+=1
        for(let i = 0;i < 7 && !(day>n); i++){
            toAdd = start + i
            // console.log(` AFTER DAY ${day}: TOADD IS ${toAdd}`)
            total+=toAdd
            day++
        }
        // total+=toAdd
        // console.log(`TOTAL IS ${total}`)
        toAdd = 0
    }
    return total
}

console.log(totalMoney(10))
console.log(totalMoney(4))
