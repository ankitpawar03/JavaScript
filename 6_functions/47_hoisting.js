// hoisting
// hoisting is a process of moving function declarations to the top of the file

sayHi()

function sayHi() {
    console.log('Hi');
}

sayHi();

// it will not work with function expressions because they are assigned to variables and variables are not hoisted to the top of the file and they are initialized with undefined and when we try to call the function, it will throw an error

// hello();
// we can not call the function before it is declared in function expression like given above

let hello = function () {
    console.log('Hello');
}
hello();

