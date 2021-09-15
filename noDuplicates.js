//Create a function that takes in two arrays and returns one array with no duplicate values.
var spiderman = [3, 7, 10, 5, 4, 3, 3]
var batman = [7, 8, 2, 3, 1, 5, 4]
// --> [3, 7, 10, 5, 4, 8, 2, 1]Create a function that takes in two arrays and returns one array with no duplicate values.

// Declare a function that takes in two arrays
const noDuplicates = (arr1, arr2) => {
    // Declare a new variable that concats the two arrays
    let catArr = arr1.concat(arr2)
    // Delcare a new array that holds no duplicates
    let newArr = []
    // Itterate through the concat'd array 
    for(let i=0; i < catArr.length; i++){
        //conditional if current itteration index is equal to the index of the first instance of a variable
        if (i === catArr.indexOf(catArr[i])){
            // then push it into our newArr
            newArr.push(catArr[i])
        }
    }
    //return the new array
    return newArr
}


    // log function
    console.log(noDuplicates(spiderman, batman));

    var arr1 = [3, 7, 10, 5, 4, 3, 3]
    var arr2 = [7, 8, 2, 3, 1, 5, 4]
    
    const duplicate = (arr1, arr2) => {
     let final = [...new Set(arr1)];
     let realFinal = arr2;
     let mixFinals = final.concat(realFinal)
     let forRealForRealFinal = [...new Set(mixFinals)];
       
        return forRealForRealFinal;
    }
    
    console.log(duplicate(arr1,arr2));