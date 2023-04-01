// Your code here

class Cat {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
    
    speak() {
      return `${this.name} says meow!`;
    }
  }
  
  class Dog {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
    
    speak() {
      return `${this.name} says woof!`;
    }
  }
  
  class Bird {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
    
    speak() {
      if (this.sex === 'male') {
        return `It's me! ${this.name}, the parrot!`;
      } else {
        return `${this.name} says squawk!`;
      }
    }
  }
  
  // Example usage:
  
  const fluffy = new Cat('Fluffy', 'female');
  console.log(fluffy.speak()); // logs "Fluffy says meow!"
  
  const rover = new Dog('Rover', 'male');
  console.log(rover.speak()); // logs "Rover says woof!"
  
  const polly = new Bird('Polly', 'male');
  console.log(polly.speak()); // logs "It's me! Polly, the parrot!"
  
  const tweety = new Bird('Tweety', 'female');
  console.log(tweety.speak()); // logs "Tweety says squawk!"
  