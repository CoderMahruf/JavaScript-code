// JavaScript String Methods 
// String Length
let myName = "Shuvo";
console.log(myName.length); 

// toUpperCase()
let name2 = "Shuvo";
console.log(name2.toUpperCase());

// toLowerCase()
let name3 = "Shuvo";
console.log(name3.toLowerCase()); 

// slice()
let name4 = "Shuvo";
console.log(name4.slice(2, 4)); 
console.log(name4.slice(1, 3)); 
console.log(name4.slice(2)); 

// replace()
let name5 = "Shuvo";
console.log(name5.replace("vo", "do")); 
//  This will not work because "Lh" is not present in the string
console.log(name5.replace("Lh", "do")); 

// trim()
let spacedName = "       Shuvo        ";
console.log(spacedName.trim()); 

// indexOf()
let names = "Shuvo";
console.log(names.indexOf("v"));
// This will give -1 because "R" is not present in the string
console.log(names.indexOf("R")); 

// Indexing
let names1 = "Shuvo";
console.log(names1); 
console.log(names1[0]);
console.log(names1[1]); 
console.log(names1[2]); 
console.log(names1[3]); 
console.log(names1[4]); 

let names2 = "Shuvo";
let upperCaseName = names2.toUpperCase();
console.log(upperCaseName); 
// Shuvo (original string is unchanged)
console.log(names2); 

// QuickQuiz: Use a for loop to print a string
const stringName = "Mahruful Alam"
for (let i = 0;i < stringName.length;i++){
    console.log(stringName)
}