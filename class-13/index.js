// Strings
let name = "Shuvo";         //correct
let friend = 'Siam'      //correct
// let wrong = 'Harry";   // dont do this!    

// You can convert a number to a string using the toString() method.
let age = 23;
let ageAsString = age.toString();
console.log(typeof ageAsString); 

// Template Literals
const myName = "Shuvo";
const favorite = "Apple";
const sentence = myName + " loves " + favorite;
console.log(sentence); 
// This is called string interpolation.
const sentence2 = `${myName} loves ${favorite}`;
console.log(sentence2); 

// Escape Sequences
let sentence3 = 'She said, "Hello!"';
console.log(sentence3);                

let sentence4 = "She said, \"Hello!\"";
console.log(sentence4);                 

let sentence5 = "She said, \"Hello!\"";      
console.log(sentence5); 

let sentence6 = "Hello\nWorld";
console.log(sentence6); 

let sentence7 = "Hello\tWorld";
console.log(sentence7); 

let sentence8 = "Hello\n\tWorld";
console.log(sentence8); 