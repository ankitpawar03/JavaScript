// iterables
// iterable objects are objects that implement the Symbol.iterator method which returns an iterator.

// we can apply iterables on arrays, strings, maps, sets, etc.

const firstName = "John";

for(let char of firstName){
    console.log(char);
}

const items = ['item1', 'item2', 'item3', 'item4'];

for (let item of items){
    console.log(item);
}

// const users = {'key1': 'value1', 'key2': 'value2', 'key3': 'value3'};

// for(let user of users){
//     console.log(user);
// }
// it will give us an error because objects are not iterable

// array like objects are also iterable
// any Object which have a length property and indexed elements are called array like objects.

const myObj = "Ankit"
console.log(myObj.length);
console.log(myObj[0]);
//here string is an array like object

