// optional chaining

let user = {
    name: 'John',
    age: 30,
    // address: {house: '123'}
}

// let user;

// question mark is optional chaining operator and it will check if the property exists or not and if it exists then it will print it otherwise it will not throw an error and will print undefined instead of throwing an error and stopping the execution of the program
console.log(user?.name)
console.log(user?.address?.house)