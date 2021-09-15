// TDD TEST DRIVEN DEVELOPMENT
// Testing with Jest


//__________________
// $ mkdir testing-initialOne-initialTwo
// $ cd testing-initialOne-initialTwo
// $ touch austin-sarah-testing.test.js
// $ yarn add jest
//__________________
// $ yarn jest

//__________________

//TDD 
// Practice of safely creating code. 
// creating tests
// creating the code that makes thoses tests pass
// refactoring the code while ensuring the tests pass

// Unit Test: testing individual pieces of code (functions or methods)
// Intergration Test
// End to End Testing

// Red Green Refactor
    //1. Write our test and watch it fail
    // - figure out what kind of code we want to write
    // - set up an enviroment for our testing
    // - we write a test for a function (that we haven't written yet)
    // - watch the tst "fail" -- RED (Good Job!)
// 2. Write the code that makes the test pass
    // - problem solve the coding issues
    // - console.log("check out this tag", theThingTested)
    // - make the test pass -- GREEN (Excellent!)
// 3. Refactor your Code
    // - clean up extra variables $ console.logs
    // - make the code more readable and streamline
    // - keep checking your code on the testing suite

//  # Arrange Act Assert
//  - https://automationpanda.com/2020/07/07/arrange-act-assert-a-pattern-for-writing-good-tests/

//  - https://docs.telerik.com/devtools/justmock/basic-usage/arrange-act-assert

// Arrange – setup the testing objects and prepare the prerequisites for your test.

// Act – perform the actual work of the test.

// Assert – verify the result.

// describe('The unit test that we are creating', ()=>{
//     it('is a unit test that test the unit', ()=>{
//         expect(thisFunction("with this variable")).toEqual("this result")
//     })
// })
// //______________________
// describe('The unit test that we are creating', ()=>{
//     test('is a unit test that test the unit', ()=>{
//         expect(thisFunction("with this variable")).toEqual("this result")
//     })
// })


describe('an array sorter',()=>{
    it('should take an a array of numbers and return it sorted from least to greatest', ()=>{
        expect(sorter([42,32,-39,0,18,100])).toEqual([-39,0,18,32,42,100])
    })
})


// const sorter = (array) => {
//     console.log("this is the array ", array)
//     let sorted = array.sort((a,b)=>{return a-b})
//     return sorted
// }

const sorter = (array) => {
    return  array.sort((a,b)=>{return a-b})
}

describe("string checker",()=>{
    test('given two strings check whether or not they are the same phrase regardles of casing',()=>{
        let stringOne = 'Thundercats'
        let stringTwo = 'THUNDERCATS'
        let a1 = "austin"
        let b1 = "brandon"
        expect(stringCheckr(stringOne, stringTwo)).toEqual(true)
        expect(stringCheckr(a1,b1)).toEqual(false)
    })
})

// declare a function named stringCheckr
    const stringCheckr = (a,b) => {
        // function should take in two arguments
        // condtionals if the string.toLowerCase === the other string.toLowerCase
        if( a.toLowerCase() === b.toLowerCase()){
            //return true
            return true
        } else {
            // otherwise 
                // return false 
            return false
        }
    }

