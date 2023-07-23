//spread operator

// const array = [1,2,3,4,5,6,7,8,9,10];

// const array2 = [...array, 11,12,13,14,15];

// console.log(array2)

// const newArray = [..."123456789"];
// this will give us an array of strings
// console.log(newArray)

// spread operator in objects
const obj1 = {
    key1: "value1",
    key2: "value2",
}

const obj2 = {
    key1: "value55",
    key3: "value3",
    key4: "value4",   
}

// const newObj = {...obj2, ...obj1, key5: "value5"};
// this will give us a new object with all the key value pairs of obj1 and obj2

// const newObj = {..."123"}

const newObj = {...["item1", "item2", "item3"]} //this will give us an object with index numbers as keys and items as values

console.log(newObj);

