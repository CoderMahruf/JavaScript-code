// Variables in JavaScript 

// var is globally scoped
var a = 5
// a = a + 1

// let and const are block scoped 
let b = 6
let c = "Shuvo";
let _a = "Ehsan";
// var 55a = "Mim"

// console.log(a + b + 8)
// console.log(typeof a,typeof b,typeof c)

{
    let a = 66;
    console.log(a)
}
console.log(a)

// Not allowed because a1 is constant 
// const a1 = 6;
// a1 = a1 + 1;

// Primitive Data Types 
let x = "Shuvo";
let y = 23;
let z = 3.50;
const p = true;
let q = undefined;
let r = null

console.log(x,y,z,p,q,r)
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r)

// Object 
let obj = {
       name: "Shuvo",
       "job code" : 550,
       "is handsome" : true
}
console.log(obj);
obj.sallary = "30000Taka";
console.log(obj);
obj.sallary = "40000Taka";
console.log(obj)