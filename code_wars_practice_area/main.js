/* class Animal{
    constructor(name){
        this.name = name
    }
    speak(){
        console.log(`${this.name} makes a sound`)
    }
}

class Dog extends Animal{
    constructor(name, breed){
        super(name)
        this.breed = breed;
    }
}
let louis = new Dog('Louis', 'Frenchie')
let bronx = new Dog('Bronx', 'Boxer')

class Bird extends Animal{
    constructor(name, breed){
        super(name)
        this.breed = breed
    }
}
let polly = new Bird('Polly', 'Parrot')

class Cat extends Animal{
    constructor(name,breed){
        super(name)
        this.breed = breed;
    }
    speak(){
        console.log('Meow')
    }
}
let sagwa = new Cat('Sagwa', 'Simese') */ 


/* function reverseString(x){
let revX = x.split('').reverse('').join('')
}

x(cow) */ 

/*function highAndLow(numbers){
    numbers = '1 2 3 4 5'
    splitNum = Number(numbers.split(''))
    console.log(splitNum)

  }*/ 


  /*function findNeedle(haystack) {
    for(let i=0;i<haystack.length;i++){
      if(haystack[i]=== 'needle'){
        console.log( `found the needle at position {haystack[i]}`)
      }else{
        console.log(false)
      }
    }
  }
  findNeedle(['needle','2',2, true])*/ 

  /* function sumDigits(number) {
    let makePositive = Math.abs(number)
    const arrOfDigits = Array.from(String(makePositive), Number); 
    console.log(arrOfDigits.reduce((a, b) => a + b, 0));
  }

  sumDigits(-35)
*/ 

/*let promise = new Promise((resolve,reject) =>{
  const error = false 
  if(!error){
    resolve('Promise has been fulfilled')
  }else{
    reject('Error, Proise has failed')
  }
})

console.log(promise)
promise
.then(data=> console.log(data))
.catch(err=>console.log(err))
*/ 




/* function houseOne(resolve, reject){
  const paid = true;
  const delivered = true;
  setTimeout(() => {
    if(paid === true & delivered === true){
      resolve('House One Is Paid & Delivered')
    }else{
      reject('There was an error with House One')
    }
  },5000)
}

houseOne() */ 

/*function isIsogram(str){
  let arr = str.split('')
  for(i = 0;i)
  console.log(arr)
}

isIsogram('Jedi')*/ 

/* const promise = new Promise((resolve,reject) => {
  const error = true
  if(!error){
    resolve('Promise has been fulfilled')
  }else{
    reject('Error: Opperation has failed')
  }
})
promise 
  .then(data => console.log(data))
  .catch(err => console.log(err))

  const promise = new Promise((resolve,reject)

  ) */ 

/* const array = s.split('')
const output = []

for (let i = 0; i < array.length; i++) {
  output.push(array[i].toUpperCase() + array[i].toLowerCase().repeat(i))
}

return output.join('-') */

/* Story

Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

Task

Write a function that returns both the minimum and maximum number of the given list/array.

Examples(Input --> Output)

[1,2,3,4,5] --> [1,5]
[2334454,5] --> [5, 2334454]
[1]         --> [1, 1]
Remarks

All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.*/ 

/* unction minMax(arr){
  let x = Math.max(...arr)
  let n = Math.min(...arr)
  const array = [Math.min(...arr), Math.max(...arr)]
  return array
}
minMax([1,2,3,4,5,6,7,8,9])*/ 

/*function digitize(n) {
  const arrayOfDigits = Array.from(String(n), Number);
  const orderedArray = arrayOfDigits.sort((a,b)=> b - a )
  return orderedArray
}
 digitize(234456)*/ 

 function fakeBin(x){
  const makeArr = String(x).split(',')
  console.log(makeArr)
 }
fakeBin(45385593107843568)