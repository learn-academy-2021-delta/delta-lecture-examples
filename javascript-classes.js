// JavaScript Classes 9/17/2021

// Classes are blueprints for objects

// hard coded: 2 + 2
// dynamic: num1 + num2

// function - blueprint for logic

// class - declaration
// name - PascalCase, like camel case but the first letter is capitalized
// define an executable block of code
// new is a keyword in JavaScript

// class DoingMath {
//   constructor(){
//     this.num1 = 5,
//     this.num2 = 10,
//     this.num3 = 15
//   }
//   addUp(){
//     return this.num1 + this.num2 + this.num3
//   }
// }
// console.log(new DoingMath)
// --> DoingMath { num1: 5, num2: 10, num3: 15 }

// var math1 = new DoingMath
// console.log(math1)

// var math2 = new DoingMath
// console.log(math2)

// Two unique instance of the class
// DoingMath { num1: 5, num2: 10, num3: 15 }
// DoingMath { num1: 5, num2: 10, num3: 15 }


// Make the class reusable

// class DoingMath {
//   constructor(num1, num2, num3){
//     this.num1 = num1,
//     this.num2 = num2,
//     this.num3 = num3
//   }
//   addUp(){
//     return this.num1 + this.num2 + this.num3
//   }
// }


// Some dynamic and some hard coded values

class DoingMath {
  constructor(num2, num3){
              //10  //25
    this.num1 = 5,
    this.num2 = num2, //10
    this.num3 = num3 //25
  }
  addUp(){
    return this.num1 + this.num2 + this.num3
  }
  largestNum(){
    return Math.max(this.num1, this.num2, this.num3)
  }
}

// Using new is creating an object which is an instance of the class
var math = new DoingMath(10, 25)
console.log(math)
// --> DoingMath { num1: 5, num2: 10, num3: 25 }
// console.log(math.addUp())
// --> 40
// console.log(math.largestNum())
// --> 25

var moreMath = new DoingMath(3, 4)
console.log(moreMath)
// --> DoingMath { num1: 5, num2: 3, num3: 4 }
// console.log(moreMath.addUp())
// --> 12
// console.log(moreMath.largestNum())
// --> 5
