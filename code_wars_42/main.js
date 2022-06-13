/* Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.*/ 

function reverseWords(str) {
    let reverseStr = str.split(" ").map(word => word.split('').reverse().join(""))
   console.log(reverseStr.join(' '));
  }
  
  reverseWords("This is an example!")