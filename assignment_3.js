//! Problem 1
const solution = (nums) =>{
    const n = nums.length;
    if (n < 1 || n > 5* 104) return -1

    let max = 0, object = {};
    for(let num of nums){
        if(num <-109 || num >109) return -1
        object[num] = (object[num] || 0) +1
    }

    for(let key in object){
        if(object[key] > max){
            maxValue = object[key]
        }
    }
    for(let key in object){
        if (object[key] === maxValue){
            return key
        }
    }
}

console.log(solution([2,2,1,1,1,2,2]))
console.log(solution([3,2,3]))
console.log(solution([5,5,6,6,6]))

//!Problem 2
const subsequence = (str1, str2) => {
    
    const str1Con = str1.replace(/\s/g, "");
    const str2Con = str2.replace(/\s/g, "");
    let i = 0, j = 0;
    if(str1Con.length > str2Con.length) return false

    while(i < str1Con.length && j < str2Con.length){
        if(str1Con[i] === str2Con[j]){
            i++;
            j++;
        }
        else{
        j++
        }

    }
    return i == str1Con.length

}

console.log(subsequence('hello', 'hello world')) //true
console.log(subsequence('sing', 'sting')) //true
console.log(subsequence('abc', 'abracadabra')) //true
console.log(subsequence('abc', 'acb')) //false

//!Problem 3

const longestSubstringInString = (str) => {
    if(str.length<2) return str.length;
    let longest = 0;
    let count=0;
    let temp={}
    for (let i = 0; i < str.length; i++) {
        if(temp[str[i]]!==undefined){       
            i=temp[str[i]];
            temp={}
            longest = Math.max(longest, count);
            count = 0;
        }else{
            temp[str[i]]=i
            count = count+1;
        }
        
    }
    return Math.max(longest, count);
};

console.log(longestSubstringInString('')) // 0
console.log(longestSubstringInString('rithmschool')) // 7
console.log(longestSubstringInString('thisisawesome')) //6
console.log(longestSubstringInString('thecatinthehat')) //7
console.log(longestSubstringInString('bbbbbb')) //1
console.log(longestSubstringInString('longestsubstring')) //8
console.log(longestSubstringInString('thisishowwedoit')) //6

//!Problem 4

const binaryIterativeSearch = (nums, target) => {
    if(nums.length <1 || nums.length > 10000) return -1
    let min = 0, max = nums.length -1;
    if(nums[min] < -9999 || nums[max] > 9999) return -1
    while(min < max){
        let middleIndex = Math.floor((min+max)/2)
        if (target === nums[middleIndex]){
            return middleIndex;
        }else if(nums[middleIndex] < target){
            min = middleIndex +1;
        }else{
            max = middleIndex -1;
        }
    }
    return -1;
}


console.log(binaryIterativeSearch([-1, 0, 3, 5, 9, 12], 9))