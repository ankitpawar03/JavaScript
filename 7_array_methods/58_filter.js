// filter method

const numbers = [1, 2, 3, 4, 5];

const oddNums = (num) => {
    return num % 2 !== 0;
}

const oddNumbers = numbers.filter(oddNums);
console.log(oddNumbers);

// filter method returns a new array with the elements that pass the test.
// it only store the elements if the callback function returns true.
// it doesn't modify the original array. it returns a new array.
// internally it takes a callback function as an argument and it calls that callback function for each element of the array and it passes the current element as an argument to the callback function and whatever the callback function returns, it puts that value in the new array and it returns that new array.