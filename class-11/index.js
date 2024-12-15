// Functions in JavaScript
function sayHello(){
    console.log("Say,Hello")
}
sayHello()

function onePlusAvg(x,y){
    return 1+(x+y)/2
}
let a = 2
let b = 4
let c = 6
console.log("One Plus Average a and b is ",onePlusAvg(a,b))
console.log("One Plus Average b and c is ",onePlusAvg(b,c))
console.log("One Plus Average c and c is ",onePlusAvg(c,a))

function averageWith30(m,n){
    let average = (m + n)/2
    let result = average + 30
    console.log(`30 + average of ${m} and ${n} is = ${result}`)
}
averageWith30 (5,10)

// Arrow Function in JavaScript 
const sum = (p,q) => {
   return p + q
}
console.log(sum(8,7))

const hello = () =>{
    console.log("Hey How Are you?")
    return "Hello"
}
let m = hello()
console.log(m)