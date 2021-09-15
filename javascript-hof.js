// Higher Order Functions 9/15/2021

// Built in method - an action that is built into the language, ex) indexOf, length, charAt, push, log, split, flat, concat, join, reverse, reduce

// Built in methods work on particular data types and some take arguments

// Functions - declare your function, reusable, generic/neutral, return, invoke the function, agruments and parameters are the only way info should come into to the function - encapsulation

// Iteration - repeating a process until a condition is met, each/every
// What can you iterate? Array, strings - indexes/values/length


// Higher order functions - subcategory of built in methods used for iteration

// Examples for today:
// .forEach
// .map
// .filter

// ForEach - a really good iterator, not great at storage
// parameters - value, index, array

// [2, 3, 4, 5].forEach((value, index, array) => {
//   console.log("value:", value)
//   console.log("index:", index)
//   console.log("array:", array)
// })

// Map - a really great itertor plus storage!
// parameters - value, index, array

let myArrayOfNums = [2, 3, 4, 5].map(value => {
  return value * 3
})
// console.log(myArrayOfNums)

let students = ["Ross", "Rebecca", "Elias"]

let greeting = students.map(value => {
  return `Hi, ${value}!`
})
// console.log(greeting)
// map is an accessor method
// console.log(students)




// var myNums = [3, 4, 5, 6, 7, 8]

// create a function that takes in an array of numbers
// determine if the numbers are even or odd
// return an array with 'even' or 'odd' for each number
// output -> ["odd", "even", "odd", "even", "odd", "even"]

const oddOrEven = (array) => {
  return array.map(value => {
    if(value % 2 === 0){
      return "even"
    } else {
      return "odd"
    }
  })
}
// console.log(oddOrEven(myNums))
// --> [ 'odd', 'even', 'odd', 'even', 'odd', 'even' ]


// Filter

// - Iterator, higher-order function, acts on arrays, return an array, making a decision about each item in an array


var myNums = [3, 4, 5, 6, 7, 8]

// create a function that takes in an array
// look at each item in the array and determine if the number is odd
// return an array of only odd numbers
// --> [3, 5, 7]

const onlyOdds = (array) => {
  return array.filter(value => {
    return value % 2 !== 0
  })
}
// console.log(onlyOdds(myNums))


// create a function that takes in an array of mixd data types and returns an array with only strings

var allTheData = [true, 4, 5, "hello", 5, false, "hey"]
// create a function called stringCatcher
// parameter - array
// filter - returns a subset
// value
// typeof
// --> ["hello",  "hey"]

const stringCatcher = (array) => {
  return array.filter(value => {
    return typeof value === "string"
  })
}
console.log(stringCatcher(allTheData))



// Recap:
// - Higher order function - function that takes a function as an argument
// - Build in method - syntatical sugar
// - What data type? arrays
// - What parameters to map and filter take? value, index, array
// - Map vs filter? map is the same length, filter has a built in conditional
// - Both return arrays, both accessors
