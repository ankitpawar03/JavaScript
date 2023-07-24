// splice method
// start, delete, insert

// it is used to add or remove elements from the array

const myArr = ["item1", "item2", "item3", "item4", "item5"];

// delete
const deletedItem = myArr.splice(1, 2); // ["item1", "item4", "item5"]
// it will delete the elements from index 1 to 2
console.log(myArr);
// we can print the deleted elements
console.log(deletedItem);

// add element or insert element
myArr.splice(1, 0, 'Inserted item'); // ["item1", "Inserted item", "item4", "item5"]

console.log(myArr);

// inserting and deleting elements at the same time
const deleted = myArr.splice(1, 2, "inserted item2", "insertedItem3"); // ["item1", "inserted item2", "inserted item3", "item5"]
console.log(myArr);
console.log(deleted);