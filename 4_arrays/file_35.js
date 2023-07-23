// array destructuring

const myArray = ["value1", "value2", "value3", "value4"];

let myVar1 = myArray[0];
let myVar2 = myArray[1];

// console.log(myVar1);
// console.log(myVar2);

// we can do the same thing using array destructuring

// const [myVar3, myVar4] = myArray;
// this is array destructuring syntax
// first value of array will be assigned to variable 1 and second value of array will be assigned to variable 2 and so on

// console.log(myVar3);

// const [ , , myVar5] = myArray;
//if we want to skip some value of array then we can do that by leaving a blank space in array destructuring syntax
// console.log(myVar5);


// we can make a new array using array destructuring

// let myArray2 = myArray.slice(0); // this is the way to copy an array
// console.log(myArray2);
//instead of this we can use array destructuring

let [myValue1, myValue2, ...myArray3] = myArray // this is the way to copy an array using array destructuring
//it will make new array of rest of the values of name myArray3
console.log(myValue1, myArray3);