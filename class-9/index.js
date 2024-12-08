// For Loop in JavaScript
for (let i = 0; i < 30; i++){
    console.log(i)
}

let num = prompt("Enter a number:")
let sum = 0
for(let i = 1; i <= 10; i++){
    sum = sum + i 
}
console.log("The sum of first "+num+" number is: "+sum)

// For-In Loops in JavaScript 
let object = {
    "Sihab":86,
    "Sabbir":87,
    "Ehsan":90,
    "Masum":77,
    "Sifat":77
}
for (let a in object){
    console.log("Marks of "+a+" are "+object[a])
}

let obj = {
    MyName: "Shuvo",
    Department:"Computer Science",
    Session: 2023,
    Roll:13
}
for (let i in obj){
    console.log(i+" : "+ obj[i])
}

// For-Of Loops in JavaScript 
// for of loop is objects like arrays and strings
for (let name of "Shuvo"){
    console.log(name)
}

let numbers = [1,2,3,4,5]
for (let number of numbers){
    console.log(number)
}