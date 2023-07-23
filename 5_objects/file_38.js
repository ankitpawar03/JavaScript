//how to iterate over an array

const person = {
    name: "Ankit",
    age: 20,
    "person hobbies": ["coding", "gaming", "reading"],
};


// for(let key in person){
//     // console.log(`key : ${person[key]}`);
//     // or
//     console.log(key,":", person[key]);
// }

// console.log(Object.keys(person));
// console.log(typeof Object.keys(person));

// console.log(Array.isArray(Object.keys(person)))

for(let key of Object.keys(person)){
    console.log(person[key])
}