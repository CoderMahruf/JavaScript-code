// while Loop in JavaScript
let n = prompt("Enter a Number:")
let i = 0;
while(i < n){
    console.log(i)
    i++;
}

// let input = prompt("Enter a Number:")
let l = 0;
while(l < input){
    console.log(l)
    l ++
}

// do-while Loop in JavaScript
let m = prompt("Enter a Numeber:")
let p = 0;
do{
    console.log(p)
    p ++
}while(p < m)


let input;
do{
    input = prompt("Enter a number:")
}while(isNaN(input))
let d = 0;
do{
    console.log(d)
    d ++
}while(d < input)

// Write a sample program damonstrating do-while loop 
let num = prompt("Enter the value of n:")
let y = 0;
do{
    y ++
    console.log(y+" X "+ num+" = "+ y*num)
}while(y < num)