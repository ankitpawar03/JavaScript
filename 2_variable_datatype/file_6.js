// some method tha are usefull for string

//1.trim()

let firstName = "  Ankit  ";
// console.log(firstName);
// console.log(firstName.length);

// console.log(firstName.trim()); // this will remove all the spaces from starting and ending of string but it will not remove spaces from between the string

// console.log(firstName.length);
// but there we can see that it is not reduce the length of string because strings are immutable in javascript
// the trimed name that we get from trim() method is created as new string and it is not changed the original string

// we can store the trimed string in new variable
// let trimedName = firstName.trim();

// or we can store it in same variable
// firstName = firstName.trim();

// console.log(trimedName);
// console.log(trimedName.length);
// now it will give new length of string stored in trimedName variable

// console.log(firstName.toUpperCase());
// it is used to convert string into uppercase
// it will also not change the original string

// console.log(firstName);
// this is giving us original string because as we learn that strings are immutable in javascript
// we can store the uppercase string in new variable than use it for further use

// 2. upperCase()
// let upperCaseName = firstName.toUpperCase();
// console.log(upperCaseName);

// 3. lowerCase()
// we can also convert string into lowercase using toLowerCase() method
// console.log(firstName.toLowerCase());

// 4.slice()
// slice() method is used to slice the string between given index

let name2 = "ankit kumar";

let slicedName = name2.slice(1,8);
// it includes the starting index but not the ending index
console.log(slicedName);

// to include the ending index we can add 1 to ending index
slicedName = name2.slice(1,9);

console.log(slicedName);

// if we pass only starting index in slice method it will slice the string from starting index to end of string

slicedName = name2.slice(1);
console.log(slicedName);