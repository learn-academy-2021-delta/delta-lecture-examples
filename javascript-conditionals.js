// JavaScript Conditionals 9/9/2021

// Conditionals // decision trees // if/else statements


// if is a keyword in javascript - starts every conditional statement
// if makes an evaluation
// code to be executed lives in curly braces
// if(6 > 3){
//   console.log("it is true!")
// }

// if(6 < 3){
//   console.log("it is true!")
// }
// returns nothing

// else is a catchall, only runs if nothing else is true
// if(6 < 3){
//   console.log("it is true!")
// } else {
//   console.log("I am the else output!")
// }

// Only going to get one output
// if(6 > 3){
//   console.log("it is true!")
// } else {
//   console.log("I am the else output!")
// }

// var myNumber = 99
// flawed logic:
// if(myNumber > 100){
//   console.log("whoa, big number.")
// } else if(myNumber > 1000){
//   console.log("holy huge number batman")
// } else {
//   console.log("hmmm, small number")
// }

// if(myNumber > 1000){
//   console.log("holy huge number batman")
// } else if(myNumber > 100){
//   console.log("whoa, big number.")
// } else {
//   console.log("hmmm, small number")
// }


// var myNumber = 42
// if(myNumber > 1000){
//   console.log("holy huge number batman")
// } else if(myNumber > 100){
//   console.log("whoa, big number.")
// } else if(myNumber === 42){
//   console.log("the answer to the universe")
// } else {
//   console.log("hmmm, small number")
// }

// string interpolation - embedding a variable inside a string, backticks, dollar sign/curlies

var myCohort = "charlie"

if(myCohort === "delta"){
  console.log(`Hello there, ${myCohort}`)
} else {
  console.log(`I guess the ${myCohort} is okay.`)
}
