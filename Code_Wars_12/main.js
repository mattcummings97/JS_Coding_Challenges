/* The Task Is Simple: Print Intergers 1 to N; but print 'Fizz; if interger is divisble by 5, and 'Buzz' if an interger is divisible by 5, and 'FizzBuzz' if an interger is divisible by both 3 and 5 */ 

function fizzBuzz(){
    for(i=1;i<30;i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log('FizzBuzz')
        }else if(i % 3 === 0){
            console.log('Fizz')
        }else if(i % 5 === 0){
            console.log('Buzz')
        }else{
            console.log(i)
        }
    }
}

fizzBuzz()