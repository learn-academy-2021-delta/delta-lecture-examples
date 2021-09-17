// JavaScript Objects 9/16/2021

// JavaScript data types
// Primitive
// - Boolean
// - number
// - string
// - undefined
// - null
// - symbol

// Objects
// - arrays
// - object

// Collections of key value pairs wrapped in {}

// h1 {
//   color: "green"
// }

// {keys: "values"}
let myObject = {key1: "value1", key2: "value2", key3: "value3"}
// console.log(myObject)
// console.log(myObject.key1)


let breakfast = {
  bfast1: "eggs",
  bfast2: "cereal",
  bfast3: "oatmeal",
  bfast4: "yogurt",
  beverages: {
    drink1: "coffee",
    drink2: "water",
    drink3: "pepsi",
    drink4: "oj"
  }
}
// console.log(breakfast)
// console.log(breakfast.bfast4)
// console.log(breakfast.beverages.drink4)

// Destructuring - creating a pathway to the particular key

let { drink1, drink2, drink3, drink4 } = breakfast.beverages
// console.log(drink1)
// console.log(drink4)
// console.log(breakfast)

// Methods - functions that belong to an object

var mathObject = {
  num1: 5,
  num2: 10,
  num3: 15,
  addUp: function(){
    return this.num1 + this.num2 + this.num3
  }
}
// console.log(mathObject)
// console.log(mathObject.num1)
// console.log(mathObject.addUp())



// Arrays of objects

var pets = [
  {name: "Peaches", type: "dog", age: 18},
  {name: "Tsuki", type: "dog", age: 3},
  {name: "Pookie", type: "cat", age: 23},
  {name: "Toast", type: "fish", age: 2}
]

// pets is an array
// console.log(pets.length)
// 4
// console.log(pets[2].name)
// Pookie

// Create a function that takes in an array of pets
// Parameter - array
// Iterate - map
// String interpolation
// Return an array with a sentence about each pet

const petInfo = (array) => {
  return array.map(value => {
    return `${value.name} is a ${value.type}`
  })
}
console.log(petInfo(pets))
