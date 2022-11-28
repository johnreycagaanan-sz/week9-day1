const letterChanges = (str) => {
  if (!str.length) return ''
  let newString = ''
  for(let i = 0; i < str.length; i++){
      if(str[i] === ' '){
          newString = newString + ' '
      }else if(str[i] === 'z'){
        newString = newString + String.fromCharCode(97).toUpperCase()
      }else if(str[i] === 'd' || str[i] === 'n' || 
      str[i] === 't' || str[i] === 'h'){
        newString = newString + String.fromCharCode(str[i].charCodeAt(0)+1).toUpperCase()
      }else{
        newString = newString + String.fromCharCode(str[i].charCodeAt(0)+1)
      }
  }
  return newString
}

  console.log(letterChanges('hello there'))