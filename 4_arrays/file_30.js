// for loop in array

let fruits = ["apple", "banana", "orange", "mango"];

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// console.log(fruits.length);
// console.log(fruits[fruits.length - 2]);

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }
// this is the way to iterate over an array using for loop

// if we have to print all array element in upper case

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i].toUpperCase());
// }

// we can make new array of upper case values
let fruits2 = [];

// for (let i=0; i<fruits.length; i++){
    
//     fruits2[i] = fruits[i].toUpperCase();
// }

// or

for (let i=0; i<fruits.length; i++){
    
    fruits2.push(fruits[i].toUpperCase());
}

console.log(fruits2)