// Map, Filter & Reduce in JavaScript
// Map ()
let numbers = [1,2,3,4,5,6]
let doubledNumbers = numbers.map((i)=>{
    return i * 2
})
console.log(doubledNumbers)

let numbers2 = [1,2,3,4,5,6]
let stringNumbers = numbers2.map((i)=>{
    return i.toString()
})
console.log(stringNumbers)

// filter()
let numbers3 = [1,2,3,4,5,6]
let arr = numbers3.filter((i)=>{
    return i < 5
})
console.log(arr)

// reduce()
let = numbers = [1,2,3,4,5,6]
let sum = numbers.reduce((first,second)=>{
    return first + second
})
console.log(sum)