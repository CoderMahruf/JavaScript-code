// Function in JavaScript 
function details(name) {
    console.log("Hey " + name + " you are good!")
    console.log("Hey " + name + " your Phone name is OnePlus12!")
    console.log("Hey " + name + " your laptop name is MSI!")
    console.log("Hey " + name + " your course is good too!")
}
details("Shuvo")


function sum(a, b, c = 2) {
    // console.log(a + b)
    console.log(a, b, c)
    return a + b + c
}
result1 = sum(3, 5)
result2 = sum(9, 5)
result3 = sum(3, 15, 3)
console.log("The sum of these numbers is:", result1)
console.log("The sum of these numbers is:", result2)
console.log("The sum of these numbers is:", result3)

// Arrow Function in JavaScript
const func1 = (x) =>{
    console.log("The function is arrow function.",x)
}
func1(33)
func1(44)
func1(55)