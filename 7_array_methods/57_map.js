// map method

const numbers = [1, 2, 3, 4, 5];

// const myFunc = function (num) {
    // return num * num;
    // map returns a new array with the same length as the original array but with the modified elements.
    // if we don't return anything then it will return undefined.
// }

// const squarNumber = numbers.map(myFunc);
// this will return a new array with the same length as the original array but with the modified elements.
// console.log(squarNumber);

// or

// const squarNumber = numbers.map((num, index) => {
//     return `index: ${num}, ${num * num}`;
// })

// console.log(squarNumber);

const users = [

    {firstName: 'John', lastName: 'Doe', age: 30},
    {firstName: 'Jane', lastName: 'Doe', age: 25},
    {firstName: 'Jack', lastName: 'Doe', age: 20},

]

const userNames = users.map((user) => {
    return user.firstName;
})

console.log(userNames);

// how map works internally
// it takes a callback function as an argument and it calls that callback function for each element of the array and it passes the current element as an argument to the callback function and whatever the callback function returns, it puts that value in the new array and it returns that new array.