// nested destructuring

const users = [
    
    {userId: 1, name: "Ankit", age: 20},
    {userId: 2, name: "Rohit", age: 21},
    {userId: 3, name: "Rahul", age: 22},
]

const [{userId: user1Id, age: user1Age}, , {age: user3Age}] = users;

console.log(user1Id, user1Age , user3Age);
//this will give us userId and age of user1 and age of user3