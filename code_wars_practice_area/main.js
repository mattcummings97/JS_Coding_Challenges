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


  function findNeedle(haystack) {
    for(let i=0;i<haystack.length;i++){
      if(haystack[i]=== 'needle'){
        console.log( `found the needle at position {haystack[i]}`)
      }else{
        console.log(false)
      }
    }
  }
  findNeedle(['needle','2',2, true])
