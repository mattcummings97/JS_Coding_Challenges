//Write a function that checks if a given string (case insensitive) is a palindrome. //

function isPalindrome(x) {
    let lowerX = x.toLowerCase('')
    let revX = lowerX.split('').reverse('').join('')
    if(lowerX === revX){
      return true
    }else return false
  }