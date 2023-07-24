// every method

// const numbers = [2, 4, 6, 8, 10];

// const ans = numbers.every((num) => num % 2 === 0);

// it returns boolean value. if all the elements of the array pass the test then it returns true otherwise it returns false.

// if there any one element that fails the test then it returns false.
// console.log(ans);

// realistic example

const userCart = [

    { product: 'laptop', price: 1000, quantity: 1 },
    { product: 'shirt', price: 500, quantity: 2 },
    { product: 'watch', price: 600, quantity: 1 },
    { product: 'phone', price: 1000, quantity: 1 },

]

const ans2 = userCart.every((item) => item.price > 1)

console.log(ans2);