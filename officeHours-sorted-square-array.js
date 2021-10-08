// write a function that takes in a non empty array of integers that are sorted in ascending order
// return a  new array of the same length with the squares of the original integers also sorted in ascending order

// 2^2 = 2 * 2
// 2^3 = 2 * 2 * 2

// Global population = 7.2(10^9)
//create a function called sortedSquares
// takes in an array
const sortedSquaresArray = (array) => {
   // set up a second array with the same length
    const sortedSquares = new Array(array.length).fill(0)
    // create two pointers one small and one large
    let smallerValueIdx = 0
    let biggerValueIdx = array.length -1
    for (let index = array.length -1; index>=0; index--) {
       const smallerValue = array[smallerValueIdx]
       const biggerValue = array[biggerValueIdx]
        if(Math.abs(smallerValue) > Math.abs(biggerValue)){
            sortedSquares[index] = smallerValue ** 2;
            smallerValueIdx++;
        } else {
            sortedSquares[index] = biggerValue ** 2;
            biggerValueIdx--
        }
    }
    // return a  new array 
    return sortedSquares
}

//                              v
//                             [1,     2, 2,  3, 5, 6, 8, 9, 11, 20, 299,   300]
console.log(sortedSquaresArray([-299, -5, -2, 1, 2, 3, 6, 8, 9, 11, 20, 300]));
//                                         ^                        
//                                            ^



// keeping track of array.length - 2