let array = [90,87,65,89,93]
console.log(array)

// Arrays can have different data types as well
let arr = ["Hello",10,true]
console.log(arr)

// Accessing Elements of an Array
let marks = [65,78,87,78,74]
console.log(marks[0])
console.log(marks[2])
console.log(marks[4])

let fruits = ["Apple","Orange","Banana"]
console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])
// If we try to access an index that is not present in the array, it will return undefined.
console.log(fruits[3]) 

// modern JavaScript (ECMAScript 2022) introduced the .at() method, which allows negative indexing
let fruit = ["Apple", "Orange", "Banana"]
console.log(fruit.at(-1))
console.log(fruit.at(-2))
console.log(fruit.at(-3))

// Adding and Changing Array Values
let fruit1 = ["Apple", "Orange", "Banana"]
fruit1[3] = "Lichee"
console.log(fruit1)

let fruit2 = ["Apple", "Orange", "Banana"]
fruit2[0] = "Pinapple"
console.log(fruit2)

// Arrays are not primitive types; they are a type of object in JavaScript. We can check the type of an array using the typeof operator.
console.log(typeof fruit2)
