/* Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.*/ 

function removeEveryOther(arr){
    for(let index = 0; index < arr.length; index++){
      arr.splice(index+1,1)
    }
  return arr
  }