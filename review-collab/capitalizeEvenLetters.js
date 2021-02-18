// Write a function that takes in a string

// Iterate over each character in the string:
  // If the character is even, make it upcased
  // If the character is odd, make it downcased

// Keep in mind that strings are immutable
// e.g.
let hello = "hello"
hello[0] = "j"
hello // -> "hello"


function toWeirdCase(string) {
    let uppercase = true;
    return string
      .replace(/./g, c => {
        const current = uppercase;
        
        uppercase = c === ' ' ? true : !uppercase;
      
        return current ? c.toUpperCase() : c.toLowerCase();
      });
  }
  
  console.log(toWeirdCase('hello world'))



  function toWeirdCase(str) {
    let output = '' // store each character in a new string (strings are not mutable)
    
    for (i = 0; i < str.length; i++){ // loops through each character
        // if (i % 2 !== 0){
        // if (i % 2){
        if (i % 2 === 0) { // if the character is odd (or index is even)
          output += str[i].toLowerCase() // -> downcased single character
        } else {
          output += str[i].toUpperCase() // -> upcased single character
        }
    } 
    console.log(output)
};

toWeirdCase("hello")
