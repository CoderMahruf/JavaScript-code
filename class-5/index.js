// Q1: Adding numbers to strings
// Q: Create a variable of type string and try to add a number to it?
let myName = "Shuvo"
let age = 23
console.log(myName + age)

// Q2: Using typeof
// Q: Use type of operator to find the datatype of the string in last question?
console.log(typeof (myName + age))

// Q3: Const objects
// Q: Create a const object JavaScript can you change it to hold a number later?
const a1 = {
    name1:"Shuvo",
    section:1,
    isPrincipal:false
}
// a1 = 23   //Throws an errors because constant cannot be changed.
// console.log(a1)

// Q4: Modifying const objects
// Q: Try to add a new key to the const object in problem 3.were you able to do it?
a1["friend"] = "Sazid"
a1["name1"] = "Mahruf"
console.log(a1)

// Q5: Month dictionary
// Q: write a is program to create a word-meaning dictionary of 5 words?
const dict = {
    appreciate: "recognize the full worth of.",
    ataraxia: "a state of freedom from emotional disturbance and anxiety",
    yakka: "work, especially hard work."
  }
  console.log(dict['yakka'])