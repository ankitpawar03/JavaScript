// fill method
// value to fill
// start index
// end index

// const myArr = new Array(5).fill(0);

// console.log(myArr);

const myArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

myArr2.fill(0, 2, 6); // [1, 2, 0, 0, 0, 0, 7, 8, 9]
// it will change the value of the original array from index 2 to 6 to 0
console.log(myArr2)