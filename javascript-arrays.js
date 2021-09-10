var name = "Austin" // datatype of String
var one = 1 // datatype of Number
var nuthing = null // datatype of null
var whatIsIt = undefined // datatype of undefined
var trueFalse = true || false // datatype of boolean

// var array = []

var ross = "delorean"
var charlean = "ferrari"
var ato = "tesla"
var rebbeca = "honda"
var john = "minicooper"

// console.log(ross);
// console.log(charlean);
// console.log(ato);
// console.log(rebbeca);
// console.log(john);

var carArray = [ross, charlean, ato, rebbeca, john]
console.log(carArray[2]);
//____________________________________________________________
// INDEX
//                 i = index
//                 0         1         2      3       4      5       6      7      8      9
var arrayRhyme = ["enie", "meanie", "minie", "mo", "catch", "a", "tiger", "by", "its", "toe"]

// console.log(arrayRhyme[0]);
// console.log(arrayRhyme[1]);
// console.log(arrayRhyme[2]);
// console.log(arrayRhyme[3]);
// console.log(arrayRhyme[4]);
// console.log(arrayRhyme[5]);
// console.log(arrayRhyme[6]);
// console.log(arrayRhyme[7]);
// console.log(arrayRhyme[8]);
// console.log(arrayRhyme[9]);
//____________________________________________________________
// Mutators - push()
// adds to the end of the array
var myColors = ["red", "green","blue"]
myColors.push("orange")
myColors.push("purple")
myColors.push("gold")
myColors.push("sliver")
console.log(myColors);

var students = ["elias", "kelly", "phil"]
students.push("mayuri")
console.log(students);
//____________________________________________________________
// Mutators - .pop()
// Removes the last value of the array
myColors.pop()
console.log(myColors);
var names = students.pop()
console.log(students);
console.log(names);
//____________________________________________________________
//Mutators - .shift()
// removes the value at the zeroth index of the array 
myColors.shift()
console.log(myColors);
//____________________________________________________________
//Mutators - .unshift(value)
// adds a value ot the zeroth index of the array and moves all other values over one
myColors.unshift("brown")
myColors.unshift(4)
console.log(myColors);
//____________________________________________________________
// Mutators - .reverse()
// reverses the order of the array
myColors.reverse()
console.log(myColors);
// myColors.reverse()
// console.log(myColors);

//____________________________________________________________
// Array Attribute  .length
// console.log(myColors.length);
// console.log(carArray.length);
// console.log(students.length);
//____________________________________________________________
// Accessors .indexOf()
// returns the index of a first instance of a given value
console.log(myColors.indexOf("gold"));
console.log(myColors.indexOf(4));
console.log(carArray.indexOf("ferrari"));
// console.log(carArray.indexOf(charlean));
console.log(carArray.indexOf("charlean"));

//____________________________________________________________
//
// ACCESORS join("")
// Converts all values in an array to a string
var myName = ['c','h','a','r','l','e','a','n']
console.log(myName.length);
myName.join()
'c,h,a,r,l,e,a,n'
myName.join("")
'charlean'
myName.join(" ")
'c h a r l e a n'
myName.join("     ")
'c     h     a     r     l     e     a     n'
//____________________________________________________________
//
// ACCESORS- .concat()
// merges two or more arrays to form one combined array

var letters1 = ["a","b","c"]
var letters2 = ["x","y","z"]
console.log(letters1.concat(letters2));
// ['a', 'b', 'c', 'x', 'y', 'z']
console.log(letters1);

//____________________________________________________________
// Accessor - .split()
var learnStudents = "Sahtra Lillian Kevin Ross Napoleon"
learnStudents.split()
// ['Sahtra Lillian Kevin Ross Napoleon']
learnStudents.split("")
// (34) ['S', 'a', 'h', 't', 'r', 'a', ' ', 'L', 'i', 'l', 'l', 'i', 'a', 'n', ' ', 'K', 'e', 'v', 'i', 'n', ' ', 'R', 'o', 's', 's', ' ', 'N', 'a', 'p', 'o', 'l', 'e', 'o', 'n']
learnStudents.split(" ")
// (5) ['Sahtra', 'Lillian', 'Kevin', 'Ross', 'Napoleon']
console.log(learnStudents);

//____________________________________________________________
// Array Destructering
// destructuring makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

var [firstName, lastName] = ["Bruce", "Wayne"]
console.log(firstName);
console.log(lastName);

var [month, day, time, type] = ["September", "Friday", "10:55 AM"] 
console.log(month);
console.log(day);
console.log(time);
console.log(type);