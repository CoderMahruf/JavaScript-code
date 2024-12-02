console.log("JavaScript class 3: var,let and const.")
// Var Variables
var name1 = "Shuvo";
console.log(name1); 

// we can also reassign the value of a variable declared using the var keyword:
var name2 = "Shuvo";
name2 = "Ehsan";
console.log(name2); 

// This is the reason why the var keyword is not recommended to be used anymore. It can lead to unexpected results. 
var name3 = "Shuvo";
{
    var name3 = "Mahruf";
    console.log(name3); 
}
console.log(name3); 

// Let Variables
let b = "Shuvo";
{
let b = "this";
console.log(b); 
}
console.log(b); 

// Const Variable 
const name4 = " Shuvo";
name4 = "this";  //Throws an errors because constant cannot be changed
console.log(name4);


{
    const myname = "Shuvo";
    const hobby = "Programming";
    console.log("My name is " + myname + " and I love " + hobby);
}