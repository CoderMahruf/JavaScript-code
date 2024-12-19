// More Array Methods
// delete()
let fruits = ["Apple", "Orange", "Banana"];
delete fruits[1];
console.log(fruits); 

// concat()
let fruits2 = ["Apple", "Orange", "Banana"];
let food = fruits2.concat("Pineapple");
console.log(food); 

let fruits3 = ["Apple", "Orange", "Banana"];
let vegetables = ["Potato", "Tomato", "Onion"];
let food2 = fruits3.concat(vegetables);
console.log(food2); 

// sort()
let fruits4 = ["Banana", "Orange", "Apple"];
fruits4.sort();
console.log(fruits4);
// Also, the sort() method sorts the elements as Alphabetically strings by default.
let numbers = [40, 100, 1, 5, 29, 10, 2907];
numbers.sort();
console.log(numbers);
// The following code sorts the array numbers in ascending order
let compare = (a,b)=>{
    return a -b
}
let numbers1 = [40, 100, 1, 5, 29, 10, 2907];
numbers1.sort(compare)
console.log(numbers1)
// The following code sorts the array numbers in descending order
let compares = (a,b)=>{
    return b -a 
}
let numbers2 = [40, 100, 1, 5, 29, 10, 2907];
numbers2.sort(compares)
console.log(numbers2)

// reverse()
let fruits5 = ["Apple", "Orange", "Banana"];
fruits5.reverse();
console.log(fruits5); 

let numbers3 = [40, 100, 1, 5, 29, 10, 2907];
numbers3.reverse();
console.log(numbers3); 

// slice()
let num = [551, 22, 3, 14, 5, 6, 7, 8, 229]
let newNum = num.slice(3, 5)
console.log(newNum)

// splice()
let num2 = [551, 22, 3, 14, 5, 6, 7, 8, 229]
let deletedValues = num2.splice(2, 4, 1021, 1022, 1023, 1024, 1025)
console.log(num2)
console.log(deletedValues)

// indexOf()
let fruits6 = ["Apple", "Orange", "Banana"];
let index = fruits6.indexOf("Banana");
console.log(index);