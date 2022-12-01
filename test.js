const getDecimalValue = (head) => {
    let sum = 0
    head.reverse()
    for(let i = 0,j = 1; i < head.length; i++, j*= 2){
        if(head[i] === 1) sum+= j
    }
    return sum
}
console.log(getDecimalValue([1,0,1]))