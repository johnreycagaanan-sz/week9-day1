//! Problem #1

const maxProfit = (prices) => {
    let max = 0, minPrice = prices[0];
   
    for(let i = 1; i < prices.length; i++){
     max = Math.max(max, prices[i] - minPrice)
     minPrice = Math.min(minPrice, prices[i])
    }
    return max
   } 
   
   
   console.log(maxProfit([7, 1, 5, 3, 6, 4]))
   console.log(maxProfit([7, 6, 4, 3, 1]))
   
   


//! Problem 2

const same = (arr1, arr2) => {
    let obj1 = {}, obj2 = {}
  
    for(let val of arr1){
        obj1[val] = (obj1[val] || 0) +1
    }
  
    for(let val of arr2){
      obj2[val] = (obj2[val] || 0) +1
  }
    for(let num in obj1){
      if(!((num * num * num) in obj2)) return false
      if(obj1[num] !== obj2[num * num * num]) return false
    }
   return true
  }
  
  console.log(same([1, 2, 3], [8, 1, 27]))
  console.log(same([1, 2, 3], [1, 9]))
  console.log(same([1, 2, 1], [8, 8, 1]))


//! Problem #3

const binaryIterativeSearch = (nums, target) => {
    let min = 0, max = nums.length -1;
      while(min <= max){
          let middleIndex = Math.floor((min+max)/2)
          if (target === nums[middleIndex] ){
              return middleIndex;
          }else if(target === nums[max]){
              return max
          }else if(nums[middleIndex] < target){
              min = middleIndex + 1;
          }else{
              max = middleIndex - 1;
          }
      }
      return -1;
  }
  
  console.log(binaryIterativeSearch([-1, 0 ,3, 5, 9, 12], 9))
  console.log(binaryIterativeSearch([-1, 0 ,3, 5, 9, 12], 2))


//! Problem # 4
const getRange = (startRange, endRange) => {
    if(startRange===endRange - 1) return []
    return [startRange+1].concat(getRange(startRange + 1, endRange))
  }
  
  console.log(getRange(2,9))
  