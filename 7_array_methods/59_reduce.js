// reduce

// reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.

const numbers = [1, 2, 3, 4, 5];

// aim = sum of all the elements of the array.

const sum = numbers.reduce ((accumnulator, currentValue) => {

    return accumnulator + currentValue;

}, 0)
// here 0 is the initial value of the accumnulator. it is optional. if we don't provide it then the first element of the array will be the initial value of the accumnulator.

// accumulator = 1, currentValue = 2 in the first iteration.
// returns 3
// accumulator = 3, currentValue = 3 in the second iteration.
// returns 6
// accumulator = 6, currentValue = 4 in the third iteration.
// returns 10
// accumulator = 10, currentValue = 5 in the fourth iteration.
// returns 15

const userCart = [
    { product: 'laptop', price: 1000, quantity: 1 },
    { product: 'shirt', price: 500, quantity: 2 },
    { product: 'watch', price: 600, quantity: 1 },
    { product: 'phone', price: 1000, quantity: 1 },

]

const totalPrice = userCart.reduce((totalP, currentProduct) => {

    return totalP + (currentProduct.price * currentProduct.quantity);

}, 0)

console.log(totalPrice);

// in first iteration
// totalP = 0, currentProduct = { product: 'laptop', price: 1000, quantity: 1 }
// returns 1000
// in second iteration
// totalP = 1000, currentProduct = { product: 'shirt', price: 500, quantity: 2 }
// returns 2000
// in third iteration
// totalP = 2000, currentProduct = { product: 'watch', price: 600, quantity: 1 }
// returns 2600
// in fourth iteration
// totalP = 2600, currentProduct = { product: 'phone', price: 1000, quantity: 1 }
// returns 3600