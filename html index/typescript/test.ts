
//Basic Types
let age: number = 25;
let studentName: string = "Rose";
let isOnline: boolean = true;
let hobbies: string[] = ["Reading", "Coding"];
console.log(age);
console.log(studentName);
console.log(isOnline);
console.log(hobbies);

//Functions with Types
function greet(name: string): string {
  return "Hello, " + name;
}

console.log(greet("Mary"));

// Interfaces
interface User {
  id: number;
  name: string;
  email: string; 
}

const user: User = {
  id: 1,
  name: "Rose",
  email:"rose@gmail.com"
};
console.log(user);