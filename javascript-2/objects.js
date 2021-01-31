// JS: Objects

// key/property - value pairs
// keys are strings (quotes are optional)
// values can be any data-type
const myObj = {
  a: 5,
  b: "string",
  nestArr: [1, 2, 3],
  nestedObj: { c: 7 },
}

// Using dot notation
myObj.a // -> 5
myObj.nestArr // -> [1, 2, 3]

const car = {}

// trying to access a property that doesn't exist gives us undefined
car.doors // -> undefined

// assign values to properties:
// Doesn't matter if the key already exists or not
car.doors = 5
car.colour = "blue"

// Using bracket notation:
car["doors"] // -> 5

// We can evaluate expressions using []
const property = "colour"
car[property] // -> "blue"
car.property // -> undefined

// Count characters in a string with an object
const countChars = function(str) {
  const output = {}

  for (let i = 0; i < str.length; i++) {
    if ( output[str[i]] ) {
      output[str[i]]++
    } else {
      output[str[i]] = 1
    }
  }

  return output
}

countChars("test")
// Iterations:
// 1. 
//    output -> {}
//    output["t"] = 1
// 2. 
//    output -> { t: 1 }
//    output["e"] = 1
// 3. 
//    output -> { t: 1, e: 1 }
//    output["s"] = 1
// 4. 
//    output -> { t: 1, e: 1, s: 1 }
//    output["t"]++

// {
//   t: 2,
//   e: 1,
//   s: 1,
// }