// how to clone array

// how to concatenate two arrays

let arr1 = ["item1", "item2"];
// let arr2 = ["item1", "item2"]; // this is wrong way to clone an array
// or
// let arr2 = arr1.slice(0); // this is the way to clone an array 
//or
// let arr2 = arr1.concat(); // this is the way to clone an array
// or
// let arr2 = [].concat(arr1); // this is the way to clone an array
// or
// let arr2 = [...arr1]; // this is the way to clone an array
//this is the spread operator it is used to spread the elements of an array or an object

//this is the way to concatenate two arrays and add elements in the array at the same time
// let arr2 = arr1.slice(0).concat(["item3", "item4"]);
// or
let arr2 = arr1.concat(["item3", "item4"]);

arr1.push("item3");

console.log(arr1 === arr2);

console.log(arr1);
console.log(arr2);