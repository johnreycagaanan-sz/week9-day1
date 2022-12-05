const validCard = (nums) =>{
    const numsArr = [0,1,2,3,4,5,6,7,8,9]
    if(!nums.startsWith('4') && !nums.startsWith('5') && !nums.startsWith('6')) return false
    const obj = {numbers: 0, hyphen: 0}
    for(let i of nums){
        if(i in numsArr) {
            obj.numbers++
        }else if(i === '-'){
            obj.hyphen++
        }else{
            return false
        }
    }
    if(obj.numbers!==16) return false
    if(obj.hyphen===0) return noHyphen(nums)
    if(obj.hyphen===3) return hyphenated(nums)
    return false
}

const noHyphen = (nums) =>{
    let count = 1
    for(let i = 1; i < nums.length; i++){
        if(nums[i] !== nums[i-1]) count = 1
        else count++
        if(count ===4) return false
    }
    return true
}

const hyphenated = (nums) =>{
    let count = 1;
    let numCounter = 0
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== nums[i-1]) count = 1
        else count++
        if(nums[i]==='-') numCounter = 0
        else numCounter++
        if(count ===4 || numCounter >4) return false
    }
    return true
}
console.log(validCard('4231123456788765'))
console.log(validCard('4444123456788765'))
console.log(validCard('4443123455536765---'))
console.log(validCard('44431234555367aa---'))
console.log(validCard('4443-1234-5553-6765'))
console.log(validCard('44431234-5553-6765'))
console.log(validCard('4443-3333-5553-6765'))
console.log(validCard('4443-3323-5553-5555'))













