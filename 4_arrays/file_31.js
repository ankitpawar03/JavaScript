//use const for creating array

const fruits = ["apple", "mango"];

// fruits = ["apple", "mango2"]; //we can not reassign the array but we can change the value of array elements using index number like below line of code

fruits[0] = "mango"; //we can change the value of array elements using index number like this it is working fine because we are not reassigning the array we are just changing the value of array elements

fruits.push("banana"); // we can add new element in array using push method it is working fine because we are not reassigning the array we are just adding new element in array using push method

console.log(fruits);


let fruits2 = ["apple", "mango"]; //but if we use let keyword then we can change the value of an array

fruits2 = ["apple", "mango2"]; //we can reassign the array using let keyword

console.log(fruits2);

