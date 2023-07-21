// undefined

let firstName;

// console.log(firstName);
// console.log(typeof firstName);
// it gives output as undefined because value is not defined to the variable

// firstName = "Ankit";
// now value is assigned to variable
// console.log(firstName);
// console.log(typeof firstName, firstName);


// null

let myVariable = null;
console.log(myVariable);

myVariable = "Ankit";
console.log(myVariable, typeof myVariable);

console.log(typeof null);
// this is a bug in javascript, error in the language

// BIG INTEGER

let myNumber = 123;
console.log(myNumber);

// Maximum safe integer in javascript is 9007199254740991
console.log(Number.MAX_SAFE_INTEGER);

// if we want to print bigger number than this, we use bigInt
let myBigNumber = 1234567890123456789012345678901234567890n;
console.log(myBigNumber)
// or
myBigNumber2 = BigInt(1234567890123456789012345678901234567890);
console.log(myBigNumber2);

let num = 123;

// console.log(myBigNumber + num);
// it gives error because we cannot add bigInt and number
// so we have to convert number into bigInt

num = BigInt(123);

console.log(myBigNumber + num);