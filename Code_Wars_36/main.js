/* This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt" */ 


function accum(s) {
    const array = s.split('')
    const output = []
    
    for (let i = 0; i < array.length; i++) {
      output.push(array[i].toUpperCase() + array[i].toLowerCase().repeat(i))
    }
    
    return output.join('-')
    
    }