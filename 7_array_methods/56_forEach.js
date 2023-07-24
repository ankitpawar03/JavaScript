// important array method

const numbers = [1, 2, 3, 4, 5];

function multi(num, index){

    // console.log(`index is ${index} number is ${num}`);
    // console.log(`${num}*2 = ${num*2}`);
}

// multi(numbers[0], 0);
// multi(numbers[1], 2);

// for(let i=0; i<numbers.length; i++){

//     multi(numbers[i], i);
// }

// numbers.forEach(multi);

// numbers.forEach(function(num, z){

    // console.log(`index is ${z} number is ${num}`);
    // how did it know that the first parameter is the element and second is the index number because we didn't pass any parameter in the function call of forEach method but it still works fine and we can use it as we want to use it.
// })

const users = [

    {firstName: 'John', lastName: 'Doe', age: 30},
    {firstName: 'Jane', lastName: 'Doe', age: 25},
    {firstName: 'Jack', lastName: 'Doe', age: 20},
]

// users.forEach(function(user) {
//     console.log(user.firstName)
// })

// or

users.forEach((user, index) => {
    console.log(user.firstName, index)
})

// or

// for (let user of users){

//     console.log(user.firstName);

// }