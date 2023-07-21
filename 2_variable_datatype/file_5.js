// string indexing
// index starts from 0 in string indexing in javascript and in most of the programming languages

let firstName = "ankit";

//  a n k i t character of string
//  0 1 2 3 4 index of string character

console.log(firstName[2]); // this will print k because k is at index 2

// for finding length of string we use length property
let length = firstName.length;

console.log(length);

// space is also count in length of string
firstName  = "ank  it";

console.log(firstName.length); // this will print 7 because space is also count in length of string

// if we want to find the last index of string we can use length-1 because index starts from 0 and length starts from 1 so we can find last index of string by length-1

console.log(firstName[firstName.length-1]); // this will print t because t is at last index of string
