// Maps

// this is called object literal also called object initializer
// keys always are strings in objects

const person = {
    firstName: 'John',
    age: 30,
    1 : 'test',
}
// console.log(person.firstName);
// console.log(person['firstName']);
console.log(person[1]);

// for(let key in person) {
//     console.log(typeof key);
// }

// In maps keys can be anything
// key value pairs in map
const person2 = new Map();
person2.set('firstName', 'John')
person2.set('age', 30)
// we can use arrays as keys
person2.set([1,2,3], 'oneTwoThree')
// we can use numbers as keys
person2.set(1, 'key is number')
// we can use functions as keys
person2.set(function(){}, 'key is function')
// we can use objects as keys
person2.set({a:1}, 'key is object')
console.log(person2)
console.log(person2.get(1))

// this is iterater for maps
// console.log(person2.keys())

// for(let key of person2.keys()) {
//     console.log(key, typeof key,person2.get(key));
// }

// destructuring in maps
// for (let [key, value] of person2){
//     // it will give us an array of key value pairs
//     console.log(key, value);
// }

// entries method
// for (let [key, value] of person2.entries()){
//     // it will give us an array of key value pairs
//     console.log(key, value);
// }

const person3 = new Map([['firstName', 'John'], ['age', 30]]);
console.log(person3);

const person4 = {
    firstName: 'John',
    age: 30,
}

const userInfo = new Map();
userInfo.set(person4,{id : 8, gender: "male"});
console.log(userInfo);

console.log(person4.age)
console.log(userInfo.get(person4).id)