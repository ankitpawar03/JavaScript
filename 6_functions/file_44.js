// functions

// functions used for code reusability and to avoid code duplication and to make the code more readable and maintainable
// another reason to use function is to avoid polluting the global namespace with variables and functions and to avoid naming collisions

// functions are objects in javascript and can be assigned to variables and passed around like any other object in javascript
// functions can be anonymous and can be passed as arguments to other functions and can be returned from other functions as well
// functions can be defined in two ways in javascript - function declaration and function expression

// function declaration - function name is mandatory in function declaration

// function add(a, b) {
//     return a + b;
//  }

function singHappyBirthday() {
    console.log("Happy Birthday to you");
}

singHappyBirthday();
// now when we call the function, it will print the message to the console

function twoPlusTwo() {
    return 2 + 2;
}
// untill we call the function, it will not execute the code inside the function
console.log(twoPlusTwo());
// or
const result = twoPlusTwo();
console.log(result);

function add(a, b) {
    //here a and b are parameters or arguments of the function
    return a + b;
}

const returnVal = add(2, 3);
// here 2 and 3 are arguments of the function add and they are passed to the function when it is called and they are assigned to the parameters a and b respectively in the function definition and the function returns the sum of the two arguments passed to it and the return value is assigned to the variable returnVal and then the variable is printed to the console using console.log function
console.log(returnVal);

const returnVal2 = add();
// here if we not passing any arguments to the function, then the function will return NaN because the parameters a and b are not assigned any values and they are undefined and when we try to add undefined to undefined, it will return NaN
console.log(returnVal2);

const returnVal3 = add(2);
// it will return NaN because the parameter b is not assigned any value and it is undefined and when we try to add 2 to undefined, it will return NaN
console.log(returnVal3);

// odd or even function

function oddOrEven(num){
    // if(num % 2 == 0){
    //     console.log(true);
    // }else{
    //     console.log(false);
    // }
    // or
    console.log(num % 2 == 0 ? true : false);
}

oddOrEven(2);
oddOrEven(3);

function firstChar(str){
    return str[0];
}

console.log(firstChar("hello"));

function find(arr, target){

    for(let index in arr){
        if(arr[index] == target){
            return index;
        }
    }
    return -1;
}
