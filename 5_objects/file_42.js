// objects inside array
// very useful in real world applications

const users = [
    
    {userId: 1, name: "Ankit", age: 20},
    {userId: 2, name: "Rohit", age: 21},
    {userId: 3, name: "Rahul", age: 22},
]
//this is called array of objects

for (let user of users){
    console.log(user.userId, user.name);
}
//this will give us userId and name of all the users