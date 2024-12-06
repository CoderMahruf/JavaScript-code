let a = prompt("Hey whats you age?");
a = Number.parseInt(a); // Converting the string to a number
if(a<0){
  alert("This is an invalid age");
}
else if(a<9){
  alert("You are a kid and you cannot even think of driving");
}
else if(a<18 && a>=9){
  alert("You are a kid and you can think of driving after 18");
}
else{
  alert("You can now drive as you are above 18");
}
console.log("Done")
// Ternary Operator
console.log("You can", (a<18? "not drive" :"drive"))


// Getting User Input for typecasting
let age = prompt("Enter your age");
console.log(typeof age); //age is of string datatype
age = Number(age);
console.log(typeof age); // Converting the string to a number
// We can also use the parseInt() function to convert the string datatype to a number.
age = parseInt(age);
console.log(typeof age); // Converting the string to a number


let input = prompt("Enter a string");
if(input === "Hello"){
    console.log("Hello World");
}
else if(input === "Goodbye"){
    console.log("Goodbye World");
}
else{
    console.log("Invalid Input");
}

let input = prompt("Enter a number");
if(input > 10){
    console.log("Number is greater than 10");
}
else if(input < 10){
    console.log("Number is less than 10");
}
else{
    console.log("Number is equal to 10");
}

// Ternary Operator
let input = prompt("Enter a string");
input === "Hello" ? console.log("Hello World") : console.log("Goodbye World");