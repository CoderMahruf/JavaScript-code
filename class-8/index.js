// This all class code executing to browser console 

// Q1: Using Logical Operators
// Q: Create a JavaScript program to check if a age is between 10 and 20.
let age = prompt("Enter your age:")
age = Number.parseInt(age)
if (age >= 10 && age <= 20){
    console.log("Your age is between 10 and 20")
}
else{
    console.log("Your age is not between 10 and 20")
}
// Q2: Using Switch Case
// Q: Demonsrate the use of switch case in JavaScript.
let day = prompt("Enter your day?")
switch (day) {
    case "Sunday":
        console.log("Today is Sunday!")
    break
    case "Monday":
        console.log("Today is Monday!") 
    break
    case "Tuesday":
        console.log("Today is Tuesday!")
    break
    case "Wednesday":
        console.log("Today is Wednesday!")
    break 
    case "Thursday":
        console.log("Today is Thrusday!")
    break 
    case "Friday":
        console.log("Today is Friday!")
    break
    case "Saturday":
        console.log("Today is Saturday!")
}
// Q3: Divisible by 2 and 3
// Q: Create a JavaScript program to check if a number is divisible by 2 and 3.
let num = prompt("Enter your number:")
if (num % 2 == 0 && num % 3 == 0){
    console.log("The number is divisible by 2 and 3.")
}
else {
    console.log("The number is not divisible by 2 and 3.")
}
// Q4: Divisible by 2 or 3
// Q: Create a JavaScript program to check if a number is divisible by 2 or 3.
let number = prompt("Enter your number:")
if (number % 2 == 0 || number % 3 == 0){
    console.log("The number is divisible by 2 or 3.")
}
else if(number % 2 == 0){
    console.log("The number is divisible by 2.")
}
else if (number % 3 == 0){
    console.log("The number is divisible by 3.")
}
else{
    console.log("The number is not divisible by 2 or 3.")
}
// Q5: Using Ternary Operator
// Q: Print "you can drive" if the age is greater than or equal to 18, otherwise print "you cannot drive". Use the ternary operator.
let ages = 19
a = ages >= 18? "You can drive":"You cannot drive"
console.log(a)