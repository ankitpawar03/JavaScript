// booleans and comparisons operators

// boolean represent one of two values: true or false

let num1 = 5;
let num2 = 10;

console.log(num1 > num2); // false because 5 is not greater than 10
console.log(num1 < num2); // true because 5 is less than 10
console.log(num1 >= num2); // false because 5 is not greater than or equal to 10
console.log(num1 <= num2); // true because 5 is less than or equal to 10
console.log(num1 == num2); // false because 5 is not equal to 10

num1 = "10";
num2 = 10;

// == vs ===

console.log(num1 == num2); // true because == operator does not check the datatype , it only checks the value

console.log(num1 === num2); // false because === operator checks the datatype and value both

// != vs !==
num1 = 10;
num2 = "11";

console.log(num1 != num2); // true because != operator does not check the datatype , it only checks the value

console.log(num1 !== num2); // true because !== operator checks the datatype and value both