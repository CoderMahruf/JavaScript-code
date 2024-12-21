// Q1: Create an array of numbers and take input from the user to add numbers to this array.
let numbers = [1,2,3,4,5,6]
let input = prompt("Enter a number: ")
input = Number(input)
numbers.push(input)
console.log(numbers)

// Q2: Keep adding numbers to the array in Q1 until 0 is entered.
// Answer-1
let numbers2 = [1,2,3,4,5,6]
let a = null;
do{
    a = prompt("Enter a number:")
    a = Number(a)
    numbers2.push(a)
}while ( a != 0);
console.log(numbers2)
// Answer-2
let numbers3 = [1,2,3,4,5,6]
let num = prompt("Enter a number:")
num = Number(num)
while(num != 0) {
   numbers3.push(num)
   num = prompt("Enter a number:")
   num = Number(num)
}
console.log(numbers3)

// Q3: Filter for numbers deivisible by 10 from an array of numbers.
// Answer-1
let numbers4 = [90,80,320,42,52,670]
let arr = numbers4.filter((x)=>{
    return x % 10 == 0
})
console.log(arr)
// Answer-2
let numbers5 = [10, 29, 33, 40, 50, 61, 17, 38, 90, 7]
let arr2 = numbers5.filter(function(number){
    return number % 10 == 0
})
console.log(arr2)

// Q4: Create an array of square of given numbers.
// Answer-1
let array = [1,2,3,4,5,6]
let newArray = array.map((x)=>{
    return x * x
})
console.log(newArray)
// Answer-2
let array2 = [1,2,3,4,5,6]
let newArray2 = array2.map(function(number){
    return number * number
})
console.log(newArray2)

// Q5: Use the reduce method to calulate factorial of a given number from an array of first n natural numbers (n being the numbers whose factorial needs to be calculated).
// Answer-1
  let array3 = [1,2,3,4,5,6]
  let newArray3 = array3.reduce((x1, x2)=>{
    return x1 * x2
  })
  console.log(newArray3)
//   Answer-2
let array4 = [1,2,3,4,5]
let newArray4 = array4.reduce(function(x1,x2){
    return x1 * x2 
})
console.log(newArray4)