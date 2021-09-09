// Intro to JS 9/8/2021

// - Cloned the appropriate repo
// - Made a branch
// - Made a new file with extension .js

// - To run the file:
// node javascript-intro.js

// JavaScript is:
// Dynamic - change the type of data being held by a variable
// Interpreted - read line by line and processed through an interpreter
// Scripting language - store data, manipulate data, perform logic


// Data Types

// Primitive Data Types
// - Numbers
  // - Integers
  // - Floats
42
3.14
4 + 5
5 - 3
5 * 3
6 / 3
console.log(5 * 4)

// Exponents
console.log(7 ** 2)

// Modulo - whole number remainder of a division problem
console.log(4 % 3)


// Strings

"hello delta"

// - length
// - index - address of a given character, strings are zero-indexed

console.log("hello".length)
// - returns a data type of number

console.log("hello"[0])


// Boolean

console.log(true)
console.log(false)

console.log(7 > 3)
// - returns the data type of Boolean

// Relational operators - > < >= <=
// Equality operators - do two things evaluate to be the same

// Loose equality: ==
// Type coersion - attempting to evaluate different data types
console.log(8 == 4 + 4)
console.log(8 == 4 + 3)
console.log(8 == "8")

// Strict equality: ===
console.log(8 === "8")

// Logical operator && - ands, || - ors, ! - negation

// Ands - takes two independent evaluations and looks for both to be true
console.log(7 > 3 && 6 > 3)
console.log(7 > 3 && 2 > 3)
console.log(7 > 3 && 5 > 3 && 7 > 4)

// Ors - take two independent evaluations and look for at least one to be true
console.log(7 > 3 || 2 > 3)
console.log(1 > 3 || 2 > 3)

// bang operator !
console.log(!true)


// Null
// Null is equal to nothing else including itself
console.log(null)

// Symbol
// Symbols are unique keys

// Undefined
// Value of a variable that has been declared but not yet assigned


// Variables
// The value of a variable has to be a data type

// Declaration
// 1) var - global scope, it is available to the entire program
// 2) let - local scope, lives inside a sectioned off chunk of code
// 3) const - protects a varibale from being reassigned

// Name - communicate intent, camelCase

// helloDeltaClassIAmWritingToYouInCamelCase

var myName = "Sarah"
console.log(myName)
console.log(myName.length)
console.log(myName[2])

myName = 7
console.log(myName)

const greeting = "Hello Delta"
console.log(greeting)
// greeting = 6
// Error!
console.log(greeting)

// Built in Methods

// Uppercasing letters
console.log(greeting.toUpperCase())

// Built in methods are designed for a particular data type
console.log(true.toUpperCase())
// TypeError: true.toUpperCase is not a function

// Incluses - takes a string as an argument (passing in extra info)
console.log(greeting.includes("e"))
console.log(greeting.includes("j"))

// CharAt - returns the character at a particular index
console.log(greeting.charAt(7))

// IndexOf - takes a character from the string and returns an index
console.log(greeting.indexOf("e"))


console.log(greeting.slice(0, 5))
console.log(greeting.slice(6))
