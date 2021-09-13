// iteration
//     iteration is the process of doing something multiple times until a condition is met. 
// for loop
//     is a tool for iteration It has three arguments (starting point, end point, and what to do after each loop)
// let
//     is a variable declaration (like: var)
// i (index)
//     the location of a value in a string or an array
// value
//     data at a location
// scope
//     is what variables are accessible in different parts of the code base
// local scope
//     variables that are only accessible within a code block
// global scope
//     varibales that are accessible outside of a code block
// increment and decrement
    //tools for counting often used in itteration 

// for(let index=0; index < 10; index++){
//     console.log(index);
// }

// for(let i=0; i < 10; i++){
//     console.log(i);
// }

//______________________________________
// for(let i=10; i>0; i--){
//     console.log(i);
// }
// for(let i=10; i>=0; i--){
//     console.log(i);
// }
//______________________________________
// var number = 8

// for(let index = 0; index < number; index++) {
//     console.log("Ashely is cool");
// }   
//______________________________________
// for(first argument; second argument; third argument){ do something here}
//______________________________________
//                 index
//                 0         1         2      3       4      5       6      7      8      9
// var arrayRhyme = ["enie", "meanie", "minie", "mo", "catch", "a", "tiger", "by", "its", "toe"]

// for(let index = 0; index < arrayRhyme.length; index++){
//     console.log(arrayRhyme[index]);
// }
//______________________________________

// var myArrayTwo = [10,20,30]

// for(let i=0; i < myArrayTwo.length; i++){
//     console.log(myArrayTwo[i] * 13);
// }
//______________________________________
// var letters = "Sheldon the booger"

// for(let i=0; i<letters.length; i++){
//     console.log(letters[i])
// }
//______________________________________

// var falalalalas = ["fa","la","la","laaaaa"]
// for (let i = 0; i < falalalalas.length; i++) {
// console.log(falalalalas[i]);
// }
//______________________________________
var shots = 202000
for (let index = 0; index < shots; index++) {
   if (index === 0){
    console.log("shots")
   }
   else if(index % 7 === 0) {
       console.log("EVERYBODY");
   }
   else{ console.log("shots")}
}

//______________________________________

