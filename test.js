const getRange = (startRange, endRange) => {
  if(startRange===endRange - 1) return []
  return [startRange+1].concat(getRange(startRange + 1, endRange))
}

console.log(getRange(2,9))
