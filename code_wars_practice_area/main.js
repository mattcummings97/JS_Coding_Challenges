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

const promise = new Promise((resolve,reject) => {
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

  )