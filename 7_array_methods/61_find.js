// find method

// find method returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.

const myArray = ["Hello", "World", "JavaScript", "ES6"];

// function isLength3(string){
//     return string.length === 3;
// }

// const ans = isLength3("dog");

// const ans = myArray.find(isLength3)
// const ans = myArray.find((string) => string.length === 3);

// console.log(ans)

const users = [
    {firstName: 'John', lastName: 'Doe', age: 30},
    {firstName: 'Jane', lastName: 'Doe', age: 25},
    {firstName: 'Jack', lastName: 'Doe', age: 20},
]

const id = users.find((user)=> user.age === 25)
// we can return without writing return keyword in arrow function because it is a single line statement. or it has only one statement.
console.log(id)

