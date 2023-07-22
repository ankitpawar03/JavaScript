//array push and pop methods

let fruits = ["apple", "mango", "banana", "orange"];

console.log(fruits);

// fruits.push("grapes");

// console.log(fruits);

// fruits.pop();
//pop method is used to remove the last element from the array

// let removedElement = fruits.pop();
// console.log(removedElement);
//this will print the removed element and store it in the removedElement variable

// console.log(fruits);

//array unshift and shift methods

fruits.unshift("grapes");
// this will add the element at the beginning of the array
console.log(fruits);

fruits.shift();
// this will remove the first element from the array
console.log(fruits);

// push and pop methods are faster than unshift and shift methods because push and pop methods only have to deal with the last element of the array but unshift and shift methods have to deal with the first element of the array and all the elements of the array have to be reindexed

