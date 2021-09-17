//Validated Subsequence 

var sequence = [5,15,25,500,10,1,22,25,-1,8,10]
                // 0  1  2  3  4  5 6  7  8  9  10
                //                  ^  
var subseq = [1,22,-1,8]
            //   0 1  2  3  4
            //     ^
// the first array starts with ... 
// becuase order is specific we're looking for the first matching pair in the two arrays
// setting up something called a pointer... actually two pointers
// pointers are the values of indexs
// use the pointers and itteration to traverse the array
// when we find a match ++ (increment) up both array and subseq indexs


// var arrayIndex = 10
// var subSeqIndex = 4
// if(subSeqIndex === subsequence.length){
//     return true
// }

// function that takes in two arrays as arguments
//  const isValidSubsequence = (array, subsequence) => {
//      // two local variables that keep track of the pointers
//      let arrayPointer = 0 
//      let subseqPointer = 0
//      // itteration for the array
//      for (let i = 0; i < array.length; i++) {
//          // itteration for the the subsequence
//          for (let j = 0; j < subsequence.length; j++) {
//              // condtional statement incrementation when we find a match
//             if(array[i]===subsequence[j]){
//                 arrayPointer++
//                 subseqPointer++
//                 console.log(arrayPointer);
//                 console.log(subseqPointer);
//             }
//             // incrementation when we dont find a match at that index
//             console.log("didn't hit");
//             arrayPointer++ 
//          }
        
//      }
//   return subsequence.length === subseqPointer
//  }

 const isValidSubsequence = (array, sequence) => {
    let arrayPointer = 0
    let subseqPointer = 0
    while(arrayPointer < array.length && subseqPointer < sequence.length){
        if(array[arrayPointer]=== sequence[subseqPointer]) subseqPointer++;
        arrayPointer++;
    }
    return subseqPointer === sequence.length
}

console.log(isValidSubsequence(sequence, subseq));