// Functions 9/14/2021


// Functions - reusable, functions produce an output
// Functions should be neutral

// Encapsulation - code should only have access to information that the developer decides, predictable behavior


// Anatomy of a function

// For our stack - arrow functions, what we need to use in React

// 1) variable declaration
// 2) name - camelCase, descriptive
// 3) equal sign
// 4) parentheses, indicate action
// 5) arrow syntax, indicating a custom function
// 6) curlies - executable code
// 7) return - keyword in JavaScript, indicate the output


// Basic function:
// const makeCoffee = () => {
//   return "coffee is made"
// }

// call/invoke the function
// without the return keyword it will output undefined



// Function with an input:
// Parameter - function input
// const makeCoffee = (coffeeType) => {
//   return `${coffeeType} is made`
// }

// Pass info into the function call - passing an argument
// console.log(makeCoffee("black coffee"))
// console.log(makeCoffee("latte"))
// console.log(makeCoffee("mocha"))
// console.log(makeCoffee("espresso"))
// console.log(makeCoffee())


// Coffee maker function will take the type of coffee and a size of coffee and will tell you a price

// small $3
// medium $4
// large $5

// output - name of the coffee and the price

// Pseudo coding:
// - input - coffeeType, coffeeSize
// - output - string interpolation with coffeeType and the price
// - conditional statement - make an evaluation about the size of the coffee
// - if the coffee is small it will cost $3
// - else if the coffee if medium it will cost $4
// - else if the coffeee the large it will cost $5
// - else to catch edge cases and errors


const makeCoffee = (coffeeType, coffeeSize) => {
  if(coffeeSize === "small"){
    return `Your ${coffeeType} costs $3`
  } else if(coffeeSize === "medium"){
    return `Your ${coffeeType} costs $4`
  } else if(coffeeSize === "large"){
    return `Your ${coffeeType} costs $5`
  } else {
    return `You def need coffee. Check your input.`
  }
}
console.log(makeCoffee("latte", "small"))
console.log(makeCoffee("latte", "medium"))
console.log(makeCoffee("mocha", "large"))
console.log(makeCoffee("mocha", 3))
// --> You def need coffee. Check your input.


// Another way to declare a function:
// function makeCoffee(coffeeType){
//   return `${coffeeType} is made.`
// }


// Vocab:
// - arrow synatx
// - parameter - placeholder variable
// - argument - passed into the function call
// - call/invoke - triggering the function to run
