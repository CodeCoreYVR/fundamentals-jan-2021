// Booleans
true
false

// Comparison operators
// < > <= >=

5 >= 5 // -> true
5 > 5 // -> false

// Equality/inequality operators
// Double equals (equality) will only compare the value
// It has a loose idea of equality because it tries to
// coerce one or both operands to similar data types before comparing
// == !=

5 == 5 // -> true
5 != 5 // -> false
5 == "5" // -> true
5 != "5" // -> false

// Strict equality/inequality 
// Triple equals will compare the value and its data type
// It won't do type operators
// === !==

5 === 5 // -> true
5 !== 5 // -> false
5 === "5" // -> false
5 !== "5" // -> true

// Logical operators
// && (AND)
// || (OR)

// With the && (AND) operator both operands must be truthy to return true
true && true // -> true
false && true // -> false
true && false // -> false
false && false // -> false

// With the || (OR) operator at least one operand must be truthy to return true 
true || true // -> true
false || true // -> true
true || false // -> true
false || false // -> false

// In JS, every value is truthy except for these falsy values:
0
-0
null
undefined
""
NaN

// The logical operators work in a short circuit way
// &&:
// If the first operand is truthy, it will return the second operand no matter whether it's truthy or falsy
// If the first operand is falsy, it will return the first operand and ignore the second operand
"truthy" && "" // -> ""
"truthy" && 100 // -> 100
"" && "truthy" // -> ""
"" && false // -> ""

// ||:
// If the first operand is truthy, it will return the first operand and ignore the second operand
"truthy" || "" // -> "truthy"
"" || "truthy" // -> "truthy"
"" || 0 // -> 0 

// ! (NOT)
// Converts a value from truthy to false or falsy to true
!true // -> false
!false // -> true
!"truthy" // -> false
!0 // -> true

// Sometmes you might want convert a truthy/falsy value to true/false
// Double negating truthy and falsy values to return a boolean:
!!true // -> true
!!false // -> false
!!"truthy" // -> true
!!0 // -> false
!!NaN // -> false
!!"false" // -> true

// Use Boolean():
Boolean("truthy") // -> true
Boolean("false") // -> true
Boolean(null) // -> false