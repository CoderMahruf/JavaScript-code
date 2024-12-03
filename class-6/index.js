console.log("Operators in JavaScript")
// Arithmetic Operators
let a = 46;
let b = 5;
console.log("a + b =",a+b)  //Addition
console.log("a - b =",a-b)  //Subtraction
console.log("a / b =",a/b)  //Division
console.log("a * b =",a*b)  //Multiplication
console.log("a ** b =",a**b)  //Exponentiation
console.log("a % b =",a%b)  //Modulus
// Increment operator
console.log("++a =",++a)
console.log("a++ =",a++)
console.log("a =",a)
// Decrement operator 
console.log("--a =",--a)
console.log("a-- =",a--)
console.log("a =",a)


// Assignment Operators 
// Addition assignment
let assignment = 6;
assignment += 5    
console.log(assignment)
// Subtraction assignment
let assignment2 = 6;
assignment2 -= 5
console.log(assignment2)
// Multiplication assignment
let assignment3 = 6;
assignment3 *= 5
console.log(assignment3)
// Multiplication assignment
let assignment4 = 6;
assignment4 /= 5
console.log(assignment4)
// Modulus assignment
let assignment5 = 6;
assignment5 %= 5
console.log(assignment5)
//Exponentiation assignment
let assignment6 = 6;
assignment6 **= 5
console.log(assignment6)


// Comparison Operators
let comp1 = 6;
let comp2 = 7;
// let comp2 = "6";
console.log("comp1 == comp2 is",comp1==comp2) //Equal to
console.log("comp1 != comp2 is",comp1!=comp2) //Not equal to -->evaluates to false
console.log("comp1 === comp2 is",comp1===comp2) //Strict equal to
console.log("comp1 !== comp2 is",comp1!==comp2) //Strict not equal to -->evaluates to true
console.log("comp1 > comp2 is",comp1>comp2) //Greater than
console.log("comp1 < comp2 is",comp1<comp2) //Less than
console.log("comp1 >= comp2 is",comp1>=comp2) //Greater than or equal to
console.log("comp1 <= comp2 is",comp1<=comp2) //Less than or equal to


// Logical Operators
// Logical AND. Returns true if both operands are true, otherwise false.
let x = 5;
let y = 6;
let z = 7;
console.log(x < y && y < z )
console.log(x < y && y > z )
// Logical OR. Returns true if at least one of the operands is true, otherwise false.
let l = 5;
let m = 6;
console.log(l > 3 || m < 5)
console.log(l < 3 || m < 5)
// Logical NOT. Returns the opposite of the operand. If it's true, it returns false. If it's false, it returns true.
const n = 10;
console.log(!(n < 5))
console.log(!(n > 5))
console.log(!false)
console.log(!true)

// Comments
// This is a single line comment
/* This is a sample multiline comment and a tutorial from 
I am Maruful Alam 
BSc in CSe */