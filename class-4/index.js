// Primative Data type in JavaScript 
// nn bb ss u 
let nullVar = null;  // value is intentionally nothing
let numberVar = 530;
let boolVar = true;  //can also be false
let bigIntVar = BigInt("570") + BigInt("5");
let stringVar = "Shuvo";
let symbolVar = Symbol("I am a Symbol")
let undefinedVar = undefined;  // value is undefined or not defined

console.log(nullVar,numberVar,boolVar,bigIntVar,stringVar,symbolVar,undefinedVar)
console.log(typeof bigIntVar)
console.log(typeof symbolVar)

// Object in JavaScript 
// Non Primative Data type in JavaScript
const item = {
    "Shuvo":true,
    "Ehsan":false,
    "Sabbir":50,
    "Masum":undefined
}
console.log(item["Ehsan"])

const bioData = {
    my_name:"Shuvo",
    age:23,
    developer:true,
    secret:undefined
}
console.log(bioData.my_name)
console.log(bioData.age)
console.log(bioData["ret"]) //the key "ret" doesn't exist in the object bioData.
