console.log("Hello I am conditional statements.")

let age = 1;
// let grace = 2;

// age += grace   //Increment operator
// console.log(age)
// console.log(age + grace)
// console.log(age - grace)
// console.log(age * grace)
// console.log(age / grace)
// console.log(age ** grace)
// console.log(age % grace)

if (age == 18){
    console.log("You Can drive");
}
else if (age == 0){
    console.log("Are you Kidding?");
}
else if (age == 1){
    console.log("Are you again Kidding?");
}
else{
    console.log("You cannot drive");
}


let ages = 12;
if (ages > 0){
    console.log("A valid age.");
}
else if (ages > 10 && ages < 15){
    console.log("But You are a Kid.");
}
else if(ages > 18){
    console.log("Not a kid.");
}
else{
    console.log("Invalid Age.");
}

// ternary operator
a = 6;
b = 8;
let c = a>b ? (a-b):(b-a);
console.log(c)