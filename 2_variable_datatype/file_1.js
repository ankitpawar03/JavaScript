"use strict"
// we use strict mode to avoid some common mistakes in javascript

// Introduction to variable
// Variable is a container which can hold any type of data
// In simple words variable is a name given to a container or storage location
// we can vary the value of variable that is why it is called variable

var a = 1;
console.log(a);
// var is a keyword which is used to declare a variable
// there "a" is a name of variable or a container which is holding a value 1

// an other example we have a container which can hold 10 kg of rice

var rice = 10;
console.log(rice);

// we can change the value of rice in that container
rice = 5;
console.log(rice);
// we can put 5 kg of rice or 10 kg of rice or 15 kg of rice
// we dont have to write var keyword again because we have already declared it
// it will give us changed value of rice

// variables are case sensitive whice means we can not get rice value by writing Rice

// console.log(Rice);
// this will give us error because we have not declared Rice variable

// and we can not use same name for two variables

var a = 1;

// var keyword allows us to declare multiple variables with same name

// declare a variable
var firstName = "ankit";
// using variable for printing its value
console.log(firstName);

// change value
firstName = "ankit kumar";

console.log(firstName);