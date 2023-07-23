// differnce between dot and bracket notation

const key = "email";

const person = {
    name: "Ankit",
    age: 20,
    "person hobbies": ["coding", "gaming", "reading"],
    //if we want name a key in two words we have to use "" if we don't use "" then it will give error
};

// console.log(person["person hobbies"]);

// person["key"] = "01ankitpawar@gmail.com"
//instead of this we can use
person[key] = "01ankitpawar@gmail.com"
console.log(person);