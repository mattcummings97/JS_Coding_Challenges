/* Convert number to reversed array of digits

Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

*/ 

function digitize(n) {
    const arrayOfDigits = Array.from(String(n), Number);
    let reversedArray = arrayOfDigits.reverse('')
    return reversedArray 
  }