// sets (sets are iterable)
// sets are a new object type with ES6 (ES2015) that allow to create collections of unique values.

// sets also have it's own methods like add, delete, has, clear, etc.
// No index based access
// order is not guaranteed
// unique items only (no duplicates allowed)
// set ingores duplicate values
// this is syntax of sets
// const numbers = new Set();
// we can add different data types in sets

const numbers = new Set();
numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(4);
numbers.add(5);
numbers.add(['item1'])
numbers.add(['item1'])
// both arrays are different because they are stored in different memory locations

if(numbers.has(1)){
    console.log('yes');
}
else{
    console.log('no');
}
console.log(numbers);

for(let item of numbers){
    console.log(item);
}

const myArr = [1, 2, 3, 4, 4, 6, 6, 8, 9];

const uniqueEle = new Set(myArr);
console.log(uniqueEle)
// it will create a set of unique elements it not modify the original array
console.log(myArr)
// console.log(uniqueEle.length) // it will give us undefined because sets don't have length property

let length = 0;

for(let item of uniqueEle){
    length++;
}
console.log(length);
// that is how we can find the length of sets