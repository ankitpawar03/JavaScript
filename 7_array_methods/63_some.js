// some method
// some method is similar to every method but it returns true if any one element passes the test.

// const numbers = [2, 4, 6, 8, 10, 11];

// checking if there any number that is odd in the array
// const ans = numbers.some((num) => num % 2 != 0)
// when any one element passes the test then it returns true
// console.log(ans);

const userCart = [

    { product: 'laptop', price: 1000, quantity: 1 },
    { product: 'shirt', price: 500, quantity: 2 },
    { product: 'watch', price: 600, quantity: 0 },
    { product: 'phone', price: 10000, quantity: 1 },

]

const ans2 = userCart.some((product) => product.price > 5000);

console.log(ans2)