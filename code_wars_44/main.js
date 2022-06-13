/* Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds. */ 

function past(h, m, s){
    let hourInMill = h * 3600000
    let minInMill = m * 60000
    let secInMilli = s * 1000
    let total = hourInMill + minInMill + secInMilli 
    return total
  }