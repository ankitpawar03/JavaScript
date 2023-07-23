// rest parameter

// function myFunc(a, b, ...c){
//     console.log(`a is ${a}`)
//     console.log(`b is ${b}`)
//     console.log(`c is ${c}`)
// }

// myFunc(1, 2, 3,6,7,8,9,0);

function addAll(...nums){

    // this is called rest parameter
    // rest parameter is used to pass any number of arguments to a function
    
    let sum = 0;
    for(let num of nums){
        sum += num;
    }
    return sum;
}

let ans = addAll(1,2,3,4,5,6,7,8,9,10);

console.log(ans);