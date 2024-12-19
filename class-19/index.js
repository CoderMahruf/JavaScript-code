// Loops with Arrays
// for-loop
let num = [78,45,65,35,48]
for(let i = 0;i<num.length;i++){
    console.log(num[i])
}

let fruits = ["Apple","Orange","Banana"]
for (let i = 0;i < fruits.length;i++){
    console.log(fruits[i])
}

// forEach()
let num2 = [3,5,7,8,9]
num2.forEach((element) => {
    console.log(element * element)
})

let fruits2 = ["Apple","Orange","Banana"]
fruits2.forEach((i) => {
    console.log(i)
})

// from()
// The from() method creates a new array from an array-like object.
let name = "Shuvo"
let arr = Array.from(name)
console.log(arr)

// for...of
let num3 = [78,45,65,35,48]
for(let i of num3){
    console.log(i)
}

let fruits3 = ["Apple","Orange","Banana"]
for (let i of fruits3){
    console.log(i)
}

// for...in
let num4 = [78,45,65,35,48]
for (let i in num4){
    console.log(i) //given keys
    console.log(num4[i])  //given values
}

let fruits4 = ["Apple","Orange","Banana"]
for (let i in fruits4){
    console.log(i) // given keys
    console.log(fruits4[i]) //given values
}