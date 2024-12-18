// Q1: What will the following code print in JavaScript?
let str = "Shuvo\""
console.log(str.length)

// Q2: Explore the includes, startsWith, and endsWith functions in a string.
let string = "Hello World"
// Using includes function
console.log(string.includes("Hello"))
console.log(string.includes("Shuvo"))
// Using startsWith function
console.log(string.startsWith("Hello"))
console.log(string.startsWith("Shuvo"))
// Using endsWith function
console.log(string.endsWith("World"))
console.log(string.endsWith("Shuvo"))

// Q3: Write a program to convert a given string into lowercase.
let string2 = "Hello World"
console.log(string2.toLowerCase())

// Q4: Extract the numerical amount from this string "Total: Taka 2050".
let string3 = "Total: Taka 2050"
let amount = Number.parseInt(string3.slice(12))
console.log(amount)
console.log(typeof amount)

// Q5: Try to change the 4th character of a given string. Would you be able to do it?
let string4 = "Hello World"
string4[6] = "S"
// Strings are immutable in JavaScript.
console.log(string4)