//intro to arrays
//reference type

//how to create an array

//there are two ways to create an array
//first way is to use square brackets

// let arr = [1,2,3,4,5,6,7,8,9,10];

//second way is to use array constructor

// let arr1 = new Array(1,2,3,4,5,6,7,8,9,10);
//this is the array constructor

// console.log(arr);
// console.log(arr1);

//ordererd collection of values

// let fruits = ['apple','mango','banana','orange','grapes'];

// console.log(fruits);

//arrays are indexed

// console.log(fruits[0]);
// console.log(fruits[1]);

//arrays are mutable

// fruits[0] = 'pineapple';

// console.log(fruits);

//arrays are dynamic in nature means we can add or remove elements from the array at any time we want to do

// fruits[5] = 'papaya';

// console.log(fruits);

// we can store different types of data in an array like string, number, boolean, object, array, etc.

let arr2 = [1,2,3,'apple','mango',true,false,{name:'saksham',age:18},['a','b','c']];
console.log(arr2);

console.log(typeof arr2);

console.log(Array.isArray(arr2));
//this is used to check whether the given variable is an array or not it will return true if the given variable is an array otherwise it will return false

// console.log(arr2.length);
//this is used to find the length of the array
