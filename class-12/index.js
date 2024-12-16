// Q1: Write a program to print the marks of a student in an object using for loop
let marks = {
    Shuvo: 90,
    Hasib: 78,
    Sazid: 34,
    Monika: 77
}
for (let i = 0;i<Object.keys(marks).length;i++){
    console.log("The Marks of "+ Object.keys(marks)[i]+ " are "+marks[Object.keys(marks)[i]])
}

// Q2: Write a program to print the marks of a student in an object using for-in loop
let marks2 = {
    Shuvo: 90,
    Hasib: 78,
    Sazid: 34,
    Monika: 77
}
for (let key in marks2){
    console.log("The Marks of "+key+" are: "+marks2[key])
}

// Q3: Write a program to print "try again" until the user enters the correct number
// Answer-1
let cn = 13
let i 
while (i != cn){
    i = prompt("Enter a Number:")
    console.log("Try Again")
}
console.log("You have enterd a correct number!")
// Answer-2
let correctNumber = 33
let guessedNumber = null
while(guessedNumber != correctNumber){
    guessedNumber = prompt("Enter a Number:")
    console.log("Try again")
}
console.log("You have guessed the number!")

// Q4 Write a function to find the mean of 5 numbers
// Using Arrow function
// Answer-1
const mean = (a,b,c,d,e) => {
    return (a+b+c+d+e)/5
}
console.log(mean(5,6,7,8,9))
// Answer-2
// Using parameterized Function
function findMean(num1,num2,num3,num4,num5){
    let sum = num1+num2+num3+num4+num5
    let mean = sum/5
    return mean
}
let result = findMean(5,6,7,8,9)
console.log("The mean of the 5 number is: "+result)