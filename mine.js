const isValid = (s) => {
    // edge cases: 
  	if (!s || s.length === 1) return false;
   let openFrequency = {'{': 0, '[': 0, '(': 0}
   let closeFrequency = {'}': 0, ']': 0, ')': 0}
   for(let string of s){
     if(string === '{' || string === '[' ||string === '('){
        openFrequency[string] = openFrequency[string] +1
    } else if(string === '}' || string === ']' ||string === ')'){
        closeFrequency[string] = closeFrequency[string] +1
    }
   }
   const open = Object.values(openFrequency)
   const close = Object.values(closeFrequency)

   
   return open.every(item => close.includes(item)) && close.every(item => open.includes(item))
 };


 console.log(isValid('())([]{}'))