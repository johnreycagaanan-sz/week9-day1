//!Problem 1: In 3-4 sentences, please explain what Big O Notation is. 
    // The Big O Notation is a representation to describe the complexity of algorithms.
    // It classifies them according to how the run time or space requirements grow as more data
    // is inputted. The five major classifications are Constant Time Complexity(O(1)),
    // Log Time Complexity(O(log n)), Linear Time Complexity(O(n)), Quadratic Time Complexity(O(n^2)),
    // and Factorial Time Complexity(O(n!)).


//! Problem 2: For each of the time complexities shown below: 
//?    - Name the complexity
//?    - Rank from 1-5 (1 being the best, 5 being the worst) 
//?    - Describe in 1-2 sentences of the complexity
//?    - Provide a code example of how the complexity works  

// 1 - Constant Time Complexity O(1) - This is the best type of complexity because it is a single task and
//                                     it does not need to reiterate on other data no matter the size of the
//                                     object or array is.

//     Example:

         const add = (num1, num2) => {
          return num1 + num2;
         }

         console.log(add(1,2))
// 2 - Log Time Complexity O(1)      - This is an acceptable type of complexity because as the size of the data
//                                     gets larger and larger, the number of operations increase by only a small amount.
//     Example:

        const logTime = (arr) => {
            let sum = 0, toSkip = 1, num1=arr[0], num2; 
             for(let i = 1; i < arr.length; i=i+toSkip){
                  num2 = arr[i];
                  sum = num1 + num2;
                  num1 = sum;
                  toSkip++
                 }
                 return sum
         }

         console.log(logTime([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]))

// 3 - Linear Time Complexity O(n)     - This is the most common type of complexity because this
                                     //  means that the time complexity is directly proportional to
                                     //  the number of data.


//      Example: 

         const linear = (arr) => {
                for(let i = 0; i < arr.length; i++){
                        console.log(arr[i])
                }
         }

       linear([1, 2, 3])

// 4 - Quadratic Time Complexity O(n^2)  - This means that as the data set increases, the amount of time
                                        //    needed to execute the code is the number of data squared.
                                        // This means that it will take some time to execute it.
        
//      Example:

         const quadratic = (arr) => {
                for (let i =0; i < arr.length; i++){               
                        for (let j = 0; j < arr[i].length; j++){          
                                console.log(arr[i][j])
                        }
                }
         }

         quadratic([[1, 2, 3],[4, 5, 6]])

// 5 -  Factorial Time Complexity O(n!)  -This is the most unacceptable type of complexity because a lot of
                                        //   of time is needed to execute the code even if the data small.

//      Example:

                const factorial = (n) => {
                        let num = n;

                        if (n === 0 ) return 1;
                        for (let i =0; i <n; i++){
                        num = n * factorial(n - 1);
                        }
                        return num;
                }

        console.log(factorial(4))

//! Problem 3: Name 3 reasons why we care about Big O and we care about code performance.
        
        // 1. Scalability
        // 2. Time is money
        // 3. Demonstrate code competency in interviews
        // We care about code performace because if our software is laggy, we might lose our clients

//!Problem 4: What is the problem of using a time method such as performance.now() to measure how “fast” a code runs on our machines.

        // We cannot assess the performance of the code accurately because of factors
        // outside of our code such as the performance of the computer unit you are running it with and other things

//! Problem 5: Given the following piece of code: 
        //? - Explain what the TOTAL time complexity is 
        //?  For example, if a function had one linear and a nested for…loop, it would be: n + n^2
        //? - Explain what the CONSOLIDATED time complexity is
        //?  For example, if a function had one linear and a nested for…loop, it would condense to: n^2

        const someFunction = (arr1) => {
                arr1.push(1).pop() // O(1)
                
                for (let i = 0; i < arr1.length; i++) { // O(n)
                console.log('do something 2') 
                }
                
                for (let i = 0; i < arr1.length; i++) { // O(n)
                console.log('do something 3')
                }
                
                for (let i = 0; i < arr1.length; i++) { // O(n) * O(n) = O(n^2)
                for (let i = 0; i < arr1.length; i++) {
                console.log('do something 3')
                        }
                }
        }

        // Total time complexity = O (n+n+n^2) = O(2n + n^2)
        // Consolidated time complexity = O(n^2)

//! Problem 6:

const someFunction1 = (arr1) => {
        let sum = arr1[1] + arr1[2] // O(1)
        
        while (condition) {  // O(n * 1) = O (n)
        sum = arr[5] + arr[7]
        }
        
        for (let i = 0; i < arr1.length; i++) { // O(n * n * n) = O (n ^ 3)
        for (let i = 0; i < arr1.length; i++) {
        for (let i = 0; i < arr1.length; i++) {
        console.log('do something 3')
        }
        }
        }
}

        // Total time complexity = O (1 + n + n^3) = O(n^3 +n +1)
        // Consolidated time complexity = O(n^3)

//! Problem 7: Please explain in 3-5 sentences why we can ignore constants and consolidate our time complexities.

        //Constants are negligible because their impact is minimal on the performance of the code.
        //Whenever there are multiple complexities in a code, we can consolidate because the heaviest
        //time complexity will have the biggest impact on the code. 

//! Problem 8: In 2-3 sentences, please explain what space complexity is and why we care.       

        // Space complexity is how much space our code takes in the memory. We care about it
        // to know how much memory we should allocate for a certain code.

//! Problem 9: Given the following data TYPES, label what the space complexity is for each one: 
        //? - Boolean      ---> Constant Space Complexity
        //? - Undefined    ---> Constant Space Complexity
        //? - Null         ---> Constant Space Complexity
        //? - Numbers      ---> Constant Space Complexity
        //? - String       ---> Linear Space Complexity
        //? - Array        ---> Linear Space Complexity
        //? - Object       ---> Linear Space Complexity

//! Problem 10: Give two reasons when you should use a array and when you should use a object.

        // You should use arrays when you need fast access to elements and if the data doesnt need ordering.
        // If you dont need fast access to elements and the data doesnt need ordering, use object instead.

//! Problem 11: Given the following object methods, label what the TIME complexity is for each one:

const obj = {
        name: 'tony'                    
       }
       //inserting
       obj.age = 44;                    //? O(1)
       //removing 
       delete obj.age;                  //? O(1)
       //searching 1
       obj.hasOwnProperty['name']       //? O(n)
       //searching 2
       for (const prop in obj) {
        console.log(obj[prop])          //? O(n)
       }
       //accessing
       obj.age //44                     //? O(1)
       //retrieving keys
       Object.keys(obj)                 //? O(n)
       //retrieving values
       Object.values(obj)               //? O(n)

//! Problem 12: Given the following array methods, label what the TIME complexity is for each one:

const arr2 = [1, 2, 3, 4, 5, 6, 7];
//inserting 1
arr2.push(8)                                                    //? O(1)     
//inserting 2
arr2.unshift(0)                                                 //? O(n)
//removing 1
arr2.pop()                                                      //? O(1)
//removing 2
arr2.shift()                                                    //? O(n)
//searching 1
const findNumber = arr2.find(num => num === 2)                  //? O(n)
//searching 2
for (let i = 0; i < arr2.length; i++) {                         //? O(n * n) = O(n^2) 
 if (arr2[i] === 2) {
 return arr2[i]
 }
}
//retrieving 
const getNumber = arr2[3]                                       //? O(1)
//method 1
const double = arr2.map(num => num * 2)                         //? O(n)
//method 2
const removeAndAddNewNumber = arr2.splice(1, 1, 5)              //? O(n)
//method 3
const getSum = arr2.reduce((total, num) => total + num, 0)      //? O(n)
//method 4
for (const num of nums) {                                       //? O(n)                          
 console.log(num * 2)
}
//method 5
const convertToString = arr2.join(' ')                          //? O(n)                    
//method 6
const reversed = arr2.reverse();                                //? O(n)

//! Problem 13: For each one of these code blocks, please identify the time & space complexity and explanation of why it is

//? Problem 1:

        function findFirstIndexOfNumber(number, array) {
                for (let i = 0; i < array.length; i++) { // O(n)
                        if (array[i] === number) {      // O(1)
                                return i; 
                        }
                }
                return -1
         }
//TOTAL TIME COMPLEXITY = O(n * 1) = O(n)
//CONSOLIDATED TIME COMPLEXITY = O(n)
//SPACE COMPLEXITY = O(1)
//Explanation:
//It is a constant space complexity because no matter the size of the array and the number
//you are looking for, the function always returns a single number which is the index of the number in the argument.
//The for loop runs n times thats why its time complexity is O(n). The if statement then runs
//at O(1) so if you multiply it you get O(n).
//? Problem 2:

        function findEachIndexOfNumber(number,array) {
                let arrayOfIndexes = [];        //O(1)
                array.forEach(function(element, index) {        //O(n)
                if (element === number) {               //O(n)
                        arrayOfIndexes.push(index);       
                        }
                });
                return arrayOfIndexes;                  //O(1)
        }
//TOTAL TIME COMPLEXITY = O(1) + O(n ^ 2)
//CONSOLIDATED TIME COMPLEXITY = O(n ^ 2)
//SPACE COMPLEXITY = O(n)
//Explanation:
//It is a linear space complexity because the resulting array is not a fixated length.
//The time complexity of line 258 is linear because it checks all the numbers in the array.
//The time complexity of line 259 is also linear because it checks each element if it equates to
//the number. Therefore the time complexity is O(n ^ 2) and it is also the consolidated time complexity
//because it is the heaviest part in the code.

//? Problem 3: 

        const array3 = [36, 14, 1, 7, 21];
        function higherOrLower(array) {
        if (array[array.length -1 ] > array[0]) { //O(1)
                return "Higher";
        } else if (array[array.length -1 ] < array[0]) { // O(1)
                return "Lower";
                } else {                //O(1)
                        return "Neither";
                }
        }

//TOTAL TIME COMPLEXITY = O(1) + O(1) + O(1)
//CONSOLIDATED TIME COMPLEXITY = O(1)
//SPACE COMPLEXITY = O(1)
//Explanation: 
//The total time complexity is constant for each conditions since it only checks the first
//and last element in the array no matter its size is. Therefore the consolidated time is also
//O(1). The space complexity is O(1) because it always return a single string.

//? Problem 4:

        const array4 = [1,2,3,4,5,6,7,8];
        function determineSumOfSequentialArray(array) {
                let sum = 0;                          //O(1)
                for (let i = 0; i < array.length; i++) {   //O(n)     
                        sum += array[i];
                }
        return sum;             //O(1)
        }
//TOTAL TIME COMPLEXITY = O(1) + O(n)
//CONSOLIDATED TIME COMPLEXITY = O(n)
//SPACE COMPLEXITY = O(1)
// Explanation: 
// The initialization of a variable is a constant time complexity and the for loop is a 
// linear time complexity. Adding both algorithm we get O(n) + O(1) so the consolidated time is
//O(n) because it is the one that has the most impact. Also the space complexity is constant because
//as the array increases, it always return a single output which is the sum.

//? Problem 5:

        const array5 = [1,2,3,4,5,6,7,8];       //O(1)
        function determineSumOfSequentialArray(array) {
                return array.length * (array.length + 1)/2;      //O(1)
        }
// TOTAL TIME COMPLEXITY = O(1)
// CONSOLIDATED TIME COMPLEXITY = O(1)
// SPACE COMPLEXITY = O(1)

// Explanation: 
// The total time complexity is equal to the consolidated time complexity because the function
// has only 1 statement. It is O(1) because it only checks for the length of the array and not the array itself
// The space complexity is also O(1) because it always return a single number which is constant in complexity.

//? Problem 6:

        function searchSortedArray(number, array, beginIndex = 0, endIndex = array.length - 1) {
                let middleIndex = Math.floor((beginIndex + endIndex)/2);        //O
                if (array[middleIndex] === number) { // O(1)
                        return middleIndex;    
                } else if (beginIndex >= endIndex) { // O(1)
                        return -1;
                } else if (array[middleIndex] < number) { // O(1)
                        beginIndex = middleIndex + 1;
                        return recursiveBinarySearch(number, array, beginIndex, endIndex);      // O(log n)
                } else if (array[middleIndex] > number) {
                        endIndex = middleIndex - 1;
                        return recursiveBinarySearch(number, array, beginIndex, endIndex);    //O(log n)
                }
        }
//TOTAL TIME COMPLEXITY = O(1) + O(1) + O(1) + O(log n) + O(log n) = 2log(n) + O(1)
//CONSOLIDATED TIME COMPLEXITY = O(log n)
//SPACE COMPLEXITY = O(1)
//Explanation:
//The total time complexity is 2log(n)+O(1) because there are two log n statements and 3 constant statements.
//The constant is negligible so the highest time complexity is log n. The space complexity however
//is O(1) because no matter the size of the array, it always return just a single number which is the middleIndex.
//? Problem 7: 

        const array1 = [3, 7, 9, 12, 15, 18, 32];
        const array2 = [3, 3, 7, 41, 76];
        function compareArrays(array1, array2) {
                let arrayOfPairs = [];          //O(1)
                array1.forEach(function(e, i) { // O(n)
                        array2.forEach(function(e2, i2) { //O(n)
                                if (e === e2) {              //O(1)
                                        arrayOfPairs.push([i, i2]);
                                }
                        });
                });
 return arrayOfPairs;
 }

//TOTAL TIME COMPLEXITY = O(n *n *1) + O(1) = O(n ^ 2) + O(1)
//CONSOLIDATED TIME COMPLEXITY = O(n ^ 2)
//SPACE COMPLEXITY = O(n)
//Explanation:
//The outer for loop is a O(n) time complexity because it loops through the first array. The second
//for loop which is inside the first is also a O(n) time complexity. Line 362 is a constant because
//it only executes once each loop so if you multiply them you get O(n ^ 2). It is also the most complex
//time complexity so it is the consolidated time complexity.
//The space complexity on the other hand is O(n) because the resulting arrayOfPairs doesnt have a definite
//number of elements which means depending on array1 and array2, it could have more or less elements inside.

//? Problem 8:

        function sortByValue(array){
                function swap(array, index1, index2){
                        let temporaryValue = array[index1];     // O(1)
                        array[index1] = array[index2];          // O(1)
                        array[index2] = temporaryValue;         // O(1)
                }
                let count = 1;
                while (count < array.length) {                  //O(n)
                        let swapCount = 0;                      //O(1)
                        for (let i=0; i<array.length-count; i++) {      //O(n)
                                if (array[i] > array[i+1]) {            //O(1)
                                        swap(array, i, i+1);
                                        swapCount++;                    //O(1)
                                }
                        }
                        count++;
                }
                return array;
        }
//TOTAL TIME COMPLEXITY = O(n ^ 2) + O(1)
//CONSOLIDATED TIME COMPLEXITY = O(n ^ 2)
//SPACE COMPLEXITY = O(1)
//Explanation:
//Neglecting all the constant time complexities, the total time complexity would be O(n ^ 2).
//The space complexity is O(1) because the output array always equal to the number of elements in the
//input array
//? Problem 9: 

        function returnDupes(array, array2) {
                let dupeArray = [];
                array.forEach(function(element) {       // O(n)
                        if (array2.includes(element)) {         //O(n)
                                dupeArray.push(element);        //O(1)
                        }
                });
                return dupeArray;
        }
//TOTAL TIME COMPLEXITY = O(n *n *1) = O(n ^ 2)
//CONSOLIDATED TIME COMPLEXITY = O(n ^ 2)
//SPACE COMPLEXITY = O(n)
//Explanation:
//The outer forEach checks for all the elements inside the first array which means it is O(n) in time complexity.
//The inside if statement also checks for all the elements inside the second array which means it is also O(n). The
//inner statement is just a constant time complexity because it just pushes an element. Multiplying them,
//the result would be O(n ^ 2) which is also the consolidated time complexity.
//The space complexity is O(n) because the dupeArray is not fixed in size. It could contain more or less
//depending on the 2 input arrays.
//? Problem 10:

        function sumFilteredData(array) {
                return array.filter(function(element) { //O(n)
                        return ((element > 5) && (element < 20))
                }).reduce(function(valueToAdd, currentValue) {  //O(n)
                        return valueToAdd + currentValue;       //O(1)
                }, 0);
        }

//TOTAL TIME COMPLEXITY = O(n) + O(n) + O(1)
//CONSOLIDATED TIME COMPLEXITY = O(n)
//SPACE COMPLEXITY = O(1)
//Explanation:
//The total time complexity is O(2n). Neglecting the constant,
//the consolidated time complexity is equal to O(n).
//The space complexity is O(1) because it always just returns the sum of the filtered array.