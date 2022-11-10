// const arr = [2, 3, 1, 5];

// const sortArray = (arr) => {
//     return arr.sort();
// }

// const sortArray2 = arr => {
//     const sortedArray = [];
//     for (let i = 0; i < arr.length; i++){
//         for(let j = i+1; j < arr.length; j++){
//             if (arr[j] < arr [i]){
//                 let temp = arr[j];
//                 arr[j] = arr[i];
//                 arr[i] = temp;
//             }
//         }
//     }
// }

// console.log(sortArray(arr));

const performance = require('perf_hooks').performance;

const arr1 = [2, 3, 1, 5, 20, 10, 7, 19, 6, 11, 4, 8, 19, 9, 12, 13, 18, 17, 16, 14, 15 ];

// Option A

const pushNumberToArray1 = (arr, num) => {
    const lastIndex = arr.length -1
    for (let i = 0; i < arr.length; i++) {
        if (i === lastIndex) {
            arr.splice(lastIndex, 0 , num);
        }
    }
    return arr;
}

// Option B

const pushNumberToArray2 = (arr, num) => {
    return arr.push(num);
}

    const t0 = performance.now()
    pushNumberToArray1(arr1, 21);
    const t1 = performance.now();
    console.log(`Time to complete: ${(t1-t0)/1000}`);

    const t2 = performance.now()
    pushNumberToArray2(arr1, 21);
    const t3 = performance.now();
    console.log(`Time to complete: ${(t3-t2)/1000}`);

    // arr1.push(1)

    // arr1.indexOf(3)

    // const twoSum = (num1, num2) => {
    //     return num1 + num2
    // }


    // Log Time Complexity 0 (log n)

    // const logTime = (arr) => {
    //     let numberOfLoops = 0;

    //     for(let i = 1; i< arr.length; i*=2){
    //         numberOfLoops++
    //     }
    //     return numberOfLoops
    // }

    // console.log(logTime(arr1))


    // Linear Time Complexity 0(n)

    // for (let i = 0; i < arr1.length; i++){
    //     console.log(arr1[i])
    // }

    // while(arr1.length < 10) {
    //     console.log(arr1)
    // }

    // arr1.forEach(num => console.log(num));

    // arr1.map(num => num * 2)

    // arr1.find(num => num <10)

    // arr1.filter(num => num !==3)

    // Quadratic Time Complexity O(n^2)

    // for (let i =0; i < arr1.length; i++) {
    //     for (let j = 0; j < arr1.length; j++){

    //     }
    // }

    // for (let i =0; i < arr1.length; i++) {
    //     const newArr = arr1.map(num => num * 2)
    // }

    // Factorial Time Complexity

    // const factorial = (n) => {
    //     let num = n;

    //     if (n === 0 ) return 1;
    //     for (let i =0; i <n; i++){
    //         num = n * factorial(n - 1);
    //     }
    //     return num;
    // }

    // console.log(factorial(5))

    // Side by side linear time complexity (Ignore constants)
//     const doSomething = (arr1) => {
//     for (let i = 0; i < arr1.length; i++){
//     }

//     for (let j = 0; j < arr1.length; j++){
//     }
// }

// n+n+n ---> 3n ---> n

//Consolidating time complexity

// const someFunction = (arr1) => {
//     let sum = arr1[1] + arr1[2]; //O(1)

//     while(condition){{ //O(n) * O(1)
//         sum = arr1[5] + arr1[6]
//     }}

//     for(let i = 0; i < arr1.length; i++){ //O(n) * O(n)
//         for(let j = 1; j < arr1.length; j++){
//         }
//     }
// }

// 1+ n + n^2 ---> n + n^2 ---> n^2

// const someFunction2 = (arr1) => {
//     arr1.push(1).pop(); //O(1) + O(1)

//     for(let j =1; j <arr1.length; j++){// O(n)
//     }

//     for(let j =1; j <arr1.length; j++){
//     }

//     for(let j =1; j <arr1.length; j++){
//         for(let j =1; j <arr1.length; j++){
//             for(let j =1; j <arr1.length; j++){
//             }
//         }
//     }
// }

//Linear Space - O(n)
// 'This is a text'

// [1, 2, 3, 4, 5]

// const object = {
//     name: 'tony'
// }


// object.age =44 // O(1) - Time Complexity
// object.age // O(1) - Time Complexity


// delete object.age // O(1) -Time Complexity

// object.hasOwnProperty['name'] // O(n) - Time Complexity

// for (const prop in object) {
//     console.log (object[prop]) // O(n) - Time Complexity
// }

// Object.keys(object) // O(n) - Time Complexity

// Object.values(object) // O(n) - Time Complexity

// ARRAY TIME COMPLEXITIES

// const arr2 = [1, 2, 3, 4, 5]

// arr2.push(8) // O(1) -Time Complexity
// arr2.pop() // O(1) -Time Complexity

// arr2.unshift(8) // O(n) -Time Complexity 
// arr2.shift(8) // O(n) -Time Complexity 


// const findNumber = arr2.find(num => num ===2) // O(n) - Time Complexity

// const getNumber = arr2[4] // O(1) - Time Complexity

// arr2.splice(1, 1, 5) // O(n) - Time Complexity

// arr2.reduce((total, num) => total + num, 0) // O(n) - Time Complexity
