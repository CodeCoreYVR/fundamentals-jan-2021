// Declare variable:
// {keyword} {variableName}
let letVariable // undefined

// Declare and initialize:
// {keyword} {variableName} = {value}
const constVariable = 123

// Difference between const and let
letVariable = 0 // let can be reassigned
constVariable = 1 // Uncaught TypeError: Assignment to constant variable
constVariable++ // Uncaught TypeError: Assignment to constant variable

// If we declare a variable with const, you have to initialie it at the same time
const name // Uncaught SyntaxError: Missing initializer in const declaration

// How to define a string?
'Single quotes'
"Double quotes"
`Bacticks`

// No difference between "" and '' other than escaping
// the same quote inside of the string with '\'
'You\'re awesome'

// Using backticks, we can interpolate
`There are ${constVariable} users signed up`

// Only backticks can be used for multiline strings
const multiline = `
  Only backticks
  allow for 
  multiline 
  strings
`

// The difference between == and ===
// JS will try to coerce the operands into the same data type before comparing
2 == '2' // true

// Using ===, JS will not try to coerce, therefore different data type, different value
2 === '2' // false