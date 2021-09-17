// Morning Challenges

// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
var arr1 = [3, 7, 10, 5, 4, 3]
var arr2 = [7, 8, 2, 1, 5, 4]
// --> [3, 7, 10, 5, 4, 8, 2, 1]

// create a function called comeTogether
// parameters - array1, array2
// combine two arrays using concat
// filter - indexOf using value and index in filter


const comeTogether = (array1, array2) => {
  let comboArray = array1.concat(array2)
  return comboArray.filter((value, index, array) => {
    return array.indexOf(value) === index
    // console.log("value:", value)
    // console.log("indexOf:", array.indexOf(value))
    // console.log("index:", index)
  })
}
console.log(comeTogether(arr1, arr2))
