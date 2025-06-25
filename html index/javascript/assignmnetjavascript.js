console.log("Hello, world!");

// Function Declaration
function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("Rose"));

// Function Declaration
function addNumbers(a, b) {
  return a + b;
}
console.log(addNumbers(2, 5));

// Function Expression
const addExpr = function(a, b) {
  return a + b;
};
console.log(addExpr(3, 4));

// Traditional
function add(a, b) {
  return a + b;
}

// Arrow Function (ES6)
const addArrow = (a, b) => a + b;
console.log(addArrow(10, 15));

//Types of Scope

// Global Scope
// Variables declared outside any function are in the global scope.
// Types of Scope

// ➤ Global Scope
// Variables declared outside any function are in the global scope.
let globalVar = "I am global";

function testGlobal() {
  console.log(globalVar);
}
testGlobal();


// ➤ Function (Local) Scope
// Variables declared inside a function are not accessible outside.
function testLocal() {
  let localVar = "I am local";
  console.log(localVar);
}
testLocal();


// Block Scope (with let and const)
// Introduced in ES6 — variables declared with let or const inside {} blocks are only accessible within that block.
{
  let x = 10;
  const y = 20;
 console.log(x, y); 
}


// Scope Chain
// When a variable is not found in the current scope, JavaScript looks up the scope chain to find it.
let globalVar1 = "global";

function outer() {
  let outerVar = "outer";

  function inner() {
    console.log(globalVar1);
    console.log(outerVar);  
  }

  inner();
}
outer();

// ES6 FEATURES — QUICK REFERENCE
// let and const
// let: block-scoped variable
let age = 25;
const name = "Rose";
console.log(age);
console.log(name);


//  Array map()
// Transforms each element and returns a new array.
const nums = [1, 2, 3];
const squared = nums.map(n => n * n); 
console.log(nums);
console.log(squared);

// Array find()
// Returns the first element that satisfies a condition.
const ages = [12, 17, 21, 30];
const adult = ages.find(age => age >= 18); 
console.log(ages);
console.log(adult);

// Array findIndex()
// Returns the index of the first element that satisfies a condition.
console.log(".....Array findIndex().......");
const rollnumbers = [12, 17, 21, 30];
const index = rollnumbers.findIndex(age => age >= 18); 
console.log(rollnumbers);
console.log(index);

// Array every()
// Checks if all elements satisfy a condition → returns true or false.
console.log(".....Array every().......");
const marks = [60, 70, 80];
const allPassed = marks.every(mark => mark >= 50);
console.log(marks);
console.log(allPassed);
const marks2 = [40, 70, 80];
const allPassed2 = marks2.every(marks2 => marks2 >= 50);
console.log(marks2);
console.log(allPassed2);//getting wrong


//  Array some()
// Checks if at least one element satisfies the condition.
console.log(".....Array some().......");
const marks3 = [30, 40, 70];
const anyPassed = marks3.some(marks3 => marks3 >= 50); 
console.log(marks3);
console.log(anyPassed);
const marks4 = [30, 40, 20];
const anyPassed2 = marks4.some(marks4 => marks4 > 60); 
console.log(marks4);
console.log(anyPassed2);//getting wrong

// Array forEach()
// Executes a function for each element (no return).
console.log(".....Array forEach().......");
const names = ["Rose", "John", "Lily"];
console.log(names);
names.forEach(name => console.log(name));


// Template Strings / Literals
// Use backticks ` and ${} to insert variables.
console.log(".....Use backticks ` and ${} to insert variables........");
let name1 = "Rose";
let msg = `Hello, ${name}!`; 
console.log(msg);

// map() – Transform Array Elements
// Creates a new array by applying a function to each element.
console.log(".....map() – Transform Array Elements........");
const nums1 = [1, 2, 3, 4];
const doubled = nums.map(n => n * 2);
console.log(doubled); 

// filter() – Filter Array Elements
// Returns a new array with elements that pass the condition.
const nums3 = [1, 2, 3, 4, 5];
const evens = nums.filter(n => n % 2 === 0);
console.log(evens); 

// Set – Store Unique Values
// A Set is a collection of unique values (no duplicates).
const numbers = new Set();

numbers.add(1);
numbers.add(2);
numbers.add(2); 

console.log(numbers); 


// Combine filter() and map()
const ages2 = [10, 15, 20, 25];

const adults = ages2
  .filter(ages2 => ages2 >= 18)
  .map(ages2 => `Age: ${ages2}`);

console.log(adults); 
