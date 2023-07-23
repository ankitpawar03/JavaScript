//what is objects and why we use it
//objects are used to store data in key value pairs and we can access that data using keys of that object and we can also add new data to that object and we can also delete data from that object and we can also update data of that object and we can also make new objects using objects

//objects are reference type data type

//how to make objects

// const person = {name: "Ankit", age: 20};
//when we make objects using curly braces we call it object literal syntax
// console.log(person);
// console.log(typeof person);

//objects don't have index numbers

//how to access data from objects
// console.log(person.name);
// console.log(person.age);

const person = {
  name: "Ankit",
  age: 20,
  hobbies: ["coding", "gaming", "reading"],
  greet: function () {
    console.log("Hello");
  },
};

//if we want to access hobby from hobbies array
console.log(person.hobbies);
//we can treat hobbies as an array
console.log(person.hobbies[0]);

// how to add key value pairs to objects
person.gender = "male";
console.log(person);

// we can access using square brackets also but we have to pass key as a string in square brackets and we can also add new key value pairs using square brackets and we can also update key value pairs using square brackets

console.log(person["name"]);

