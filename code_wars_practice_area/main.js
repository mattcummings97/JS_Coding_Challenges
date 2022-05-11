class Animal{
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
let sagwa = new Cat('Sagwa', 'Simese')