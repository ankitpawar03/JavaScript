// sort method

// sort method sorts the elements of an array in place and returns the sorted array.

// it doesn't create a new array. it modifies the original array.

const nums = [5, 9, 1200, 400, 3000];

nums.sort();
console.log(nums); // [ 1200, 3000, 400, 5, 9 ]
// it will give the wrong result because it sorts the elements of the array as strings.

// here firstly it converts all the elements of the array into string and then it compares the UTF-16 code unit values of the strings.
// for example, 1 is 49 in UTF-16 code unit values and 2 is 50 in UTF-16 code unit values. so 2 is greater than 1. so 2 will come after 1 in the sorted array.

// if we want to sort the numbers in ascending order then we have to provide a callback function to the sort method.

const userName = ['rahul', 'aman', 'karan', 'ronak', 'dheeraj', 'vivek'];
userName.sort();
console.log(userName); // [ 'aman', 'dheeraj', 'karan', 'rahul', 'ronak', 'vivek' ]
// it works fine for strings.

const nums2 = [5, 9, 1200, 400, 3000];

// nums2.sort((a,b) => {
//     return a-b;
// });

// console.log(nums2); // [ 1200, 3000, 400, 5, 9 ]

// or

nums2.sort((a,b) => a-b);
console.log(nums2) // [ 5, 9, 400, 1200, 3000 ]

// if the return value is less than 0 then a comes first.
// if the return value is greater than 0 then b comes first.
// if the return value is equal to 0 then a and b remain unchanged.

// if we want to sort the numbers in descending order then we have to provide a callback function to the sort method.

nums2.sort((a,b) => b-a);
console.log(nums2); // [ 3000, 1200, 400, 9, 5 ]

// here in first iteration
// a = 5, b = 9
// returns -4
// in second iteration
// a = 9, b = 1200
// returns -1191
// in third iteration
// a = 1200, b = 400
// returns 800
// in fourth iteration
// a = 1200, b = 3000
// returns -1800
// in fifth iteration
// a = 3000, b = 1200
// returns 1800

// it continues until the array is sorted.

// sorting price low to high
const products = [
    {name: 'laptop', price: 1000},
    {name: 'shirt', price: 500},
    {name: 'watch', price: 600},
    {name: 'phone', price: 1000},
]

const priceHL = products.slice(0).sort((a,b) => {
    //we using slice method here because sort method modifies the original array.
    return a.price - b.price;
})

console.log(priceHL,products);

// Character: a, ASCII Value: 97
// Character: b, ASCII Value: 98
// Character: c, ASCII Value: 99
// Character: d, ASCII Value: 100
// Character: e, ASCII Value: 101
// Character: f, ASCII Value: 102
// Character: g, ASCII Value: 103
// Character: h, ASCII Value: 104
// Character: i, ASCII Value: 105
// Character: j, ASCII Value: 106
// Character: k, ASCII Value: 107
// Character: l, ASCII Value: 108
// Character: m, ASCII Value: 109
// Character: n, ASCII Value: 110
// Character: o, ASCII Value: 111
// Character: p, ASCII Value: 112
// Character: q, ASCII Value: 113
// Character: r, ASCII Value: 114
// Character: s, ASCII Value: 115
// Character: t, ASCII Value: 116
// Character: u, ASCII Value: 117
// Character: v, ASCII Value: 118
// Character: w, ASCII Value: 119
// Character: x, ASCII Value: 120
// Character: y, ASCII Value: 121
// Character: z, ASCII Value: 122
// Character: A, ASCII Value: 65
// Character: B, ASCII Value: 66
// Character: C, ASCII Value: 67
// Character: D, ASCII Value: 68
// Character: E, ASCII Value: 69
// Character: F, ASCII Value: 70
// Character: G, ASCII Value: 71
// Character: H, ASCII Value: 72
// Character: I, ASCII Value: 73
// Character: J, ASCII Value: 74
// Character: K, ASCII Value: 75
// Character: L, ASCII Value: 76
// Character: M, ASCII Value: 77
// Character: N, ASCII Value: 78
// Character: O, ASCII Value: 79
// Character: P, ASCII Value: 80
// Character: Q, ASCII Value: 81
// Character: R, ASCII Value: 82
// Character: S, ASCII Value: 83
// Character: T, ASCII Value: 84
// Character: U, ASCII Value: 85
// Character: V, ASCII Value: 86
// Character: W, ASCII Value: 87
// Character: X, ASCII Value: 88
// Character: Y, ASCII Value: 89
// Character: Z, ASCII Value: 90
// Character: 0, ASCII Value: 48
// Character: 1, ASCII Value: 49
// Character: 2, ASCII Value: 50
// Character: 3, ASCII Value: 51
// Character: 4, ASCII Value: 52
// Character: 5, ASCII Value: 53
// Character: 6, ASCII Value: 54
// Character: 7, ASCII Value: 55
// Character: 8, ASCII Value: 56
// Character: 9, ASCII Value: 57