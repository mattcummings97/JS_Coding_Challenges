/* Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output) */ 

function sumDigits(number) {
    let makePositive = Math.abs(number)
    const arrOfDigits = Array.from(String(makePositive), Number); 
    return arrOfDigits.reduce((a, b) => a + b, 0);
  }

