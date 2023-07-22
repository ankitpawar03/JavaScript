//primitive vs reference types

let num1 = 10;
let num2 = num1;

console.log("value of num1 is: " + num1);
console.log("value of num2 is: " + num2);

num1 = 20;

console.log("after incrementing num1 by 10");
console.log("value of num1 is: " + num1);
console.log("value of num2 is: " + num2);

// in the above example num1 and num2 are primitive types so when we change the value of num1 it will not affect the value of num2

let arr1 = ["items1", "items2",];

let arr2 = arr1;

console.log("arr1", arr1);
console.log("arr2", arr2);

arr1.push("items3");

console.log("after pushing items3 in arr1");

console.log("arr1", arr1);
console.log("arr2", arr2);

// in the above example arr1 and arr2 are reference types so when we change the value of arr1 it will also affect the value of arr2 because both arr1 and arr2 are pointing to the same memory location so when we change the value of arr1 it will also change the value of arr2 because both arr1 and arr2 are pointing to the same memory location

// in javascript there are 6 primitive types and 3 reference types and they are as follows:

// primitive types: number, string, boolean, undefined, null, symbol

// reference types: object, array, function

// in javascript arrays are also objects so they are reference types not primitive types