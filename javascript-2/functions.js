// JS: Functions
// A container for a piece of code that can executed anywhere in your program
// The arguments are the values that are passed to the function when called
// The parameters are the "variables" that hold values of the arguments that were passed to the function call
// which we can use within the function's code

// Defining a function
// Function syntax:
// Function declaration/statement
function functionDeclaration(param1, param2) {
  // function body (your code goes here)
  // the params can be used in our code
  return // expression
}

// Function expression:
// A function without a name is called an anonmyous function
// We declaring a variable and assign it an anonmyous function as its value
// One benefit of this over declaration is that we can't reassign function expressions
const functionExpression = function(param1, param2) {
  // code
  return // expression
}

// Example:
function printName(firstName, lastName) {
  return `Your name is: ${firstName} ${lastName}`
}

// Get the function definition:
printName

// Invoke/call/execute
// "Jane" and "Doe" are the arguments passed to this function call
// firstName and LastName will hold the values of these arguments
// A new string is returned from the function
printName("Jane", "Doe")

// If you don't have a return statement, the function will return undefined when called
function returnUndefined(param1, param2) {
  alert("This function does something")
  // This function will return undefined because the 
  // return statement is omitted
}

// If you don't have a return statement, the function will return undefined when called
const afterReturnExample = function() {
  return "I'm returned and I exit the function"
  console.log("I will not print")
  return "This will not be returned"
}

// Arrow function (ES6+)
const arrow = (param1, param2) => {
  // code
  return // expression
}

// Repeat:
function repeat(string, times) {
  let output = ""

  for (let i = 0; i < times; i++) {
     output += string
  }
  
  return output   
}

repeat("abc", 3)
// let output = ""

// Iterations:
// 1. output = "" + "abc" -> "abc"
// 2. output = "abc" + "abc" -> "abcabc"
// 3. output = "abcabc" + "abc" -> "abcabcabc"