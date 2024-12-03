console.log("I am a tutorial on Loops");

// for-loop
let a = 1;
// console.log(a)
// console.log(a+1)
// console.log(a+2)
for (let i = 0; i < 100; i++){
    console.log(a + i)
}

// for-in-loop
let obj = {
    name: "Shuvo",
    role: "Programmer",
    company: "CodeForge"
}
for (const key in obj){
    const element = obj[key];
    console.log(key,element)
}
// output for key 
for (const key in obj){
    console.log(key)
}

// for-of-loop 
for (const element of "SHUVO") {
    console.log(element)
}

// while-loop 
let i = 0;
while (i < 6){
    console.log(i)
    i++
}

// do-while-loop
let l = 0;
do {
    console.log(l)
    l++;  
} while (l < 6);